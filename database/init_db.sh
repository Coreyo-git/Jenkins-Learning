#!/bin/bash

# Imports the seed data on gen

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    CREATE USER jenkinsuser;
    CREATE DATABASE shopping_db;
    GRANT ALL PRIVILEGES ON DATABASE shopping_db TO jenkinsuser;
EOSQL

psql -f /db-dumps/db.dump.sql shopping_db