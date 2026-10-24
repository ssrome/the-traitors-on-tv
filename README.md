# README

### Create environment

`cd backend && uv venv env`

or

`cd backend && python3 -m venv env`

### Start environment

`source env/bin/activate`

### Install dependancies

`uv pip install -r requirements.txt`

### Stop environment

`deactivate`

### Invoke lambda

`sam local invoke [lambda name] --env-vars env.json`
