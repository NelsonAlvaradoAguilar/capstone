# capstone

final project

# Project Title

Latin Club

## Overview

Latin Club is an app designed to connect the Hispanic community in Northumberland County, providing a platform for sharing information, events, and experiences. It aims to facilitate communication and collaboration among its users, fostering a sense of community and support, experiences and help those who need it.

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
- Community Events Page
- Community Articles Page
- Classes Page
- User Profile Page

### Mockups

- home page
- registration page
- logging page
- my comunity(events,news) page
- support your community Page
- Art Classes Page

### Data

Data will be stored in a MySQL database, with tables for users, events, articles, classes, and comments. Relationships between tables will be established using foreign keys.

### Endpoints

### POST Authentication

### POST /api/capstone/register

- Register a new user.
- [user:[{
- name:Nelson,
- lastname:Alvarado
- country:Colombia
- Email;nelsonalvaradoaguilar@gmail.com
- password:password

}]]

### POST /api/capstone/login

- Log in an existing user.
- user:[{
- name:Nelson,
- password:password,
- confirm password:password
  }]

### GET EVENTS

### Community Events

### GET /api/capstone/events

Get a list of community events.

### POST /api/capstone/events

Create a new event.

### POST /api/capstone/events/:eventId/comments

Post a comment on a specific event.

[
{
"id": 1,
"title": "Join Earth Day activities in Northumberland",
"description": "In recognition of Earth Day on April 22, Northumberland County is encouraging residents to participate in local Earth Day activities, taking place across Northumberland from April 21 to 27, to build awareness of the importance of preserving and safeguarding our natural resources for future generations.",
"date": "April 4, 2024",
"location": "Cobourg, ON",
"address": "",
"entrance": "yes",
"price": "number",
"image": "http://localhost:8080/image.png",
"video": "http://localhost:8080/video.mp4",
"comments": [
{
"id": 1,
"name": "Sarah",
"comment": "Excited to participate in the Earth Day activities happening in Northumberland! 🌍 It's inspiring to see our community come together to raise awareness about environmental conservation. Looking forward to April 21-27 for a week filled with meaningful initiatives in Cobourg and across the county!"
},
{
"id": 2,
"name": "John",
"comment": "Count me in for the Earth Day activities in Northumberland! 🌿 It's crucial that we all play our part in protecting our planet, and these local events provide a fantastic opportunity to get involved. Can't wait to join fellow residents in Cobourg and contribute to the preservation of our natural resources!"
},
{
"id": 3,
"name": "Lisa",
"comment": "I'm thrilled to support Earth Day by participating in the activities happening right here in Northumberland! 🌱 From April 21 to 27, let's come together as a community in Cobourg and beyond to promote environmental sustainability. Looking forward to engaging in meaningful initiatives and making a positive impact!"
}
]
},
{
"id": 2,
"title": "Annual Figgs Dinner & Dance",
"description": "Please join us for a traditional Newfoundland style gathering with great food and music from Madman's Windows.",
"date": "May 4, 2024",
"location": "Cobourg, ON",
"address": "Lions Community Centre, 157 Elgin Street",
"entrance": "yes",
"price": "number",
"image": "http://localhost:8080/image.png",
"video": "http://localhost:8080/video.mp4",
"comments": [
{
"id": 1,
"name": "Emily",
"comment": "I'm thrilled to attend the Annual Figs Dinner & Dance this year! 🎉 It promises to be an incredible evening filled with Newfoundland-style festivities, delicious food, and lively music by Madman's Windows. Can't wait for May 4th to enjoy this wonderful celebration in Cobourg at the Lions Community Centre!"
},
{
"id": 2,
"name": "Michael",
"comment": "Count me in for the Annual Figs Dinner & Dance! 🍽️🎶 It's always a joy to experience the traditional Newfoundland gathering with its fantastic food and live music. The Lions Community Centre on Elgin Street is the perfect venue for this event. Looking forward to an unforgettable night on May 4th!"
},
{
"id": 3,
"name": "Amanda",
"comment": "I wouldn't miss the Annual Figs Dinner & Dance for anything! 🌟 Join us on May 4th at the Lions Community Centre in Cobourg for an evening of great food, music by Madman's Windows, and wonderful company. It's going to be a fantastic celebration of Newfoundland culture right here in Ontario!"
}
]
},
{
"id": 3,
"title": "I Love Beer and Taco Festival",
"description": "Beer, cider, spirits, games, and tacos.",
"date": "April 13, 2024",
"location": "Peterborough, ON",
"address": "Memorial Center",
"entrance": "yes",
"price": "number",
"image": "http://localhost:8080/image.png",
"video": "http://localhost:8080/video.mp4",
"comments": [
{
"id": 1,
"name": "Sarah",
"comment": "Wow, I'm super excited for the Beer and Taco Festival! 🍻🌮 It sounds like the perfect combination of delicious food and drinks, along with fun games. Can't wait to indulge in some tasty tacos and sip on some refreshing cider. Count me in!"
},
{
"id": 2,
"name": "Mark",
"comment": "As a beer enthusiast, this festival is right up my alley! Can't wait to explore the variety of beers, ciders, and spirits available. Plus, who can resist tacos? It's going to be a fantastic day filled with great food, drinks, and entertainment

      }]

}]

