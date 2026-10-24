python3.14.9 -m venv create_layer
source create_layer/bin/activate
pip install -r requirements.txt --platform manylinux2014_x86_64 --target ./python --only-binary=:all: