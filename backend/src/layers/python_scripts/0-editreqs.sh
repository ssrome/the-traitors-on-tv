sed -i.bak '/docopt==0.6.2/d' requirements.txt
sed -i.bak '/pytest-watch==4.2.0/d' requirements.txt
rm requirements.txt.bak