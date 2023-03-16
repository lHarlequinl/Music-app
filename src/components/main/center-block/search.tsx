import React, { ReactElement } from 'react';
import SvgImage from '../../svg-image';

function Search(): ReactElement<HTMLDivElement> {
    return (
        <div className="centerblock__search search">
            <div className="search__svg">
                <SvgImage
                    href="img/icon/sprite.svg#icon-search"
                    ariaLabel="search"
                />
            </div>

            <input
                className="search__text"
                type="search"
                placeholder="Поиск"
                name="search"
            />
        </div>
    );
}

export default Search;
