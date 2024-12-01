# **Pathwise API Documentation**

## **Base URL**
http://localhost:<PORT>/api

## Setup

- 1. Clone the repository: `git clone <https://github.com/Roshfaleel/roshani-faleel-capstone-api>`
- 2. Install dependencies: `npm install`
- 3. Set environment variables in a `.env` file.

## Run
- Start the server: `npm start`
- Access the app at: `http://localhost:8080`

---

## **Endpoints**

### **1. User Management**

#### **1.1 Get All Users**
- **Endpoint**: `/users`
- **Method**: `GET`
- **Description**: Fetches all registered users.
- **Response**:
  - **200 OK**: Returns an array of user objects.
  - **404 Not Found**: No users found.
  - **500 Internal Server Error**: Server-side error.

---

#### **1.2 Get a Specific User**
- **Endpoint**: `/users/:id`
- **Method**: `GET`
- **Description**: Fetch details of a user by their ID.
- **URL Parameters**:
  - `id` (integer): The ID of the user.
- **Response**:
  - **200 OK**: Returns the user object.
  - **404 Not Found**: User not found.
  - **500 Internal Server Error**: Server-side error.

---

#### **1.3 Create a New User**
- **Endpoint**: `/users`
- **Method**: `POST`
- **Description**: Adds a new user to the database.
- **Request Body**:
  ```json
  {
    "name": "User Name",
    "email": "user@example.com",
    "password": "secure_password"
  }
- **Response**:
  - **201 Created**: User successfully added.
  - **404 Validation error** (e.g., missing fields, invalid email).
  - **500 Internal Server Error**: Server-side error.
 
---

#### **1.4 Delete a User**
- **Endpoint**: `/users/:id`
- **Method**: `DELETE`
- **Description**: Deletes a user by their ID.
- **URL Parameters**:
- `id` (integer): The ID of the user.
- **Response**:
   - **200 OK**: User successfully deleted.
   - **404 Not Found**: User not found.
   - **500 Internal Server Error**: Server-side error.
 
---

## **2. Skills Management**

### **2.1 Get All Skills**
- **Endpoint**: `/skills`
- **Method**: `GET`
- **Description**: Fetches all skills from the database.
- **Response**:
  - **200 OK**: Returns an array of skill objects.
  - **404 Not Found**: No skills found.
  - **500 Internal Server Error**: Server-side error.

---

### **2.2 Get Skills of a User**
- **Endpoint**: `/users/:id/skills`
- **Method**: `GET`
- **Description**: Fetch all skills associated with a specific user.
- **URL Parameters**:
  - `id` (integer): The ID of the user.
- **Response**:
  - **200 OK**: Returns an array of skill objects.
  - **404 Not Found**: User or skills not found.
  - **500 Internal Server Error**: Server-side error.

---

### **2.3 Add Skill**
- **Endpoint**: `/skills`
- **Method**: `POST`
- **Description**: Adds a new skill to the database.
- **Request Body**:
  ```json
  {
    "user_id": 1,
    "skill_name": "React",
    "proficiency_level": "Advanced"
  }
- **Response**:
  - **201 created**: Skill successfully added.
  - **404 Bad Request**: Validation error.
  - **500 Internal Server Error**: Server-side error.
 
---

### **2.4 Delete Skill**

- **Endpoint:** `/skills/:id`  
- **Method:** `DELETE`  
- **Description:** Deletes a skill by its ID.

#### URL Parameters
- `id` (integer): The ID of the skill to delete.

#### Response
- **200 OK:** Skill successfully deleted.  
- **404 Not Found:** Skill not found.  
- **500 Internal Server Error:** Server-side error.

---

## **3. Achievements Management**

#### **3.1 Get All Achievements**

- **Endpoint:** `/achievements`  
- **Method:** `GET`  
- **Description:** Fetches all achievements from the database.

#### Response
- **200 OK:** Returns an array of achievement objects.  
- **404 Not Found:** No achievements found.  
- **500 Internal Server Error:** Server-side error.

---

#### **3.2 Get Achievements of a User**

- **Endpoint:** `/users/:id/achievements`  
- **Method:** `GET`  
- **Description:** Fetch all achievements associated with a specific user.

#### URL Parameters
- `id` (integer): The ID of the user.

#### Response
- **200 OK:** Returns an array of achievement objects.  
- **404 Not Found:** User or achievements not found.  
- **500 Internal Server Error:** Server-side error.

---

#### **3.3 Add Achievement**

- **Endpoint:** `/achievements`  
- **Method:** `POST`  
- **Description:** Adds a new achievement to the database.
- **Request Body**
  ```json
  {
    "user_id": 1,
    "name": "React Certification",
    "description": "Completed advanced React course",
    "date": "2024-11-20",
    "type": "Certification"
  }
- **Response**:
  - **201 created**: Achievement successfully added.
  - **404 Bad Request**: Validation error.
  - **500 Internal Server Error**: Server-side error.
 
---

#### **3.4 Delete Achievement**

- **Endpoint:** `/achievements/:id`  
- **Method:** `DELETE`  
- **Description:** Deletes an achievement by its ID.

#### URL Parameters
- `id` (integer): The ID of the achievement.

#### Response
- **200 OK:** Achievement successfully deleted.  
- **404 Not Found:** Achievement not found.  
- **500 Internal Server Error:** Server-side error.

---

### 4. Root Route

#### 4.1 Welcome Route

- **Endpoint:** `/`  
- **Method:** `GET`  
- **Description:** Basic API welcome message.

#### Response
  ```json
    {
    "message": "Welcome! to Pathwise DB"
    }
