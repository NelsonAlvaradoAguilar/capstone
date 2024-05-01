# capstone

final project

# Project Title

Latin Club

## Overview

Latin Club is a web app designed to connect the Hispanic community in Northumberland County, providing a platform for sharing information, events, and experiences. It aims to facilitate communication and collaboration among its users, fostering a sense of community and support, experiences and help those who need it.

### Problem

The current communication method through a WhatsApp group is becoming inefficient as the community grows larger. Important information gets lost or overlooked, and it's challenging to keep everyone updated on events and activities. Latin Club aims to address these issues by offering a centralized platform for communication and information sharing.

### User Profile

The target users of Latin Club include Hispanic individuals living in Northumberland County, as well as anyone interested in Hispanic culture or events in the area. Users may vary in age, interests, and background, but they share a common desire to stay connected with the community and participate in its activities.

### Features

Registration: Users can create an account by providing necessary details such as name, email, and password.

Login: Registered users can log in to their accounts to access personalized features and settings.

### Community Events

Post Events: Logged-in users can create and publish events, providing details such as title, description, date, time, location, and event type (e.g., cultural, educational, social).
Event Comments: Users can engage with posted events by leaving comments, asking questions, or expressing interest in attending.

### Community Articles

Post Articles: Users can contribute articles or blog posts on topics relevant to the Hispanic community, such as cultural heritage, language learning, or personal experiences.
Article Comments: Logged-in users can comment on articles, share insights, or provide feedback.

### Classes

Class Listings: Users can browse listings of art classes offered in the community, including painting, pottery, guitar, singing,language and more.
Class Registration: Interested users can sign up for art classes, selecting their preferred class type, instructor, and schedule.
Class Ratings: After attending a class, users can rate their satisfaction and provide feedback to help improve future offerings.
Post a new class.

## Implementation

### Tech Stack

- React
- MySQL
- Express
- Client libraries:
  - react
  - react-router
  - axios
- Server libraries:
  - knex
  - express

### APIs

- No external APIs will be used initially, but integration with Google Maps API for event location and possibly a third-party authentication service (e.g., Firebase Authentication) may be considered in

### Sitemap

- Home Page
- Registration Page
- Login Page
  Profile page
- Events Page
- Articles and news Page
- Classes Page
- User Profile Page

### Mockups

- home page
- registration page
- logging page
  Profile page
- my comunity(events) page
  -Articles and news Page
- Classes Page

### Data

Data will be stored in a MySQL database, with tables for users, events, articles, classes, and comments. Relationships between tables will be established using foreign keys.

### Endpoints

### POST Authentication

### POST /api/capstone/signup

- Register a new user.

### POST /api/capstone/login

- Log in an existing user.

### GET EVENTS

### Community Events

### GET /api/capstone/events

//Get a list of community events.

### POST /api/capstone/events

//Create a new event.

### POST /api/capstone/events/:eventId/comments

//Post a comment on a specific event.

### Community Articles

### Community Articles

### GET /api/capstone/articles

//Get a list of community articles.

### POST /api/capstone/articles

//Post a new article.

### POST /api/capstone/articles/:articleId/comments

Post a comment on a specific article.

### GET CLASSES

## Art Classes

### GET /api/capstone/classes

//Get a list of art classes.

### POST /api/capstone/classes

//Post a new class

### POST /api/capstone/classes/:classId/register

Register for a specific art class.

### POST /api/capstone/classes/:classId/rate

### POST /api/capstone/classes/:classId/feedback

Post a new class, rate and provide feedback for a attended class.

### Auth

User Registration: Users can create a new account by providing necessary details such as name, email, and password.

User Login: Registered users can log in to their accounts using their email and password.

## Roadmap

Sprint 1 (Week 1)

- Set up basic project structure with React frontend and Node.js backend.

- Implement user registration functionality.

- Design database schema and create necessary tables for users, events, articles, classes, and comments.

- Develop endpoints for user authentication and basic CRUD operations for events, articles, classes, and comments.

Sprint 2 (Week 2)

- Create frontend components for displaying community events, articles, and art classes.

- Implement functionality for users to post events and articles.

- Enable users to view and interact with posted events and articles, including commenting and RSVPing.

- Begin work on the user profile page, allowing users to manage their account settings and view their activity history.

Sprint 3 (Week 3)
???

## Nice-to-haves

### update button

Frontend: Create a UI component for the "Update" button and integrate it into the event, article,profile and detail page.
Backend: Implement API endpoints to handle update requests, validate user permissions, and update database records accordingly.

### Google Maps Integration for Location

Frontend: Utilize the Google Maps API to embed interactive maps within event detail pages.
Backend: Store event location data (latitude, longitude) in the database. Ensure consistency between frontend and backend when fetching and displaying location information.

### Chat Form for Questions or Needs

Frontend: Integrate a chat widget or form UI component using libraries like React Chat UI or custom CSS and JavaScript.
Backend: Implement backend logic to receive and process chat messages. This may involve setting up a WebSocket server for real-time communication or using HTTP endpoints to handle message submission and retrieval.
