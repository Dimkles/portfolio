import React from 'react';
import { Route, Routes } from "react-router-dom";
import { PublickRoutes } from '../routes/routes';

const AppRouter = () => {
    return (
        <Routes>
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