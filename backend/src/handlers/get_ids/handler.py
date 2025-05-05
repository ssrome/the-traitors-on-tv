import json
import boto3
from dotenv import load_dotenv
import csv

load_dotenv()

print('Loading function')

s3 = boto3.client('s3')

def handler(event, context):
    bucket = event['Records'][0]['s3']['bucket']['name']
    key = event['Records'][0]['s3']['object']['key']

    try:
        fileFromBucket = s3.get_object(Bucket=bucket, Key=key)
        
        csvcontent = fileFromBucket['Body'].read().decode('utf-8').splitlines()
   
        lines = csv.reader(csvcontent)
        headers = next(lines)
        for line in lines:
            print(line[0])
  
    except Exception as e:
        print(e)
        print('Error getting object {} from bucket {}. Make sure they exist and your bucket is in the same region as this function.'.format(key, bucket))
        raise e
