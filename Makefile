install-fe:
	npm install --prefix frontend

install-be:
	pip install -r requirements.txt --prefix backend

run-fe:
	npm start --prefix frontend

build-fe:
	npm build --prefix frontend

test-fe:
	npm run test:unit --prefix frontend

test-be:
	cd backend && pytest

update-req:
	pip freeze > requirements.txt  --prefix backend

watch-test-report:
	pytest-watch --beforerun "pytest --html=./test-report.html --self-contained-html"  --prefix backend
.PHONY: watch-test-report

watch-test:
	pytest-watch  --prefix backend

