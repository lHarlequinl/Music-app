import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFoundPage from './pages/not-found/not-found';
import LoginPage from './pages/login/login';
import RegistrationPage from './pages/registration/reg';
import Main from './pages/main/main';
import PersonalPlaylist from './pages/personal-playlist/personal-playlist';
import CustomPlaylist from './pages/custom-playlist/custom-playlist';
import ProtectedRoute from './components/protected-route/protected-route';

interface Props {
    isLogin: boolean;
}

export const AppRoutes = ({ isLogin }: Props) => {
    const homepage = isLogin ? <Main /> : <LoginPage />;

    return (
        <Routes>
            <Route element={<ProtectedRoute isAllowed={isLogin} />}>
                <Route path="/personal" element={<PersonalPlaylist />} />
                <Route path="/main" element={<Main />} />
                <Route path="/playlist/:id" element={<CustomPlaylist />} />
            </Route>
            <Route path="/" element={homepage} />
            <Route path="/registration" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />

            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
};

export default AppRoutes;
