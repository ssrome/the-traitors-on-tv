install-fe:
	npm install --prefix frontend

run-fe:
	npm start --prefix frontend

build-fe:
	npm build --prefix frontend

test-fe:
	npm run test:unit --prefix frontend

test-be:
	cd backend && pytest

update-req:
	cd backend && pip freeze > requirements.txt 

watch-test-report:
	pytest-watch --beforerun "pytest --html=./test-report.html --self-contained-html"  --prefix backend
.PHONY: watch-test-report

watch-test:
	cd backend && pytest-watch
