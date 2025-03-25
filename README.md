# testeCarvalho

This project is a full-stack application that scrapes Amazon product details using a backend built with Bun (Node.js), Axios, and JSDOM. The frontend uses HTML, CSS, and Vanilla JavaScript with Vite.

## Features

- Scrape Amazon product search results based on a keyword.
- Extract product title, rating, number of reviews, and image URL.
- Display results in a scrollable list on the frontend.

## Setup and Running Instructions

### 1. **Backend (Bun)**

#### Install Bun (if you don't have it yet):

- Follow the installation instructions from the [Bun website](https://bun.sh).

#### Install dependencies:

```bash
bun install
```

#### Run the Backend Server:

```bash
bun run index.js
```

The backend will run on `http://localhost:3000/api/scrape`.

### 2. **Frontend (Vite)**

#### Install Vite (if you don't have it yet):

- Run this command to create a new Vite project:

```bash
npm create vite@latest frontend --template vanilla
cd frontend
npm install
```

#### Replace the default files in the `frontend` folder with the following:

- `index.html`: Contains the HTML structure.
- `styles.css`: Contains the styles for the UI.
- `main.js`: Handles the frontend logic to interact with the backend.

#### Run the Frontend:

```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`.

### 3. **Test the Application**

1. Open the frontend in your browser at `http://localhost:5173`.
2. Enter a keyword in the search input (e.g., "laptop").
3. Click the search button.
4. The product details will be displayed below in a scrollable list.
