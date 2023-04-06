import React, { useContext } from 'react';
import * as Styled from './filter-years.style';
import { ThemeContext } from '../../../contexts/theme-context/theme-context';

const FilterItemYears = () => {
    const { isDarkTheme } = useContext(ThemeContext);

    return (
        <Styled.FilterItemsYearWrapper>
            <label htmlFor="year-filter">
                <input
                    id="year-filter-new"
                    name="year-filter"
                    type="radio"
                    value="new"
                />
                <Styled.FilterYearLabel isDarkTheme={isDarkTheme} htmlFor="year-filter-new">
                    Более новые
                </Styled.FilterYearLabel>

                <input
                    id="year-filter-old"
                    name="year-filter"
                    type="radio"
                    value="old"
                />
                <Styled.FilterYearLabel isDarkTheme={isDarkTheme} htmlFor="year-filter-old">
                    Более старые
                </Styled.FilterYearLabel>
            </label>
        </Styled.FilterItemsYearWrapper>
    );
};

export default FilterItemYears;
