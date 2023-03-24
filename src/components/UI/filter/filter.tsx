import React, { useState } from 'react';
import FilterItemYears from './filter-years/filter-item-years';
import FilterItem from './filter-item/filter-item';
import { trackData } from '../../main/center-block/playlist/track-data';
import FilterCategories from './filter-categories/filter-categories';
import * as Styled from './filter.style';

const Filter = () => {
    const [isActive, setActive] = useState<'author' | 'year' | 'genre' | null>(
        null
    );

    enum Genre {
        Rock = 'Рок',
        HipHop = 'Хип-Хоп',
        Jazz = 'Джаз',
        Alternative = 'Альтернатива',
        Rap = 'Рэп',
        Classic = 'Классическая',
    }

    const genre: Genre[] = [
        Genre.Rock,
        Genre.HipHop,
        Genre.Jazz,
        Genre.Alternative,
        Genre.Rap,
        Genre.Classic,
    ];

    return (
        <Styled.FilterWrapper>
            <Styled.FilterTitle>Искать по:</Styled.FilterTitle>
            <Styled.FilterButtonWrapper
                onClick={() =>
                    setActive((prevState) =>
                        prevState === null ? 'author' : null
                    )
                }
            >
                <FilterCategories
                    text="исполнителю"
                    isActive={isActive === 'author'}
                />
                <Styled.FilterItemsWrapperAuthor isActive={isActive}>
                    <Styled.FilterItems>
                        {trackData.map((item) => (
                            <FilterItem
                                key={item.trackTitleText}
                                text={item.trackAuthorText}
                                href="#"
                            />
                        ))}
                    </Styled.FilterItems>
                </Styled.FilterItemsWrapperAuthor>
            </Styled.FilterButtonWrapper>

            <Styled.FilterButtonWrapper
                onClick={() =>
                    setActive((prevState) =>
                        prevState === null ? 'year' : null
                    )
                }
            >
                <FilterCategories
                    text="году выпуска"
                    isActive={isActive === 'year'}
                />
                <Styled.FilterItemsWrapperYear isActive={isActive}>
                    <FilterItemYears />
                </Styled.FilterItemsWrapperYear>
            </Styled.FilterButtonWrapper>
            
            <Styled.FilterButtonWrapper
                onClick={() =>
                    setActive((prevState) =>
                        prevState === null ? 'genre' : null
                    )
                }
            >
                <FilterCategories
                    text="жанру"
                    isActive={isActive === 'genre'}
                />
                <Styled.FilterItemsWrapperGenre isActive={isActive}>
                    <Styled.FilterItems>
                        {genre.map((item) => (
                            <FilterItem key={item} text={item} href="#" />
                        ))}
                    </Styled.FilterItems>
                </Styled.FilterItemsWrapperGenre>
            </Styled.FilterButtonWrapper>
        </Styled.FilterWrapper>
    );
};

export default Filter;
