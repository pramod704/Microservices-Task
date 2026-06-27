# GitHub Submission Guide

## Complete Submission Checklist

### Step 1: Fork the Original Repository
1. Open GitHub in your browser: https://github.com/pramod704/Microservices-Task
2. Click the **"Fork"** button at the top-right corner
3. Choose your account as the destination
4. GitHub will create a copy of the repo under your account (e.g., YOUR_USERNAME/Microservices-Task)

### Step 2: Clone Your Forked Repository
Open PowerShell/Terminal and run:

```powershell
cd "c:\Users\Pramod Singh\Task 1 Assignment"
git clone https://github.com/YOUR_USERNAME/Microservices-Task.git
cd Microservices-Task
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### Step 3: Copy Submission Files
Copy the submission folder contents into your cloned repo:

```powershell
# From your current directory in the cloned repo:
xcopy "c:\Users\Pramod Singh\Task 1 Assignment\Microservices-Task\submission\*" . /E /I
```

Or manually copy these files to your cloned repo root:
- user-service/Dockerfile
- user-service/app.js
- user-service/package.json
- product-service/Dockerfile
- product-service/app.js
- product-service/package.json
- order-service/Dockerfile
- order-service/app.js
- order-service/package.json
- gateway-service/Dockerfile
- gateway-service/app.js
- gateway-service/package.json
- docker-compose.yml
- README.md

### Step 4: Verify File Structure
Your repo should look like:

```
Microservices-Task/
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
├── README.md
└── (other original files)
```

### Step 5: Configure Git (if first time)
```powershell
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Step 6: Stage Changes
```powershell
cd "c:\Users\Pramod Singh\Task 1 Assignment\Microservices-Task"
git add .
```

### Step 7: Commit Changes
```powershell
git commit -m "Add Docker and Docker Compose configuration for microservices

- Created Dockerfiles for user, product, order, and gateway services
- Added docker-compose.yml for orchestration
- Updated service code to use environment variables for port configuration
- All services accessible on localhost ports 3000-3003
- Gateway service configured for inter-service communication"
```

### Step 8: Push to Your Fork
```powershell
git push origin main
```

(If your default branch is 'master' instead of 'main', use `git push origin master`)

### Step 9: Create Pull Request (Optional but Recommended)
1. Go to your forked repo on GitHub
2. Click **"Pull Requests"** tab
3. Click **"New Pull Request"**
4. Select the base repository as the original (pramod704/Microservices-Task)
5. Add a description of your changes
6. Click **"Create Pull Request"**

### Step 10: Share Your Fork Link
Share the link to your forked repository:
```
https://github.com/YOUR_USERNAME/Microservices-Task
```

## Verification Commands

Before pushing, verify everything works locally:

```powershell
# Navigate to the repo
cd "your-cloned-repo-path"

# Start the services
docker compose up --build -d

# Test endpoints
Invoke-WebRequest http://localhost:3000/users
Invoke-WebRequest http://localhost:3001/products
Invoke-WebRequest http://localhost:3002/orders
Invoke-WebRequest http://localhost:3003/api/users

# View running containers
docker compose ps

# Stop services when done
docker compose down
```

## Expected Output for Verification

**docker compose ps** should show:
```
NAME                           IMAGE                        PORTS
submission-user-service-1      submission-user-service      0.0.0.0:3000->3000/tcp
submission-product-service-1   submission-product-service   0.0.0.0:3001->3001/tcp
submission-order-service-1     submission-order-service     0.0.0.0:3002->3002/tcp
submission-gateway-service-1   submission-gateway-service   0.0.0.0:3003->3003/tcp
```

**http://localhost:3000/users** should return:
```json
[{"id":1,"name":"John Doe"},{"id":2,"name":"Jane Smith"}]
```

**http://localhost:3001/products** should return:
```json
[{"id":1,"name":"Laptop","price":999},{"id":2,"name":"Phone","price":699}]
```

**http://localhost:3002/orders** should return:
```json
[]
```

**http://localhost:3003/api/users** should return:
```json
[{"id":1,"name":"John Doe"},{"id":2,"name":"Jane Smith"}]
```

## Troubleshooting Git Commands

If you make a mistake:

```powershell
# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1

# Check git status
git status

# View commit history
git log --oneline

# Check remote connection
git remote -v
```

## Screenshot Checklist for Assignment

Capture screenshots of:
1. ✅ **Git clone and file structure** - Terminal showing successful clone
2. ✅ **git add and git commit** - Terminal showing staged files
3. ✅ **git push** - Terminal showing successful push
4. ✅ **GitHub fork page** - Browser showing your forked repo
5. ✅ **Docker compose ps** - Terminal showing running containers
6. ✅ **Service endpoint responses** - Browser/curl showing API responses
7. ✅ **docker compose logs** - Terminal showing service startup logs

## Final Submission Link

After pushing your changes, submit this URL:
```
https://github.com/YOUR_USERNAME/Microservices-Task
```

---

**You have successfully completed the Docker Compose assignment!**
