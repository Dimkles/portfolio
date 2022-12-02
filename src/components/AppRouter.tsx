import React, { FC, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { PublickRoutes } from '../routes/routes';


const AppRouter: FC = () => {
    const navigate = useNavigate()
    const hash = useLocation().hash
    useEffect(() => {
        if (hash === '#projects') {
            navigate('/projects')
        } else if (hash === '#contacts') {
            navigate('/contacts')
        }
    })

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