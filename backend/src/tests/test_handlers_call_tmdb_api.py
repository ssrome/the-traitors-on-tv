import json
import pytest
from pytest import MonkeyPatch as monkeypatch
import unittest
from unittest.mock import MagicMock
from unittest.mock import patch
from datetime import datetime, timezone
from dotenv import load_dotenv, dotenv_values
import requests
import os
from handlers.call_tmdb_api.handler import handler, get_ids, get_tmdb_info, save_to_algolia
from os.path import join, dirname
from dotenv import load_dotenv

envs = {
    "TMDB_API": "https://example.com/api/",
    "TMDB_API_KEY": "example_key"
}

@pytest.fixture
def get_tmdb_info_response_mock():
    mock_response = requests.Response()
    mock_response.status_code = 200
    mock_response._content = json.dumps({
        "status_code": 200,
    }).encode("utf-8")
    return mock_response


@pytest.fixture
def get_tmdb_info_error_response_mock():
    mock_response = requests.Response()
    mock_response.status_code = 404
    mock_response._content = json.dumps({
        "success": "false",
        "status_code": 6,
        "status_message": "Invalid id: The pre-requisite id is invalid or not found."
    }).encode("utf-8")
    return mock_response

@pytest.fixture
def get_tmdb_info_mock():
    return get_tmdb_info("2123", envs["TMDB_API"], envs["TMDB_API_KEY"])

@pytest.fixture
def set_env(monkeypatch):
    monkeypatch.setenv("TMDB_API", envs["TMDB_API"])
    monkeypatch.setenv("TMDB_API_KEY", envs["TMDB_API_KEY"])
    monkeypatch.setenv("ALGOLIA_APPLICATION_ID","32")
    monkeypatch.setenv("ALGOLIA_API_KEY", "12321")
    monkeypatch.setenv("ALGOLIA_INDEX", "test_index")

@pytest.fixture
def get_ids_mock(mocker):
    get_ids_mock = mocker.patch("handlers.call_tmdb_api.handler.get_ids")
    get_ids_mock.return_value = [{"objectID": 232058}]

@pytest.fixture
def get_multiple_ids_mock(mocker):
    get_ids_mock = mocker.patch("handlers.call_tmdb_api.handler.get_ids")
    get_ids_mock.return_value = [{"objectID": 232057}, {"objectID": 232058}]

@pytest.fixture
def save_to_algolia_mock(mocker):
    save_to_algolia_mock = mocker.patch("handlers.call_tmdb_api.handler.save_to_algolia")
    save_to_algolia_mock.return_value = '232058'

@pytest.fixture
def save_multiple_to_algolia_mock(mocker):
    save_to_algolia_mock = mocker.patch("handlers.call_tmdb_api.handler.save_to_algolia")
    save_to_algolia_mock.side_effect = ['232057', '232058']
    
@pytest.fixture
def save_to_algolia_error_mock(mocker):
    save_to_algolia_mock = mocker.patch("handlers.call_tmdb_api.handler.save_to_algolia")
    save_to_algolia_mock.return_value = ""

@pytest.fixture
def save_multiple_to_algolia_one_error_mock(mocker):
    save_to_algolia_mock = mocker.patch("handlers.call_tmdb_api.handler.save_to_algolia")
    save_to_algolia_mock.side_effect = ['232057', '']


def test_handler(get_tmdb_info_mock, get_tmdb_info_response_mock, set_env, get_ids_mock, save_to_algolia_mock):
    with patch.object(requests, "get", return_value=get_tmdb_info_response_mock) as stub:
        result = handler(None, None)
        assert result == '{"errors": [], "saved": [232058]}'

def test_handler_multiple_ids(get_tmdb_info_mock, get_tmdb_info_response_mock, set_env, get_multiple_ids_mock, save_multiple_to_algolia_mock):
    with patch.object(requests, "get", return_value=get_tmdb_info_response_mock) as stub:
     
        result = handler(None, None)

        assert result == '{"errors": [], "saved": [232057, 232058]}'

def test_handle_tmdb_error(get_tmdb_info_mock, get_tmdb_info_error_response_mock, set_env, get_ids_mock, save_to_algolia_mock):
    with patch.object(requests, "get", return_value=get_tmdb_info_error_response_mock) as stub:
        
        result = handler(None, None)
        
        stub.assert_called_once()
        assert result == '{"errors": [232058], "saved": []}'

def test_handle_algolia_not_saving(get_tmdb_info_mock, get_tmdb_info_response_mock, set_env, get_ids_mock, save_to_algolia_error_mock):
    with patch.object(requests, "get", return_value=get_tmdb_info_response_mock) as stub:
        result = handler(None, None)
        
        stub.assert_called_once()
        assert result == '{"errors": [232058], "saved": []}'

def test_handle_algolia_not_saving_one_of_mulitple(get_tmdb_info_mock, get_tmdb_info_response_mock, set_env, get_multiple_ids_mock, save_multiple_to_algolia_one_error_mock):
    with patch.object(requests, "get", return_value=get_tmdb_info_response_mock) as stub:
        result = handler(None, None)
        
        assert result == '{"errors": [232058], "saved": [232057]}'