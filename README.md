# MoviesApp

*MoviesApp* is a dynamic web application built using *React* and *TypeScript* that allows users to explore a vast world of movies, TV series, actors, and reviews. Designed with a clean and intuitive interface, MoviesApp makes it easy for users to browse, filter, and favorite content, as well as engage with reviews and discover similar titles.


## Features

- *Browse Movies & TV Series*  
  Explore a wide collection of popular, upcoming, and trending titles, including both movies and TV shows.

- *Detailed Movie & Series Pages*  
  View in-depth information for each title, such as:
  - Plot summary
  - Release date
  - Production countries
  - Genres
  - Reviews

- *Favorites*  
  Mark any movie or TV show as a favorite and revisit them later in a personalized Favorites section.

- *User Reviews*  
  Contribute by adding your own reviews and read insights from other users.

- *Actor Profiles*  
  Discover detailed biographies and filmographies of your favorite actors.

- *Similar Movies & Series*  
  Get recommendations based on the current movie or series you're exploring.

- *Genre-Based Filtering*  
  Filter movies and shows by genre to quickly find content that matches your interests.

- *Pagination*  
  Seamless pagination implemented for better browsing experience on the home and listing pages.


## Screenshots

![alt text](<Screenshot 2025-05-12 132156.png>) ![alt text](<Screenshot 2025-05-12 132011.png>) ![alt text](<Screenshot 2025-05-12 132027.png>) ![alt text](<Screenshot 2025-05-12 132036.png>) ![alt text](<Screenshot 2025-05-12 132047.png>) ![alt text](<Screenshot 2025-05-12 132057.png>) ![alt text](<Screenshot 2025-05-12 132142.png>)


### Frontend

- *React* (with functional components and hooks)
- *TypeScript* (for strong typing and maintainable codebase)
- *React Router* (for navigation and routing)
- *Context API* (for global state management like favorites)
- *Axios* (for API calls)
- *CSS Modules* or *Styled Components* (modular and scoped styling)

### APIs & Data

- *The Movie Database (TMDb) API*  
  Used for fetching all movie, series, actor, and genre data.

### Key Components & Structure

- HomePage: Displays movies/TV shows with pagination and filters.
- MovieDetailsPage: Shows detailed information, reviews, and similar movies.
- ActorPage: Displays actor bio and filmography.
- FavoritesPage: Lists all movies marked as favorites.
- ReviewForm: Enables users to add and submit reviews.
- GenreFilter: Dynamic filtering based on genres.
- Pagination: Custom pagination component for navigating lists.

### Architecture Highlights

- *Modular Folder Structure:* Code is split by features (e.g., movies, actors, reviews) for better organization and scalability.
- *Reusable Components:* Components like cards, filters, pagination, etc., are made reusable across the app.
- *Optimized API Calls:* Data fetching is handled efficiently with error handling and loading states.
- *Responsive UI:* Designed to be mobile-friendly and adaptable across screen sizes.


## Future Improvements

- User authentication and profiles
- Ratings and watchlists
- Dark mode
- Backend integration for persistent reviews
- Lazy loading and performance optimization


### Installation

bash
git clone https://github.com/Pratiktori/labMoviesApp.git
npm install
npm run dev