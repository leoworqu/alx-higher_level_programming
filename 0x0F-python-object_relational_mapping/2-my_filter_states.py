#!/usr/bin/python3

import MySQLdb
import sys

""" a script that takes in an argument and displays all values in the
states table of hbtn_0e_0_usa where name matches the argument.
"""

def search_states_by_name(username, password, database, state_name):
    """ a script that takes in an argument and displays all values in the
    states table of hbtn_0e_0_usa where name matches the argument.
    """
    conn = MySQLdb.connect(host="localhost", port=3306, user=username, passwd=password, db=database, charset="utf8")
    cur = conn.cursor()

    # Use parameterized query to avoid SQL injection
    query = '''
            SELECT * FROM states
            WHERE states.name = '{}'
            ORDER BY states.id
            '''.format(state_name)
    cur.execute(query)

    query_rows = cur.fetchall()

    for row in query_rows:
        print(row)

    cur.close()
    conn.close()

if __name__ == "__main__":
    search_states_by_name(*sys.argv[1:])
