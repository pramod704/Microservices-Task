Microservices Assignment
few screenshot are in my word file

Verify Docker Setup 

cd "c:\Users\Pramod Singh\Task 1 Assignment\Microservices-Task\submission"
docker compose ps

NAME                           IMAGE                        COMMAND                  SERVICE           STATUS         PORTS
submission-user-service-1      submission-user-service      "docker-entrypoint.s…"   user-service      Up 9 seconds   0.0.0.0:3000->3000/tcp
submission-product-service-1   submission-product-service   "docker-entrypoint.s…"   product-service   Up 9 seconds   0.0.0.0:3001->3001/tcp
submission-order-service-1     submission-order-service     "docker-entrypoint.s…"   order-service     Up 9 seconds   0.0.0.0:3002->3002/tcp
submission-gateway-service-1   submission-gateway-service   "docker-entrypoint.s…"   gateway-service   Up 9 seconds   0.0.0.0:3003->3003/tcp

 Test User Service

http://localhost:3000/users

[{"id":1,"name":"John Doe"},{"id":2,"name":"Jane Smith"}]

 Product Service

http://localhost:3001/products

[{"id":1,"name":"Laptop","price":999},{"id":2,"name":"Phone","price":699}]

Test Order Service

http://localhost:3002/orders
json
[]
Gateway Service

http://localhost:3003/api/users
json
[{"id":1,"name":"John Doe"},{"id":2,"name":"Jane Smith"}]
ervice Logs
docker compose logs
user-service-1     | User service running on port 3000
product-service-1  | Product service running on port 3001
order-service-1    | Order service running on port 3002
gateway-service-1  | Gateway service running on port 3003

c:\Users\Pramod Singh\Task 1 Assignment\Microservices-Task\submission
submission/
├── user-service/
│   ├── Dockerfile
│   ├── app.js
│   └── package.json
├── product-service/
│   ├── Dockerfile
│   ├── app.js
│   └── package.json
├── order-service/
│   ├── Dockerfile
│   ├── app.js
│   └── package.json
├── gateway-service/
│   ├── Dockerfile
│   ├── app.js
│   └── package.json
├── docker-compose.yml
└── README.md
Dockerfile

cd "c:\Users\Pramod Singh\Task 1 Assignment"
git clone https://github.com/pramod704/Microservices-Task.git
cd Microservices-Task

git status

git add .

cd "c:\Users\Pramod Singh\Task 1 Assignment\Microservices-Task\submission"
docker compose down

docker compose up --build -d
docker compose ps
