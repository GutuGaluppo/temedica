import React from 'react'
import './List.css'
import ListItem from '../ListItem/ListItem'
import data from '../../dataset.json'

function List() {

	return <div>
		<ul>
			{data?.drugs.map(drug => <ListItem drug={drug} />)}
		</ul>
	</div>
}

export default List