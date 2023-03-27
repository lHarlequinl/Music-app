import React from 'react';
import * as Styled from './login-form.style';
import { Link } from 'react-router-dom';

const LoginForm = () => {
    const MyLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        localStorage.setItem('token', '');
    };

    return (
        <Styled.LoginForm>
            <Styled.Logo src="/img/logo-black.png" alt="logo" />
            <Styled.LoginInput placeholder="Логин" />
            <Styled.LoginInput placeholder="Пароль" />
            <Link to="/main">
                <Styled.LoginButton>
                    Войти
                </Styled.LoginButton>
            </Link>
            <Link to="/registration">
                <Styled.RegistrationButton>
                    Зарегистрироваться
                </Styled.RegistrationButton>
            </Link>
        </Styled.LoginForm>
    );
};

export default LoginForm;
