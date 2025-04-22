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
	cd src/layers/python_scripts && cp ../../../requirements.txt . && ./0-editreqs.sh && ./2-install.sh && ./3-package.sh

CallTmdbApi:
	sam local invoke CallTmdbApi --env-vars env.json