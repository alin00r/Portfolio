# Dynamic About Section Implementation

## Overview

The About section is now fully dynamic and can be edited from the admin dashboard. All content including name, title, bio, quote, CV URL, and profile image can be managed through the backend API.

## Backend Components

### 1. About Model (`backend/models/About.js`)

```javascript
Fields:
- name: String (required) - Full name
- title: String (required) - Professional title
- bio: String (required) - Biography/description
- quote: String (optional) - Favorite quote
- quoteAuthor: String (optional) - Quote author name
- cvUrl: String (optional) - Link to CV/Resume
- profileImage: String (optional) - URL to profile image
```

### 2. About Controller (`backend/controllers/aboutController.js`)

```javascript
Functions:
- getAbout: Fetches the About data (singleton pattern - only one document)
- updateAbout: Updates or creates About data
```

### 3. About Routes (`backend/routes/aboutRoutes.js`)

```javascript
Endpoints:
- GET /api/about - Get about section data
- PUT /api/about - Update about section data
```

## Dashboard Features

### About Tab in Dashboard (`backend/public/index.html`)

A new tab has been added to the dashboard with the following form fields:

- Full Name (required)
- Professional Title (required)
- Biography (required, textarea)
- Favorite Quote (optional)
- Quote Author (optional)
- CV/Resume URL (optional)
- Profile Image (file upload with preview)

### Dashboard Functions (`backend/public/dashboard.js`)

```javascript
New Functions:
- handleAboutImageUpload(event) - Handles profile image upload
- loadAbout() - Loads About data from API
- About form submit handler - Saves About data to API
```

## Frontend Integration

### Updated About Component (`components/about.vue`)

The component now fetches all content from the API instead of using hardcoded values:

```javascript
Data Fetched:
- aboutData.name - Displayed in the highlighted name
- aboutData.title - Professional title
- aboutData.bio - Biography paragraph
- aboutData.quote - Quote text
- aboutData.quoteAuthor - Quote author
- aboutData.cvUrl - CV download link
- aboutData.profileImage - Profile photo
```

## Database Seeding

The seed script (`backend/seed.js`) now initializes both:

1. About section with default values
2. Stats section with initial counts

## How to Use

### 1. Start the Backend Server

```bash
cd backend
npm start
```

### 2. Access the Dashboard

Open `http://localhost:3001` in your browser

### 3. Edit About Section

1. Click on the "About" tab
2. Fill in the form with your information
3. Upload a profile image (optional)
4. Click "Update About Section"
5. The changes will be reflected immediately on your frontend

### 4. View Changes

The About section on your portfolio will automatically display the updated content.

## API Endpoints

### Get About Data

```
GET http://localhost:3001/api/about

Response:
{
  "success": true,
  "data": {
    "name": "Ali Nour",
    "title": "Backend Developer",
    "bio": "...",
    "quote": "...",
    "quoteAuthor": "...",
    "cvUrl": "...",
    "profileImage": "...",
    "createdAt": "...",
    "updatedAt": "..."
  }
}
```

### Update About Data

```
PUT http://localhost:3001/api/about
Content-Type: application/json

Body:
{
  "name": "Your Name",
  "title": "Your Title",
  "bio": "Your bio...",
  "quote": "Your quote",
  "quoteAuthor": "Author",
  "cvUrl": "https://...",
  "profileImage": "http://localhost:3001/uploads/image.jpg"
}

Response:
{
  "success": true,
  "data": { ... }
}
```

## Features

✅ Fully dynamic About section content
✅ Easy-to-use dashboard interface
✅ Profile image upload with preview
✅ Real-time updates without page refresh
✅ Validation for required fields
✅ Responsive design with Tailwind CSS
✅ Default values for easy setup
✅ Singleton pattern (only one About document)

## Notes

- The About section uses a singleton pattern, meaning only one About document exists in the database
- Default values are set in the model and seed script
- Profile images are stored in `backend/public/uploads/` and served at `/uploads/`
- All changes are automatically reflected on the frontend when the page loads
