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

    print(bucket)
    print(key)
   
    try:
        fileFromBucket = s3.get_object(Bucket=bucket, Key=key)
        with open(fileFromBucket, mode ='r', newline='', encoding='utf-8') as file:
            heading = next(file) 
            csvFile = csv.reader(file)
            for lines in csvFile:
                id = int(lines[0])
                print(id)
  
    except Exception as e:
        print(e)
        print('Error getting object {} from bucket {}. Make sure they exist and your bucket is in the same region as this function.'.format(key, bucket))
        raise e
              
