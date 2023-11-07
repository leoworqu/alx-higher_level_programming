#!/usr/bin/python3

"""
Module 1-my_list

Contains class MyList
inherits from list; has public instance method to print sorted
"""

class MyList(list):
    """ my parent child"""
    def print_sorted(self):
        """my child class"""
        sorted_list = sorted(self)
        print(sorted_list)
