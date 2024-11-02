# Nest.js Template

*Author: Ege Okyay*

A NestJS-based project template with secure JWT authentication, and database integration with Prisma ORM.

## Table of Contents
1. Getting Started
2. Project Structure
3. Authentication Flow
4. Protected Routes and Guards
5. Environment Setup
6. Deployment

## Getting Started

Follow these steps to set up and run the project locally:

0. Install Nest.js CLI
```bash
npm i -g @nestjs/cli
```

1. Clone the repository:

```bash
git clone https://github.com/your-repo/project-template.git
cd project-template
```

2. Install dependencies:

```bash
npm install
```

3. Configure environment variables:
    - Create a .env file in the root directory and set up the required environment variables.
    - Example:
    
    ```env
    DATABASE_URL=mongodb://localhost:27017/yourdbname
    JWT_SECRET=<your_jwt_secret>
    ```

4. Run the application:

```bash
nest start --watch
```

## Project Structure

The project structure follows best practices for NestJS applications:

```
/prisma                     # Database Schema
  └── schema.prisma

/http                       # REST Client http requests
  ├── auth.http             # Authentication Requests (e.g., login)
  └── user.http             # User Requests (e.g., profile)

/src                        # Application source
  ├── auth                  # Authentication module
  │   ├── auth.controller.ts
  │   ├── auth.module.ts
  │   ├── auth.service.ts
  │   ├── dto               # Data Transfer Objects
  │   │    ├── login.dto.ts
  │   │    └── signup.dto.ts
  │   └── strategies        # Passport Strategies
  │        └── jwt.strategy.ts
  ├── common                # Shared utilities and guards
  │   ├── guards            # Authentication guards
  │   └── utils             # Utility functions
  │   └── filters           # Exception Filters
  │       └── http-exception.filter.ts
  ├── prisma                # Prisma integration
  │   └── prisma.service.ts
  ├── middlewares           # Middlewares
  │   └── logging.middleware.ts
  ├── user                  # User module
  │   ├── user.controller.ts
  │   ├── user.module.ts
  │   └── user.service.ts
  └── app.module.ts        # Application module
  └── main.ts              # Application entry point
```

## Authentication Flow

1. Sign Up:
    - Users can register with an email and password.
    - The password is hashed before storing it in the database.
    - A JWT token is issued upon successful registration.

2. Login:
    - Users can log in with their credentials.
    - On successful login, a JWT token is provided for authenticated requests.

## Protected Routes and Guards

- Implement JWT guards to protect specific routes.
- Example of a protected route to retrieve user profiles is included in the user module.

## Environment Setup

- Ensure MongoDB is running locally or specify a remote instance in the DATABASE_URL.
- Set a secure JWT_SECRET for signing tokens.