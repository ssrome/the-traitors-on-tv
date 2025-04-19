predeploy0:
	mkdir dist && cp requirements.txt ./dist && cp -r ./src/handlers/. ./dist && cd dist && pip install -r requirements.txt

predeploy:
	mkdir dist && cp -r ./src/handlers/. ./dist && cp -r ./src/layers/. ./dist

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

uninstall-req:
	pip uninstall -r requirements.txt -y

python-layer:
	cd src/layers/python_scripts && cp ../../../requirements.txt . && ./1-install.sh && ./2-package.sh

CallTmdbApi:
	sam local invoke CallTmdbApi --env-vars env.json