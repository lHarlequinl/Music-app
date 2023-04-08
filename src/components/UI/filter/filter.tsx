import React, { useState, useContext } from 'react';
import FilterItemYears from './filter-years/filter-item-years';
import FilterItem from './filter-item/filter-item';
import { trackData } from '../../../mocks/track-data';
import FilterCategories from './filter-categories/filter-categories';
import * as Styled from './filter.style';
import { ThemeContext } from '../../contexts/theme-context/theme-context';

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

    const { isDarkTheme } = useContext(ThemeContext);

    return (
        <Styled.FilterWrapper>
            <Styled.FilterTitle isDarkTheme={isDarkTheme}>
                Искать по:
            </Styled.FilterTitle>
            <Styled.FilterButtonWrapper
                isDarkTheme={isDarkTheme}
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
                <Styled.FilterItemsWrapperAuthor
                    isDarkTheme={isDarkTheme}
                    isActive={isActive}
                >
                    <Styled.FilterItems isDarkTheme={isDarkTheme}>
                        {trackData[0].tracks.map((item) => (
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
                isDarkTheme={isDarkTheme}
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
                <Styled.FilterItemsWrapperYear
                    isActive={isActive}
                    isDarkTheme={isDarkTheme}
                >
                    <FilterItemYears />
                </Styled.FilterItemsWrapperYear>
            </Styled.FilterButtonWrapper>

            <Styled.FilterButtonWrapper
                isDarkTheme={isDarkTheme}
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
                <Styled.FilterItemsWrapperGenre
                    isDarkTheme={isDarkTheme}
                    isActive={isActive}
                >
                    <Styled.FilterItems isDarkTheme={isDarkTheme}>
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
