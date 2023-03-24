import React from 'react';
import * as Styled from './filter-years.style';

const FilterItemYears = () => {
    return (
        <Styled.FilterItemsYearWrapper>
            <label htmlFor="year-filter">
                <input
                    id="year-filter-new"
                    name="year-filter"
                    type="radio"
                    value="new"
                />
                <Styled.FilterYearLabel htmlFor="year-filter-new">
                    Более новые
                </Styled.FilterYearLabel>

                <input
                    id="year-filter-old"
                    name="year-filter"
                    type="radio"
                    value="old"
                />
                <Styled.FilterYearLabel htmlFor="year-filter-old">
                    Более старые
                </Styled.FilterYearLabel>
            </label>
        </Styled.FilterItemsYearWrapper>
    );
};

export default FilterItemYears;
