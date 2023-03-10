import React, { ReactElement } from 'react';
import Search from './search';

function CenterBlock(): ReactElement<HTMLDivElement> {
    return (
	<div className="main__centerblock centerblock">
		<Search/>
	</div>
	);
}

export default CenterBlock;
