#!/usr/bin/python3
"""0-select_states module
Lists all states from the database hbtn_0e_0_usa
"""
import MySQLdb
import sys

def list_states(username, password, database):
    """ Establish a connection to the MySQL server
    """
    conn = MySQLdb.connect(host="localhost", port=3306, user=username, passwd=password, db=database, charset="utf8")
    cur = conn.cursor()
    cur.execute("SELECT * FROM states ORDER BY id ASC")
    query_rows = cur.fetchall()
    for row in query_rows:
        print(row)
    cur.close()
    conn.close()

if __name__ == "__main__":
    """ executes  a connection to the MySQL server
    """
    list_states(*sys.argv[1:])
