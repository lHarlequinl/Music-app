import React, { useContext } from 'react';
import { FilterItemProps } from '../../../../types';
import * as Styled from './filter-item.style';
import { ThemeContext } from '../../../contexts/theme-context/theme-context';

const FilterItem = ({ text, href }: FilterItemProps) => {
    const { isDarkTheme } = useContext(ThemeContext);

    return (
        <Styled.FilterItemsLink isDarkTheme={isDarkTheme} href={href}>
            {text}
        </Styled.FilterItemsLink>
    );
};

export default FilterItem;
