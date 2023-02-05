#!/bin/sh


set -e #exit immidiatly when some app exits with error 

echo "run db migration"
/app/migrate -path /app/migration -database "$DB_SOURCE" -verbose up

echo "start up"
exec "$@" # execute all params  passed to script 
  
