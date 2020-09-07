REM docker volume create appsecdb_data
docker volume create tempappsecdb
docker run -d -p 5432:5432 --name appsecuritydb -e SUPER_CLIENT_ID=saurinya@gmail.com -e POSTGRES_PASSWORD=password -e PGDATA=/var/lib/postgresql/data/pgdata -v tempappsecdb:/var/lib/postgresql/data appsecdb:1.0