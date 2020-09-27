docker volume create appsecdb_data
REM docker volume create tempappsecdb
docker run -d -p 5432:5432 --name appsecuritydb -e SUPER_CLIENT_ID=admin -e POSTGRES_PASSWORD=password -e PGDATA=/var/lib/postgresql/data/pgdata -v appsecdb_data:/var/lib/postgresql/data v2solve-app-sec-db:1.0