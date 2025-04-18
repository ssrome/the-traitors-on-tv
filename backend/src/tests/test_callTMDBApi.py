import pytest
import uuid
import unittest
from unittest.mock import MagicMock
from unittest.mock import patch
import datetime
# from apiclient import APIClient
from handlers.callTMDBApi import handler

# class MyClient(APIClient):

@pytest.fixture
def date_time_now_mock():
    return MagicMock(return_value=datetime.date(2012, 1, 14))


# @pytest.fixture
# def mock_tmdb_response():
#     with patch('requests.get') as mock_get:
#         yield mock_get

# def test_handler(mock_tmdb_response):
#     mock_tmdb_response.return_value.json.return_value = {'key': 'value'}
#     mock_tmdb_response.return_value.status_code = 200
#     client = APIClient()
#     url = os.environ.get('TMDB_API') + "231478"
#     result = client.get_data(url)
#     # Asserts
#     assert result.json() == {'key': 'value'}
#     assert result.status_code == 200
#     mock_tmdb_response.assert_called_once_with(url)

# @patch('uuid.uuid4')
def test_handler():
    result = handler(None, None)
    assert result == 'saved'