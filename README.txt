    Required tools

Before you begin, be sure you have next:

1. Docker Desktop
2. A code editor like Visual Studio Code
3. Git
-----------------------------------------------------------------------------------------------------------------
    Setup & Installation

1. Clone the Repository

git clone https://github.com/DusanPajic002/RoundCube_test
cd <repository-folder-name>


2. Create the Environment File - SKIP  (For easy testing, .env are pushed with project)
In the root directory of the project, create a new file named .env and add the following content :

DB_USER=root
DB_PASSWORD=root
DB_NAME=mydb
-----------------------------------------------------------------------------------------------------------------
    Running the Application

1. Start the Services

From the root directory of the project (where the docker-compose.yml file is), run the following command:
docker-compose up --build


2. Set Up the Database (First-Time Only)

docker-compose exec backend npm run db:migrate
docker-compose exec backend npm run db:seed


3. Access the Application

Frontend: Open your web browser and navigate to http://localhost:9000
Backend API: The API is accessible at http://localhost:8080

Accessing the Database: The database is running on port 3307. 
You can connect to it using a database client (like TablePlus, DBeaver, or MySQL Workbench) with the following credentials:
    Host: 127.0.0.1
    Port: 3307
    User: root
    Password: root
    Database: mydb
-----------------------------------------------------------------------------------------------------------------
    Stopping the Application

1. To stop the application, press Ctrl+C in the terminal where docker-compose up is running.
2. To remove the containers and the network they use, run:
       docker-compose down
-----------------------------------------------------------------------------------------------------------------