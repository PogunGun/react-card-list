import React from 'react';
import './App.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import {NotFoundPage} from "./pages/NotFoundPage";
import {CardPage} from "./pages/CardPage";
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
                <Route
                    path="/"
                    element={<CardPage/>}
                />
            <Route path="*" element={<NotFoundPage />} />
        </Route>
    )
);
function App(): JSX.Element {

    return (
        <RouterProvider router={router} />
    );
}

export default App;