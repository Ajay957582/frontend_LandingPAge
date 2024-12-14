# Project Documentation
for admin ==>
userid : admin
password: password123


source code in master branch, not main in main branch.


## **Project Overview**

This project is a prototype of a  **LandingPage**. The platform is built with a **React.js frontend** and a **Node.js backend** integrated with a **MongoDB database**.


---

## **Admin Panel Access**

**Note**: The admin panel does not have any dedicated UI buttons for navigation. To access the admin functionalities, use the following paths directly in the browser:

- **Admin Login**: `/admin/login`
- **Admin Dashboard**: `/admin/dashboard`

Ensure you have the correct admin credentials to access these routes.

---

## **Technologies Used**

- **Frontend**: React.js
- **Backend**: Node.js (Express.js)
- **Database**: MongoDB
- **Deployment**: Hosted on Render for both frontend and backend.

---



## **Future Enhancements**

- Add a graphical interface for admin functionalities.
-There will be a special admin list in the database with JWT.

---
## **Image Handling **
Base64 Encoding: Images are uploaded as Base64 encoded strings and stored in the database to optimize storage and retrieval.
Hosting
Frontend: Hosted on onRender.
Backend: Hosted on onRender.



## **functionalties **
1. Landing Page
The landing page serves as the main user interface where visitors can view projects, clients, and subscribe to the newsletter. It consists of the following sections:

Our Projects Section:

Fetches data from the backend's /api/projects endpoint.
Displays an image, project name, description, and a "Read More" button for each project.
Data Fetch: The frontend sends a GET request to the backend to fetch an array of project objects, which is then displayed dynamically.
Happy Clients Section:

Fetches client data from the backend’s /api/clients endpoint.
Each client’s image, name, designation, and description are displayed.
Data Fetch: Similar to the projects section, this data is fetched by sending a GET request to the backend.
Contact Form:

A form allowing users to submit their information: name, email, mobile number, and city.
When the user clicks submit, a POST request is made to the /api/contact endpoint with the form data.
Newsletter Subscription:

Users can enter their email address and click the subscribe button.
The email is sent to the backend, stored in the database, and shown in the admin panel.
================================================================
2. Admin Panel
The admin panel allows for managing the projects, clients, and user data. It includes CRUD operations for the following:

Project Management:

Admin can add new projects by entering details like project image, name, and description.
Data Fetch: Projects are fetched from /api/admin/dashboard.
Client Management:

Admin can add and manage clients’ data, including name, image, designation, and description.
Data Fetch: Clients are fetched from /api/admin/dashboard.
Contact Form Details:

Admin can view all the submitted contact forms.
Data Fetch: Contact form responses are fetched from /api/admin/dashboard.
Newsletter Subscribers:

Admin can view all subscribed email addresses.
Data Fetch: Subscriber data is fetched from /api/subscribers.


## **Backend API Endpoints:**

GET /api/projects: Fetches all projects.
GET /api/clients: Fetches all clients.
POST /api/contact: Submits contact form data.
POST /api/newsletter: Subscribes a user to the newsletter.
Admin Routes:
GET /api/admin/projects: Fetches all projects for the admin panel.
POST /api/admin/projects: Adds a new project (used for project management in the admin panel).
GET /api/admin/clients: Fetches all clients for the admin panel.
POST /api/admin/clients: Adds a new client (used for client management in the admin panel).
GET /api/admin/contact: Fetches all contact form submissions.
GET /api/admin/newsletter: Fetches all newsletter subscribers.

## **Contact Information**

- **Name**: Ajay More
- **Email**: [ajaymore123.indore@gmail.com](mailto\:ajaymore123.indore@gmail.com)

