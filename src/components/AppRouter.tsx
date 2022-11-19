import React from 'react';
import { redirect, Route, Routes, useLocation } from "react-router-dom";
import { PublickRoutes } from '../routes/routes';


const AppRouter = () => {
    const history = useLocation()
    console.log(history.pathname)
    redirect(history.pathname)
    return (
        <Routes >
            {PublickRoutes.map(route =>
                <Route
                    path={route.path}
                    element={<route.element />}
                    key={route.path}
                />
            )}
        </Routes>
    );
};

export default AppRouter;