### Community Articles

### Community Articles

### GET /api/capstone/articles

Get a list of community articles.

### POST /api/capstone/articles

Post a new article.

### POST /api/capstone/articles/:articleId/comments

Post a comment on a specific article.

[{
"title": "Donating Books to Local Libraries",
"description": "Hey everyone! I have a collection of gently used books that I would love to donate to our local libraries. These books cover a wide range of genres, from fiction to non-fiction, and are in great condition. If you're interested in expanding your reading collection or know of any libraries in need, please feel free to reach out to me. Let's spread the joy of reading throughout our community!",
"location": "Northumberland, ON",
"timestamp": "December 12, 2023",
"donor": {
"name": "Emily Johnson",
"contact": "emily.johnson@example.com"
},
"availability": "Immediate",
"images": [
"http://localhost:8080/book1.jpg",
"http://localhost:8080/book2.jpg"
]
}
{
"title": "Sarah's Generous Toy Donation",
"description": "Sarah, a kind-hearted member of our community, has donated a box full of toys for children in need. Her thoughtful gesture will bring joy to many young hearts this holiday season. Let's follow Sarah's example and spread happiness through acts of kindness!",
"timestamp": "December 5, 2024",
"location": "Northumberland County",
"availability": "Immediate",
"images": [
"http://localhost:8080/sarah_toy_donation1.jpg",
"http://localhost:8080/sarah_toy_donation2.jpg"
]
}
{
"title": "Toy Train Set Donation",
"description": "A generous donor has contributed a classic toy train set, complete with locomotive, cars, and tracks. This donation will bring joy to children who love trains and spark their imagination during playtime.",
"timestamp": "March 15, 2024",
"location": "Northumberland County",
"availability": "Immediate",
"images": [
"http://localhost:8080/toy_train_set1.jpg",
"http://localhost:8080/toy_train_set2.jpg"
]
}]

### GET CLASSES

## Art Classes

### GET /api/capstone/classes

Get a list of art classes.

### POST /api/capstone/classes/:classId/register

Register for a specific art class.

### POST /api/capstone/classes/:classId/rate

Rate and provide feedback for a attended class.

{
"title": "Oil Painting Workshop",
"description": "Join us for an immersive oil painting workshop where you'll learn fundamental techniques and create your masterpiece. Suitable for beginners and experienced painters alike.",
"date": "April 20, 2024",
"location": "Northumberland County",
"instructor": "Emily Smith",
"images": [
"http://localhost:8080/oil_painting_workshop1.jpg",
"http://localhost:8080/oil_painting_workshop2.jpg"
]
}
,
{
"title": "Pottery Making Class",
"description": "Discover the art of pottery making in this hands-on class. Learn to shape clay, use the pottery wheel, and glaze your creations. Suitable for beginners and intermediate-level participants.",
"date": "May 8, 2024",
"location": "Northumberland County",
"instructor": "David Johnson",
"images": [
"http://localhost:8080/pottery_making_class1.jpg",
"http://localhost:8080/pottery_making_class2.jpg"
]
},
{
"title": "Guitar Basics Workshop",
"description": "Start your musical journey with our Guitar Basics Workshop. Learn essential techniques, chords, and strumming patterns from experienced instructors. No prior experience required.",
"date": "June 15, 2024",
"location": "Northumberland County",
"instructor": "Michael Thompson",
"images": [
"http://localhost:8080/guitar_basics_workshop1.jpg",
"http://localhost:8080/guitar_basics_workshop2.jpg"
]
}
,{
"title": "Watercolor Painting Workshop",
"description": "Explore the vibrant world of watercolor painting in our workshop. Learn various techniques, including wet-on-wet and dry brush, to create stunning watercolor artworks.",
"date": "August 5, 2024",
"location": "Northumberland County",
"instructor": "Emma Roberts",
"images": [
"http://localhost:8080/watercolor_painting_workshop1.jpg",
"http://localhost:8080/watercolor_painting_workshop2.jpg"
]
}

### Auth

Does your project include any login or user profile functionality? If so, describe how authentication/authorization will be implemented.

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

Frontend: Create a UI component for the "Update" button and integrate it into the event/article detail page.
Backend: Implement API endpoints to handle update requests, validate user permissions, and update database records accordingly.

### Google Maps Integration for Location

Frontend: Utilize the Google Maps API to embed interactive maps within event detail pages.
Backend: Store event location data (latitude, longitude) in the database. Ensure consistency between frontend and backend when fetching and displaying location information.

### Chat Form for Questions or Needs

Frontend: Integrate a chat widget or form UI component using libraries like React Chat UI or custom CSS and JavaScript.
Backend: Implement backend logic to receive and process chat messages. This may involve setting up a WebSocket server for real-time communication or using HTTP endpoints to handle message submission and retrieval.
