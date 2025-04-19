predeploy:
	mkdir dist && cp requirements.txt ./dist && cp -r ./src/handlers/. ./dist && cd dist && pip install -r requirements.txt

run-env:
	source traitorsontv/bin/activate

end-env:
	deactivate

install-be:
	pip install -r requirements.txt

update-req:
	pip freeze > requirements.txt 

deployment-package:
	cd src/handlers/call_tmdb_api && mkdir python && pip install --target ./python -r ../../../requirements.txt 
	
de:
	&& cd python && zip -r ../deployment_package.zip . && cd .. && zip deployment_package.zip handler.py