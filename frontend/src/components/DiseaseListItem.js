import React from 'react'

function DiseaseListItem({ drug }) {
	return <li key={drug.id} class='py-5 px-8 my-5 mx-5 rounded-md shadow-md border'>
		<div class="flex justify-between items-center">
			<h1 class="font-bold text-gray-700 font-serif">{drug.name}</h1>
			<small class='font-extralight'>
				<span>Released at: </span>
				<time datetime={drug.released}>{drug.released}</time>
			</small>
		</div>
		<p class="mt-4 italic font-extralight">List of related disease{drug.diseases.length <= 1 ? '' : 's'}:</p>
		<ul class="mb-4 mt-1">
			{
				drug.diseases?.map(disease => {
					return <li key={disease} class="font-light">
						- {disease}
					</li>
				})
			}
		</ul>
		<hr />
		<div>
			<p class="italic my-2 font-extralight">Description: </p>
			<p class='font-light'>{drug.description}</p>
		</div>
	</li>
}

export default DiseaseListItem