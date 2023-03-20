import React from 'react';
import Search from './search';
import Filter from '../../../components/UI/filter/filter';
import Content from './content';

const CenterBlock = () => {
    return (
	<div className="main__centerblock centerblock">
		<Search/>
		<h2 className="centerblock__h2">Треки</h2>
		<Filter/>
		<Content/>
	</div>
	);
}

export default CenterBlock;
