### **Project Description: Real-Time Chat Application with User Authentication**

This project is a **real-time chat application** built using the **MERN stack** (MongoDB, Express, React, Node.js), along with **Socket.IO** for real-time communication and **JWT (JSON Web Tokens)** for user authentication. The app allows users to sign up, log in, and engage in real-time messaging while seeing an **online user list**.

---

### **Features**

1. **User Registration and Login**:  
   - Users can create an account with a unique username and password.
   - Secure password hashing with **bcrypt** ensures that passwords are not stored in plaintext.
   - Upon login, users receive a **JWT** token, which is stored locally in the browser for authentication purposes.

2. **Real-Time Messaging**:
   - **Socket.IO** powers the real-time chat functionality, enabling users to send and receive messages instantly without refreshing the page.
   - Users can type messages, send them to the chat room, and see new messages from others as they arrive in real-time.

3. **Online User List**:
   - The app displays a list of currently active users in the chat room.
   - This feature updates dynamically as users join and leave the room.

4. **Typing Indicator**:  
   - The app includes a typing indicator that shows when another user is typing in the chat. This adds interactivity and enhances the user experience.

5. **Message Timestamps**:  
   - Each message in the chat displays a timestamp indicating when it was sent, giving users context about when the message was posted.

6. **JWT Authentication**:
   - The app uses **JWT** for secure, stateless user authentication.
   - A user must be logged in to access the chat room, and the token is passed with each socket connection to verify their identity.

---

### **Technologies Used**

- **Backend**:
  - **Node.js**: A runtime environment for building server-side applications.
  - **Express.js**: A web framework for building RESTful APIs and handling HTTP requests.
  - **MongoDB**: A NoSQL database used to store user and chat data.
  - **Socket.IO**: A library for real-time, bidirectional communication between web clients and servers.
  - **JWT**: For stateless user authentication and secure API calls.

- **Frontend**:
  - **HTML/CSS**: For structuring and styling the web pages.
  - **JavaScript**: For managing frontend logic and interactions (including handling user input, authentication, and communication with the server).

- **Additional Libraries**:
  - **bcrypt.js**: For securely hashing passwords.
  - **dotenv**: For managing environment variables such as MongoDB URI and JWT secret key.

---

### **How the App Works**

1. **User Sign Up**:  
   - The user registers with a username and password. The password is hashed using bcrypt, and the user details are stored in the MongoDB database.

2. **User Login**:  
   - The user logs in with their credentials. If the credentials are correct, a JWT token is generated and sent to the client. This token is used for authenticating subsequent requests and establishing a connection with Socket.IO.

3. **Chat Room**:
   - After a successful login, users enter the chat room where they can send and receive messages in real-time.
   - The Socket.IO server listens for new messages from clients and broadcasts them to all connected clients.
   - The typing indicator updates dynamically when users type in the message input field.

4. **Online User List**:
   - The app tracks which users are currently logged in and active. This list is updated in real-time when users join or leave the chat.

---

### **Project Benefits**

- **Real-time Communication**: The application ensures that messages are delivered instantaneously to all users, which is crucial for any live chat or customer service platform.
- **User Authentication**: With JWT and bcrypt, the app provides secure login and protects user data.
- **Scalable**: The use of **MongoDB** and **Socket.IO** allows the app to scale efficiently and handle numerous users and real-time interactions.

---

This chat application serves as a **practical example** of building a modern web application using popular technologies such as Node.js, Express, MongoDB, and Socket.IO. It's a perfect starting point for anyone wanting to learn how to create interactive, real-time web applications.
