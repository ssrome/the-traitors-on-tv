sed -i.bak '/docopt==0.6.2/d' requirements.txt
sed -i.bak '/pytest-watch==4.2.0/d' requirements.txt
sed -i.bak '/algoliasearch==4.16.4/d' requirements.txt
sed -i.bak '/boto3==1.38.8/d' requirements.txt
sed -i.bak '/botocore==1.38.8/d' requirements.txt
rm requirements.txt.bak