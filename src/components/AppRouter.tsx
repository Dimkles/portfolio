import React, { FC, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from '../hooks/redux';
import { AdminRoutes, PrivateRoutes, PublickRoutes } from '../routes/routes';

const AppRouter: FC = () => {
    const { isAuth, user } = useAppSelector(state => state.user)
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
            {isAuth
                ?
                user.roles.some(e => e.value === 'ADMIN')
                    ?
                    AdminRoutes.map(route =>
                        <Route
                            path={route.path}
                            element={<route.element />}
                            key={route.path}
                        />
                    )
                    :
                    PrivateRoutes.map(route =>
                        <Route
                            path={route.path}
                            element={<route.element />}
                            key={route.path}
                        />
                    )
                :
                PublickRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={<route.element />}
                        key={route.path}
                    />
                )
            }

        </Routes>
    );
};

export default AppRouter;


