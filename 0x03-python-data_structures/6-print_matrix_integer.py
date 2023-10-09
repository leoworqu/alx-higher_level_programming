#!/usr/bin/python3

def print_matrix_integer(matrix=[[]]):
    for row in matrix:
        for column in row:
             print("{:d}".format(column), end=" " if col != row[-1] else "")
        print()
