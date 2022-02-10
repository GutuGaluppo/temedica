import React from 'react'
import './ListItem.css'

function ListItem({ drug }) {
	return <li key={drug.id}>
		<div className="list-header">
			<h3>{drug.name}</h3>
			<smal>
				<time datetime={drug.released}>{drug.released}</time>
			</smal>
		</div>
		<ul>
			{
				drug.diseases?.map(deseas => {
					return <li key={deseas[0]}>
						{deseas}
					</li>
				})
			}
		</ul>
		<div>
			<p>{drug.description}</p>
		</div>
	</li>
}

export default ListItem