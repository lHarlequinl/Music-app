import React from 'react';
import { FilterProps } from '../../../../types';
import * as Styled from './filter-categories.style';

const FilterCategories = ({ text, isActive }: FilterProps) => {
    return (
        <Styled.FilterButton isActive={isActive}>
            <div>{text}</div>
            <Styled.FilterButtonCount isActive={isActive}>
                #
            </Styled.FilterButtonCount>
        </Styled.FilterButton>
    );
};

export default FilterCategories;
