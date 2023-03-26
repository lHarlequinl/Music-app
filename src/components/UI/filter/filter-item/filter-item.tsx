import React from 'react';
import { FilterItemProps } from '../../../../types';
import * as Styled from './filter-item.style';

const FilterItem = ({ text, href }: FilterItemProps) => {
    return <Styled.FilterItemsLink href={href}>{text}</Styled.FilterItemsLink>;
};

export default FilterItem;
