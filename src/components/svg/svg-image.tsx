import React from 'react';
import * as Styled from './svg.style';
import { Svg } from '../../types';

const SvgImage = ({ href, ariaLabel }: Svg) => {
    return (
        <Styled.SVGImg aria-label={ariaLabel}>
            <use xlinkHref={href}></use>
        </Styled.SVGImg>
    );
};

export default SvgImage;
