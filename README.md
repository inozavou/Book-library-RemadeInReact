# Online Book-Library Web App

A responsive online library web application built with **React** and **React Router**, allowing users to search for books, view detailed book information, and browse different categories. This project integrates with the **Open Library API** to fetch book data dynamically.

## Features

* **Homepage:** Welcome page with search functionality.
* **Search Results:** Dynamic list of books based on user queries, complete with book covers and titles.
* **Book Details Page:** View detailed information about each book.
* **About & Contact Pages:** Informational pages about the app and contact information.
* **Page Not Found:** Friendly 404 page for unmatched routes.
* **Loading States:** Spinner displayed while fetching book data.
* **Context API:** Centralized state management for book list and loading status.

## Technologies Used

* **React** – Frontend library
* **React Router DOM** – Client-side routing
* **Context API** – State management for books
* **CSS Modules** – Scoped and modular styling
* **Open Library API** – Book data source

## Folder Structure

```
src/
├─ components/
│  ├─ SearchResultList.jsx
│  ├─ Spinner.jsx
├─ contexts.jsx/
│  ├─ BooksContext.jsx
├─ pages/
│  ├─ Homepage.jsx
│  ├─ Categories.jsx
│  ├─ BookCardPage.jsx
│  ├─ About.jsx
│  ├─ ContactPage.jsx
│  ├─ PageNotFound.jsx
├─ App.css
├─ App.jsx
```

## Installation

1. **Clone the repository:**

```bash
git clone https://github.com/yourusername/online-library.git
cd online-library
```

2. **Install dependencies:**

```bash
npm install
```

3. **Start the development server:**

```bash
npm start
```

The app will run at `http://localhost:3000`.

## Usage

1. Navigate to the homepage.
2. Use the search input to find books by title.
3. Click on any book in the search results to view detailed information.
4. Explore categories to browse books by collections.
5. Visit About and Contact pages for more information.

## Routing Structure 

| Route                    | Component    |
| ------------------------ | ------------ |
| `/`                      | Homepage     |
| `/categories`            | Categories   |
| `/categories/works/:key` | BookCardPage |
| `/works/:key`            | BookCardPage |
| `/about`                 | About        |
| `/contact`               | ContactPage  |
| `*`                      | PageNotFound |
