# Docker Compose Microservices Assignment

## What is included
- User service Dockerfile
- Product service Dockerfile
- Order service Dockerfile
- Gateway service Dockerfile
- docker-compose.yml

## Setup
1. Open terminal in this submission folder.
2. Run:
   ```bash
   docker compose up --build -d
   ```
3. Verify the services:
   - http://localhost:3000/users
   - http://localhost:3001/products
   - http://localhost:3002/orders
   - http://localhost:3003/api/users

## Useful commands
```bash
docker compose ps
docker compose logs -f
docker compose down
```

## Troubleshooting
- If a port is already in use, stop the process using it or change the ports in docker-compose.yml.
- If one service fails, inspect logs with `docker compose logs <service-name>`.
