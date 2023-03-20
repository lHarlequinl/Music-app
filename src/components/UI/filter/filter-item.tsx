import React from 'react';
import { FilterItemProps } from '../../../types';

const FilterItem = ({ text, href }: FilterItemProps) => {
    return (
        <a className="filter__items-link" href={href}>
            {text}
        </a>
    );
};

export default FilterItem;
