# Project Documentation
for admin ==>
userid : admin
password: password123


source code in master branch of of my repository, not in main branch.

for frontend:
https://github.com/Ajay957582/frontend_LandingPAge/tree/master.


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

## **Contact Information**
- **Name**: Ajay More
- **Email**: [ajaymore123.indore@gmail.com](mailto\:ajaymore123.indore@gmail.com)

