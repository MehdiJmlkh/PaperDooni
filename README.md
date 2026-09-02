# PaperDooni: An Article-Sharing Web Application

This repository contains projects developed for the Internet Engineering course at the University of Tehran.

PaperDooni is a full-stack article-sharing web application developed incrementally across multiple phases. The project covers backend API development, React frontend integration, MySQL database management, authentication and security, and containerization.


## How to Run

### Using Docker Hub Images

Clone the repository and generate the required secrets:

```bash
git clone https://github.com/MehdiJmlkh/PaperDooni.git
cd PaperDooni

chmod +x generate-secrets.sh
./generate-secrets.sh
```

Then start the services using the images from Docker Hub:

```bash
docker compose up --pull always
```

### Building the Images Locally

If you prefer to build the images locally, run:

```bash
docker compose up --build
```

Once the services are running, open http://localhost to access the application. You can log in using the following account or sign up for a new account:

| Username | Password      |
| -------- | ------------- |
| `user`   | `Password123` |


## Phases


### P1: RESTful API

The backend is implemented using the MVC pattern with Spring Boot.<br>
The API follows RESTful principles for communication between clients and the server.

### P2: React Frontend

The frontend is built using React.<br>
Data fetching and server-state management are handled using React Query.<br>
Navigation and routing are implemented using React Router.

### P3: Database & ORM

A relational database schema is designed to support persistent data storage using MySQL.<br>
MySQL is integrated with the application using Hibernate ORM and JPA annotations.<br>
Database access is implemented through Spring Data JPA repositories.


### P4: Authentication & Authorization

User passwords are hashed before being stored in the database.<br>
The application now uses stateless authentication and authorization with JSON Web Tokens.<br>
Access tokens are stored in LocalStorage and sent with requests using the Bearer token.<br>
Refresh tokens are stored in cookies to renew expired access tokens.


### P5: Docker

The back-end and front-end applications are containerized using Dockerfiles.<br>
Nginx serves the front-end and acts as a reverse proxy, forwarding API requests to the back-end.<br>
The resulting Docker images are built and pushed to Docker Hub.<br>
Docker Compose is used to run the complete application stack, including the MySQL database.<br>
Environment variables, secrets, and service health checks are configured through Docker Compose.

