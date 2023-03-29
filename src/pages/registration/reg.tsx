import React from 'react';
import * as Styled from './reg.style';
import RegistrationForm from '../../components/registration/reg-form/reg-form';

const RegistrationPage = () => {
    return (
        <Styled.RegWrapper>
            <RegistrationForm />
        </Styled.RegWrapper>
    );
};

export default RegistrationPage;
