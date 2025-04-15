import sqlite3
import os

# Ensure the db directory exists
os.makedirs('db', exist_ok=True)

# Create and connect to the database
conn = sqlite3.connect('db/tastytrades.db')
conn.close()
