# Advanced Notes API (TypeScript Backend)

A **production-style Notes Backend API** built with **Node.js, TypeScript, Express, and MongoDB**.

This project demonstrates **real-world backend architecture**, including authentication, note management, version history, folders, tags, and advanced filtering.

Designed as a **portfolio-quality backend project** suitable for backend engineering interviews.

---

## Tech Stack

* Node.js
* TypeScript (Strict Mode)
* Express.js
* MongoDB + Mongoose
* JWT Authentication
* Argon2 Password Hashing
* Cookie-Based Authentication
* Zod Validation

---

## Features

### Authentication

* User registration
* User login
* Logout
* Access tokens
* Refresh tokens
* Cookie-based authentication (httpOnly)
* Token rotation
* Secure password hashing with Argon2

Endpoints:

```
POST /auth/register
POST /auth/login
POST /auth/refresh
POST /auth/logout
GET /auth/me
```

---

### Notes System

* Create notes
* Update notes
* Delete notes (soft delete)
* Restore notes
* Permanent delete
* Pagination
* Sorting
* Search

Endpoints:

```
POST /notes
GET /notes
PATCH /notes/:id
DELETE /notes/:id
```

Query Example:

```
GET /notes?page=1&limit=10&search=node
```

---

### Trash System

* Soft delete notes
* Restore notes
* Permanent delete

Endpoints:

```
GET /notes/trash
POST /notes/:id/restore
DELETE /notes/:id/permanent
```

---

### Archive and Pin System

* Archive notes
* Unarchive notes
* Pin notes
* Unpin notes

Endpoints:

```
PATCH /notes/:id/archive
PATCH /notes/:id/unarchive
PATCH /notes/:id/pin
PATCH /notes/:id/unpin
```

---

### Folder System

* Create folders
* Get folders
* Rename folders
* Delete folders

Endpoints:

```
POST /folders
GET /folders
PATCH /folders/:id
DELETE /folders/:id
```

---

### Tags System

* Create tags
* Get tags
* Delete tags
* Assign tags to notes
* Remove tags from notes

Endpoints:

```
POST /tags
GET /tags
DELETE /tags/:id

POST /notes/:id/tags
DELETE /notes/:id/tags
```

---

### Advanced Filtering

Filter notes by:

* Search text
* Folder
* Tag
* Pagination

Example:

```
GET /notes?search=node&tag=123&folder=456&page=1&limit=20
```

---

### Version History

Automatically saves versions when a note is updated.

Features:

* View note versions
* Restore old versions

Endpoints:

```
GET /versions/:noteId
POST /versions/restore/:versionId
```

---

## Authentication System

Authentication uses **secure HTTP-only cookies** instead of local storage.

Cookies:

```
accessToken
refreshToken
```

Security Features:

* httpOnly cookies
* JWT expiration
* Refresh token rotation
* Argon2 password hashing

---

## Project Structure

```
src/

 config/
  env.ts
  db.ts

 modules/

  auth/
  notes/
  folders/
  tags/
  versions/

 middleware/

 utils/

 types/

 app.ts
 server.ts
```

Architecture Pattern:

```
Controller → Service → Repository → Database
```

---

## Database Collections

```
users
notes
folders
tags
versions
```

---

## Environment Variables

Create `.env` file:

```
PORT=5000

MONGO_URI=mongodb://localhost:27017/notes

JWT_ACCESS_SECRET=your_secret
JWT_REFRESH_SECRET=your_secret

ACCESS_TOKEN_EXPIRES=15m
REFRESH_TOKEN_EXPIRES=30d

NODE_ENV=development
COOKIE_DOMAIN=localhost
```

---

## Installation

### 1. Clone Repository

```
git clone <repo-url>
cd advanced-notes-api
```

---

### 2. Install Dependencies

```
npm install
```

---

### 3. Start MongoDB

Example:

```
mongod
```

---

### 4. Run Server

Development:

```
npm run dev
```

Production:

```
npm run build
npm start
```

---

## API Base URL

```
http://localhost:5000
```

---

## Example Request

Create Note:

```
POST /notes
```

Body:

```
{
 "title": "My Note",
 "content": "Hello world"
}
```

---

## Security

* Argon2 password hashing
* JWT authentication
* Cookie-based auth
* Input validation
* Protected routes

---

## Why This Project Exists

This project was built to demonstrate:

* Backend architecture
* Authentication systems
* MongoDB schema design
* REST API design
* TypeScript backend development
* Production-level structure

---

## Author

Built as a backend engineering project using TypeScript.
