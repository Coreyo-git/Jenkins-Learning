#!/bin/bash

# Imports the seed data on gen

su postgres
psql -f /db-dumps/db.dump.sql