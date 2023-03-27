import { Routes, Route } from 'react-router-dom';
import NotFoundPage from './pages/not-found/not-found';
import LoginPage from './pages/login/login';
import RegistrationPage from './pages/registration/reg';
import Main from './pages/main/main';
import PersonalPlaylist from './pages/personal-playlist/personal-playlist';
import CustomPlaylists from './pages/custom-playlist/custom-playlist';

interface Props {
    isLogin: boolean;
}

export const AppRoutes = ({ isLogin }: Props) => {
    const homepage = isLogin ? <Main /> : <LoginPage />;

    return (
        <Routes>
            <Route>
                <Route path="/main" element={<Main />} />
                <Route path="/personal" element={<PersonalPlaylist />} />
                <Route path="/playlist/:id" element={<CustomPlaylists />} />

            </Route>
            <Route path="/" element={homepage} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registration" element={<RegistrationPage />} />

            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
};

export default AppRoutes;
