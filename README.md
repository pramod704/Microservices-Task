Personalized GitHub Submission - ashish
Your submission URL (after push):
Code
https://github.com/Ashish111279/Microservices-Task
Step-by-Step Commands (Ready to Copy & Paste)
Step 1: Fork the Repository
Open: https://github.com/Ashish111279/Microservices-Task

Click "Fork" button (top-right)

Wait for GitHub to create your fork

Browser URL should show: https://github.com/Ashish111279/Microservices-Task

Step 2: Clone Your Fork
Open PowerShell and run these commands exactly:

powershell
cd "c:\Users\Ashish\Task 1 Assignment"
git clone https://github.com/Ashish111279/Microservices-Task.git
cd Microservices-Task
Step 3: Copy Submission Files
powershell
xcopy "c:\Users\Ashish\Task 1 Assignment\Microservices-Task\submission\*" . /E /I /Y
Step 4: Verify Files Copied
powershell
dir /s *.Dockerfile | head -20
Step 5: Configure Git (First Time Only)
powershell
git config --global user.name "Ashish"
git config --global user.email "your.email@example.com"
Step 6: Check Status
powershell
git status
Step 7: Stage Changes
powershell
git add .
Step 8: Commit Changes
powershell
git commit -m "Add Docker and Docker Compose configuration for microservices

- Created Dockerfiles for user, product, order, and gateway services using node:20-alpine
- Configured all services to expose correct ports (3000-3003)
- Added docker-compose.yml with service definitions and networking
- Configured environment variables for inter-service communication
- All services tested and verified running on localhost
- Updated service code to listen on all interfaces
- Complete documentation included in README.md"
Step 9: Push to GitHub
powershell
git push origin main
Step 10: Verify on GitHub
Go to: https://github.com/Ashish111279/Microservices-Task and confirm files are visible.
