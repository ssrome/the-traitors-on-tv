predeploy:
	mkdir dist && cp -r ./src/handlers/. ./dist && cp -r ./src/layers/. ./dist

create-env:
	python3 -m venv traitorsontv

run-env:
	source traitorsontv/bin/activate

end-env:
	deactivate

install-be:
	pip install -r requirements.txt

update-req:
	pip freeze > requirements.txt 

uninstall-req:
	pip uninstall -r requirements.txt -y

remove-dependancies-for-tests:
	bash remove-dependancies-for-tests.sh

prepare-layers:
	make call-tmdb-api-layer
	make python-layer

call-tmdb-api-layer:
	cd src/layers/call_tmdb_api && cp ../../../requirements.txt . && bash ./0-editreqs.sh && ./1-install.sh && ./2-package.sh

get-ids-layer:
	cd src/layers/get_ids && cp ../../../requirements.txt . && bash ./0-editreqs.sh && ./1-install.sh && ./2-package.sh

python-layer:
	cd src/layers/python_scripts && cp ../../../requirements.txt . && bash ./0-editreqs.sh && ./1-install.sh && ./2-package.sh

CallTmdbApi:
	sam local invoke CallTmdbApi --env-vars env.json -e snsEvent.json

GetIds:
	sam local invoke GetIds --env-vars env.json -e s3Event.json

delete:
	cd src/layers &&  bash ./delete-files.sh