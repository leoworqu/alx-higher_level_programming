#!/usr/bin/python3

"""a script that lists all states with a name starting with N (upper N) from a database
"""

import MySQLdb
import sys

def list_states(username, password, database):
    conn = MySQLdb.connect(host="localhost", port=3306, user=username, passwd=password, db=database, charset="utf8")
    cur = conn.cursor()
    
    # Execute the SQL query to fetch states with names starting with 'N'
    cur.execute("SELECT * FROM states WHERE name LIKE 'N%' ORDER BY id ASC")
    
    query_rows = cur.fetchall()
    
    for row in query_rows:
        print(row)
    
    cur.close()
    conn.close()

if __name__ == "__main__":
    list_states(*sys.argv[1:])
