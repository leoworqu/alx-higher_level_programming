#!/usr/bin/python3
"""
list 10 commits (from the most recent to oldest) of the repository
“rails” by the user “rails” You must use the GitHub API,
"""


import requests
import sys

if __name__ == "__main__":
    repository_name = sys.argv[1]
    owner_name = sys.argv[2]

    u = f'https://api.github.com/repos/{owner_name}/{repository_name}/commits'
    params = {'per_page': 10}
    response = requests.get(u, params=params)

    if response.status_code == 200:
        commits = response.json()
        for commit in commits:
            sha = commit['sha']
            author_name = commit['commit']['author']['name']
            print(f"{sha}: {author_name}")
    else:
        print(f"Status code: {response.status_code}")
