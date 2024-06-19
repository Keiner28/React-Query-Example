# React Query: Paginator, Infinity Scroll, DevTools

This is a project demonstrating the use of React Query for data fetching, including pagination, infinite scroll, and DevTools integration. The project features a table that displays an initial set of 10 results, with functionality to load more results, color rows, sort by country, reset the state, and filter by country.

## Features

- **React Query**: Utilizes React Query for efficient data fetching and caching.
- **Pagination & Infinite Scroll**: Implements pagination and infinite scroll to manage large data sets.
- **DevTools**: Includes React Query DevTools for debugging.
- **Dynamic Table**: Displays data in a table format with various interactive features.

## Project Structure

The project follows a typical React structure. Here is an overview of the key files:

- **`src/components/`**: Contains all the React components for the application.
  - **`Results.tsx`**: Component to display the results in a table format.
  - **`UsersList.tsx`**: Component to manage the list of users and handle interactions like sorting and filtering.
- **`src/hooks/`**: Custom hooks for data fetching and state management.
  - **`useUsers.ts`**: Hook for fetching user data with React Query.
- **`src/services/`**: Services for making API calls.
  - **`users.ts`**: Service file containing the function to fetch users from the API.
- **`src/App.tsx`**: Main application component.

## Key Functionalities

1. **Display Initial Results**: Displays an initial set of 10 results in a table.
2. **Load More Results**: Button to load more results dynamically.
3. **Color Rows**: Option to color rows for better visualization.
4. **Sort by Country**: Ability to sort the table by country.
5. **Reset State**: Button to reset the table to its initial state.
6. **Filter by Country**: Input to filter results by country.

## How to Run the Project

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Run `pnpm install` to install the dependencies.
4. Run `pnpm run dev` to start the Vite development server.
5. Open `http://localhost:5173` in your browser to view the running application.

## Additional Information

- **React Query DevTools**: For debugging and monitoring queries, mutations, cache, and more.
