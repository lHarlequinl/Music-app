import React from 'react';
import * as Styled from '../../components/not-found/not-found.style';

const NotFound = () => {
    return (
        <Styled.NotFoundWrapper>
            <Styled.NotFoundTitle>404</Styled.NotFoundTitle>
            <Styled.NotFoundSubTitle>
                Страница не найдена
            </Styled.NotFoundSubTitle>
            <Styled.NotFoundText>
                Возможно, она была удалена или перенесена на другой адрес
            </Styled.NotFoundText>
            <Styled.NotFoundButton>Вернуться на главную</Styled.NotFoundButton>
        </Styled.NotFoundWrapper>
    );
};

export default NotFound;
