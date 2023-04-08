import React, { useContext } from 'react';
import { ShowHideMenu } from '../../../../types';
import * as Styled from './burger.style';
import { ThemeContext } from '../../../contexts/theme-context/theme-context';


const BurgerLines = ({ menuActive }: ShowHideMenu) => {
    const { isDarkTheme } = useContext(ThemeContext);

    return <Styled.BurgerLine isDarkTheme={isDarkTheme} active={menuActive}></Styled.BurgerLine>;
};

export default BurgerLines;
