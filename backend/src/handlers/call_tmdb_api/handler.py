from datetime import datetime, timezone
import requests
import uuid_utils as uuid
import os
import sys
from dotenv import load_dotenv
from algoliasearch.search.client import SearchClientSync
import time
import json

load_dotenv()

def handler(event, context):
  tmdb_api = os.environ.get('TMDB_API')
  tmdb_api_key = os.environ.get('TMDB_API_KEY')  

  ids_to_save = get_ids()
  saved_ids = []
  error_ids = []

  for id in ids_to_save:

    string_id = str(id["objectID"])

    response = get_tmdb_info(string_id, tmdb_api, tmdb_api_key)
  
    if response.status_code == 200:
      response_json = response.json()
      
      date_now = datetime.now(tz=timezone.utc).strftime("%Y-%m-%d %H:%M:%S")
      uuid_value = uuid.uuid4()

      to_save = {**response.json(), "uuid": str(uuid_value), 'objectID': id["objectID"], 'updatedTimestamp': date_now }

      saved_response_id = save_to_algolia(to_save)
    
      if(saved_response_id == string_id):
        saved_ids.append(id["objectID"])

      else:
        error_ids.append(id["objectID"])
        print(string_id + " failed to save")
      
    else:
      error_ids.append(id["objectID"])
      print(string_id + " failed to fetch")
      
  return json.dumps({
    "errors": error_ids,
    "saved": saved_ids
  })

id_list = [
    {
      "objectID": 231478
    },
    {
      "objectID": 208398
    },
    {
      "objectID": 234294
    },
    {
      "objectID": 117893
    },
    {
      "objectID": 246125
    },
    {
      "objectID": 244999
    },
    {
      "objectID": 223503
    },
    {
      "objectID": 232058
    },
    {
      "objectID": 285613
    },
    {
      "objectID": 261325
    }
  ]

def get_ids():
  return id_list

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