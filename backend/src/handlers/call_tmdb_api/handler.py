from datetime import datetime, timezone
import requests
import os
import sys
from dotenv import load_dotenv
from algoliasearch.search.client import SearchClientSync
import time
import json
import boto3

load_dotenv()

def handler(event, context):
  tmdb_api = os.environ.get('TMDB_API')
  tmdb_api_key = os.environ.get('TMDB_API_KEY') 

  response = ''

  try:
    snsMessage = event["Records"][0]["Sns"]["Message"]

    key = 'objectID'

    if key in snsMessage:

      id = snsMessage

      string_id = str(id["objectID"])

      tmdb_response = get_tmdb_info(string_id, tmdb_api, tmdb_api_key)
    
      if tmdb_response.status_code == 200:
        response_json = tmdb_response.json()
        
        date_now = datetime.now(tz=timezone.utc).strftime("%Y-%m-%d %H:%M:%S")

        to_save = {** tmdb_response.json(), 'objectID': id["objectID"], 'updatedTimestamp': date_now }

        saved_response_id = save_to_algolia(to_save)
      
        if(saved_response_id == string_id):
          response = string_id + " was saved"

        else:
          response = string_id + " failed to save"
          print(string_id + " failed to save")
        
      else:
        response = string_id + " failed to fetch"
        print(string_id + " failed to fetch")

    else: 
      response = "There was an error"
      print("There was an error")

  except Exception as e:
    response = "There was an error"

  return json.dumps({
    "message": response,
  })

def get_tmdb_info(series_id, tmdb_api, tmdb_api_key):
  
  url = tmdb_api + series_id
    
  params = {
    "api_key": tmdb_api_key
  }

  headers = {
    "accept": "application/json",
  }

  return requests.get(url, params=params, headers=headers)


def save_to_algolia(object_to_save):
  app_id = os.environ.get('ALGOLIA_APPLICATION_ID')
  api_key = os.environ.get('ALGOLIA_API_KEY')
  index_name = os.environ.get('ALGOLIA_INDEX')

  client = SearchClientSync(app_id, api_key)
  record = object_to_save

  saved_response = client.save_object(
    index_name=index_name, body=record,
    )

  client.wait_for_task(
    index_name=index_name,
    task_id=saved_response.task_id,
  )

  return saved_response.object_id