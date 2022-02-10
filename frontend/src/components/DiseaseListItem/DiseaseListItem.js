import React from 'react'
import './DiseaseListItem.css'

function DiseaseListItem({ drug }) {
	return <li key={drug.id}>
		<div className="list-header">
			<h3>{drug.name}</h3>
			<small>
				<span>Released at: </span>
				<time datetime={drug.released}>{drug.released}</time>
			</small>
		</div>
		<ul>
			{
				drug.diseases?.map(disease => {
					return <li key={disease} className="disease-list">
						{disease}
					</li>
				})
			}
		</ul>
		<div>
			<p>{drug.description}</p>
		</div>
	</li>
}

export default DiseaseListItem