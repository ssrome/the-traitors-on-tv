# import boto3
# import botocore
import requests
import uuid
import os
import sys
from dotenv import load_dotenv
from algoliasearch.search.client import SearchClientSync

load_dotenv()

ids = [
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

# url = os.environ.get('TMDB_API')

def handler(event, context):
# if __name__ == "__main__":
  url = os.environ.get('TMDB_API') + "231478"
  print(url)
  params = {
    "api_key":  os.environ.get('TMDB_API_KEY')
  }
  headers = {
    "accept": "application/json",
    }

  response = requests.get(url, params=params, headers=headers)
  response_json = response.json()

  to_save = {**response.json(), 'objectID': 231478 }

  app_id = os.environ.get('ALGOLIA_APPLICATION_ID')
  api_key = os.environ.get('ALGOLIA_API_KEY')
  index_name = os.environ.get('ALGOLIA_INDEX')

  client = SearchClientSync(app_id, api_key)
  record = to_save

  # Add record to an index
  save_resp = client.save_object(
    index_name=index_name, body=record,
    )

  # Wait until indexing is done
  client.wait_for_task(
      index_name=index_name,
      task_id=save_resp.task_id,
  )
  
  print(to_save)
