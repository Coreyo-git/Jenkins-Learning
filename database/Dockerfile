FROM postgres:14

ADD ./init_db.sh /docker-entrypoint-initdb.d/
ADD ./db.dump.sql /db-dumps/