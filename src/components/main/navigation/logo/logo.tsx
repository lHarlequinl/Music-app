import React from 'react';
import { LogoProps } from '../../../../types';
import * as Styled from './logo.style';

const Logo = ({ src, alt }: LogoProps) => {
    return (
        <Styled.Logo>
            <Styled.LogoImage src={src} alt={alt}></Styled.LogoImage>
        </Styled.Logo>
    );
};

export default Logo;
