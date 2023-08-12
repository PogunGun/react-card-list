import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import {NotFoundPage} from './pages/NotFoundPage';
import {CardPage} from './pages/CardPage';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
          <Route
            path='/'
            element={<CardPage />}
          />
          <Route path='*' element={<NotFoundPage />} />
        </Route>,
    ),
);

const App=()=> {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
