import pytest

from callTMDBApi import handler

def test_sample():
    result = handler(None, None)
    assert result == 'Hello world'