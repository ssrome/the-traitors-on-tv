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
	cd src/handlers/callTMDBApi && mkdir package && pip install --target ./package -r ../../../requirements.txt && cd package && zip -r ../my_deployment_package.zip . && cd .. && zip my_deployment_package.zip handler.py