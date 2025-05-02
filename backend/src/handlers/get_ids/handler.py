import json
import urllib.parse
import boto3
from dotenv import load_dotenv
import csv

load_dotenv()

print('Loading function')

s3 = boto3.client('s3')

def handler(event, context):
    # print("Received event: " + json.dumps(event, indent=2))
   
    bucket = event['Records'][0]['s3']['bucket']['name']
    
    key = urllib.parse.unquote_plus(event['Records'][0]['s3']['object']['key'], encoding='utf-8')
   
    try:
        fileFromBucket = s3.get_object(Bucket=bucket, Key=key)
        # fileFromBucket = "./theTraitors-dev.csv"
        with open(fileFromBucket, mode ='r', newline='', encoding='utf-8') as file:
            heading = next(file) 
            csvFile = csv.reader(file)
            for lines in csvFile:
                id = int(lines[0])
                print(id)
    
    #     return response['ContentType']
    except Exception as e:
        print(e)
        print('Error getting object {} from bucket {}. Make sure they exist and your bucket is in the same region as this function.'.format(key, bucket))
        raise e
              
