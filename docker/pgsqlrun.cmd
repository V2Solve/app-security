docker volume create appsecdb_data
docker run -d -p 5432:5432 --name appsecuritydb -e SUPER_CLIENT_ID=saurinya@gmail.com -e POSTGRES_PASSWORD=password -e PGDATA=/var/lib/postgresql/data/pgdata -v appsecdb_data:/var/lib/postgresql/data appsecdb:1.0