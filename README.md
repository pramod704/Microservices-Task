# Complete Manual Walkthrough - Docker Microservices Assignment

## Part 1: Verify Docker Setup 

### Step 1.1: Verify Services Are Running


```powershell
cd "c:\Users\Pramod Singh\Task 1 Assignment\Microservices-Task\submission"
docker compose ps
```

```
NAME                           IMAGE                        COMMAND                  SERVICE           STATUS         PORTS
submission-user-service-1      submission-user-service      "docker-entrypoint.s…"   user-service      Up 9 seconds   0.0.0.0:3000->3000/tcp
submission-product-service-1   submission-product-service   "docker-entrypoint.s…"   product-service   Up 9 seconds   0.0.0.0:3001->3001/tcp
submission-order-service-1     submission-order-service     "docker-entrypoint.s…"   order-service     Up 9 seconds   0.0.0.0:3002->3002/tcp
submission-gateway-service-1   submission-gateway-service   "docker-entrypoint.s…"   gateway-service   Up 9 seconds   0.0.0.0:3003->3003/tcp
```
Test Each Service (Browser Screenshots)

### Step 2.1: Test User Service
```
http://localhost:3000/users
```
[{"id":1,"name":"John Doe"},{"id":2,"name":"Jane Smith"}]
```

---

### Step 2.2: Test Product Service
```
http://localhost:3001/products
```
```json
[{"id":1,"name":"Laptop","price":999},{"id":2,"name":"Phone","price":699}]
```

---

### Step 2.3: Test Order Service
```
http://localhost:3002/orders
```

**SCREENSHOT 4**: 
```json
[]
```

---

### Step 2.4: Test Gateway Service

http://localhost:3003/api/users
```
```json
[{"id":1,"name":"John Doe"},{"id":2,"name":"Jane Smith"}]

### Step 3.1: View Service Logs
docker compose logs
```
```
user-service-1     | User service running on port 3000
product-service-1  | Product service running on port 3001
order-service-1    | Order service running on port 3002
gateway-service-1  | Gateway service running on port 3003
```

---

c:\Users\Pramod Singh\Task 1 Assignment\Microservices-Task\submission
```
```
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

### Step 4.2: Dockerfile

FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "app.js"]
```



### Step 5.2: Clone fork
In PowerShell, run:

```powershell
cd "c:\Users\Pramod Singh\Task 1 Assignment"
git clone https://github.com/PRAMOD704/Microservices-Task.git
cd Microservices-Task
```

---

### Step 5.3: Submission Files


```powershell

xcopy "c:\Users\Pramod Singh\Task 1 Assignment\Microservices-Task\submission\*" . /E /I /Y
``

### Step 5.4: Check Git Status

git status

```
### Step 5.5: Stage All Changes

```powershell
git add .
```

---

### Step 5.6: Commit Changes

git commit -m "Add Docker containerization and Docker Compose orchestration

- Created Dockerfiles for user, product, order, and gateway services using node:20-alpine base image
- All Dockerfiles include proper working directory, dependency installation, and CMD instructions
- Created docker-compose.yml with all 4 services defined
- Configured port mappings: user (3000), product (3001), order (3002), gateway (3003)
- Set up shared network for inter-service communication
- Updated service code to listen on all interfaces (0.0.0.0)
- Configured environment variables for service URLs in gateway
- All services verified running and responding on localhost"
```

### Step 5.7: Push to GitHub

git push origin main
```
Enumerating objects: X, done.
Counting objects: 100% (X/X), done.
Delta compression using up to X threads
Compressing objects: 100% done.
Writing objects: 100% done.
Total X (delta Y), reused 0 (delta 0), pack-reused 0
To https://github.com/YOUR_USERNAME/Microservices-Task.git
   abc1234..def5678  main -> main
---

## Part 6: Final Verification

cd "c:\Users\Pramod Singh\Task 1 Assignment\Microservices-Task\submission"
docker compose down

docker compose up --build -d
docker compose ps
```


If ports are already in use:
```powershell
# Kill existing processes using ports
Get-NetTCPConnection -LocalPort 3000,3001,3002,3003 -State Listen -ErrorAction SilentlyContinue | Select-Object -ExpandProperty OwningProcess | Stop-Process -Force
```

If git push fails:
```powershell
# Verify git configuration
git config user.name
git config user.email

# Check remote
git remote -v

# Try push again with force (use carefully)
git push origin main -f
```

---

## Final Submission URL Format

After completing all steps, your submission should be:

```
https://github.com/pramod704Microservices-Task
```

