import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
	/*const cardComponent = robots.map((user, i) => {
	return ( <Card key={user.id} id={robots[i].id} name={user.name} email={robots[i].email} /> );
	});*/
	return (
		<div>
			{
				robots.map((user, i) => {
					return ( <Card key={user.id} id={robots[i].id} name={user.name} email={robots[i].email} /> );
				})
			}
		</div>
	)
}

export default CardList;