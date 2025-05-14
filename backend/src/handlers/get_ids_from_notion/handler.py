import json
import boto3
from dotenv import load_dotenv
import csv
import os
import requests
from urllib.parse import urlparse

load_dotenv()

s3 = boto3.client('s3')

def handler(event, context):
 
    response = ''

    if("source" in event and event["source"] == "aws.events"):
        response = "event"

        notion_response = get_info_from_notion(
            notion_url = os.environ.get('NOTION_URL'),
            notion_database_id = os.environ.get('NOTION_DATABASE_ID'),
            notion_secret_key = os.environ.get('NOTION_SECRET_KEY'),
            environment_filter = os.environ.get('ENVIRONMENT_FILTER')
        )
        if notion_response.status_code == 200:
            response = "event"
            info_to_send = []
            response_json = notion_response.json()
            
            for page in response_json["results"]:

                publish_to_sns(page["properties"]["TMDB_Id"]["number"],  page["properties"]["Type"]["select"]["name"])
                
                info_to_send.append({
                    "id": page["properties"]["TMDB_Id"]["number"],
                    "type": page["properties"]["Type"]["select"]["name"]
                })
            
            return json.dumps({
                "message": info_to_send
                })
        else:
            response = "There was an error"
    
    return json.dumps({
        "message": response,
        })

def get_info_from_notion(notion_url, notion_database_id, notion_secret_key, environment_filter):
    
    headers = {
        "Authorization": "Bearer " + notion_secret_key,
        "Content-Type": "application/json",
        "Notion-Version": "2022-06-28",
    }

    filter = {
        "filter": {
            "property": "Env",
            "multi_select": {
                "contains": environment_filter
            }
        }
    }

    try:

        url = notion_url + notion_database_id + "/query?filter_properties=kiTr&filter_properties=%60D%60%7B"
    
        response = requests.post(url, json=filter, headers=headers)
        return response
    
    except Exception as e:
        print(e)
        print('Error getting information')
        raise e

    
def publish_to_sns(id, show_type):
    client = boto3.client('sns')
    response = client.publish(
        TargetArn=os.environ.get('SNS_TOPIC'),
        # Message=json.dumps({"default":json.dumps({'objectID': id, "traitorsShowType": show_type})}),
        Message=json.dumps({"default":json.dumps({'objectID': id})}),
        MessageStructure='json'
    )
    print(response)