#!/usr/bin/python3
"""
Module 100-my_int

"""

class MyInt(int):
    """
    Methods:
        __init__(self, num)
        __eq__(self, other)
        __ne__(self, other)
    """

    def __eq__(self, other):

        """
        Return:
           True if both not equal
        """

        return super().__ne__(other)

    def __ne__(self, other):

        """
        Return:
           True if both not equal
        """

        return super().__eq__(other)
