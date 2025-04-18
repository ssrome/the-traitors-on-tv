# import boto3
# import botocore
import datetime
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

# if __name__ == "__main__":
#   print(uuid.uuid4())
def handler(event, context):
  url = os.environ.get('TMDB_API') + "231478"
  
  params = {
    "api_key":  os.environ.get('TMDB_API_KEY')
  }
  headers = {
    "accept": "application/json",
    }

  response = requests.get(url, params=params, headers=headers)
  response_json = response.json()
  date_now = datetime.datetime.now()
  # additional_properties = { uuid: uuid.uuid4(), 'objectID': 231478, 'updatedTimestamp':  date_now}

  to_save = {**response.json(), 'objectID': 231478 }

  app_id = os.environ.get('ALGOLIA_APPLICATION_ID')
  api_key = os.environ.get('ALGOLIA_API_KEY')
  index_name = os.environ.get('ALGOLIA_INDEX')

  client = SearchClientSync(app_id, api_key)
  record = to_save

  save_resp = client.save_object(
    index_name=index_name, body=record,
    )

  client.wait_for_task(
      index_name=index_name,
      task_id=save_resp.task_id,
  )
  
  print(to_save)
  print(save_resp)
  return "saved"
