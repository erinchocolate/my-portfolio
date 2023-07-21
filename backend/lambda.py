import boto3
import os

def lambda_handler(event:any, context:any):
    
    user=event['user']
    visit_count:int=0
    boto3.setup_default_session(region_name='ap-southeast-2')
    dynamodb = boto3.resource('dynamodb')
    table_name = os.environ['TABLE_NAME']
    table = dynamodb.Table(table_name)

    response = table.get_item(Key={'user': user})

    if 'Item' in response:
        visit_count = response['Item']['count']

    visit_count += 1

    table.put_item(Item={'user': user, 'count': visit_count})

    message = "Hello " + user + ", you have visited this page " + str(visit_count) + " times."

    return {"message": message}

if __name__ == "__main__":
    os.environ['TABLE_NAME'] = 'visit-count-table'
    event = {"user": "meiqiao"}
    context = {}
    print(lambda_handler(event, context))

