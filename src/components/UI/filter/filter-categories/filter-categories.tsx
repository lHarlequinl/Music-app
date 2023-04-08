import React, { useContext } from 'react';
import { FilterProps } from '../../../../types';
import * as Styled from './filter-categories.style';
import { ThemeContext } from '../../../contexts/theme-context/theme-context';

const FilterCategories = ({ text, isActive }: FilterProps) => {
    const { isDarkTheme } = useContext(ThemeContext);

    return (
        <Styled.FilterButton isDarkTheme={isDarkTheme} isActive={isActive}>
            <div>{text}</div>
            <Styled.FilterButtonCount isActive={isActive}>
                #
            </Styled.FilterButtonCount>
        </Styled.FilterButton>
    );
};

export default FilterCategories;
