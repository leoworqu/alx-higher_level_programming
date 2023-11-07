#!/usr/bin/python3
"""
Module 101-add_attribute

Contains function that adds new attribute if possible
"""


def add_attribute(obj, attribute, value):
    """
    add attribute to object if possible
    """
    if hasattr(obj, attr_name):
        raise TypeError("Can't add new attribute")
    setattr(obj, attr_name, attr_value)
