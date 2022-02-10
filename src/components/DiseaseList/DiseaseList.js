import React, { useMemo, useState } from 'react'
import './DiseaseList.css'
import ListItem from '../DiseaseListItem/DiseaseListItem'
import data from '../../dataset.json'

function DiseaseList() {

	const [nameFilter, setNameFilter] = useState('')

	const handleNameFilter = (e) => {
		setNameFilter(e.target.value.toLowerCase())
	}

	const matchText = (name, search) => {
		const regex = new RegExp(`[\\w\\s]*(${search})[\\w\\s]*`, "g")
		return name.match(regex);
	}


	const filteredList = useMemo(() => {
		if (!nameFilter) return data.drugs

		const filterByDrugName = data?.drugs.filter(drug => {
			const drugSub = drug.name.toLowerCase();
			return matchText(drugSub, nameFilter) || drug.diseases.some(diseasee => matchText(diseasee, nameFilter))
		})

		return filterByDrugName
	}, [nameFilter])

	return <div>
		<label htmlFor="search">Search</label>
		<input
			type="text"
			placeholder="Search by drug name or disease"
			onChange={handleNameFilter}
			className="input-search"
		/>
		<ul>
			{filteredList?.map(drug => <ListItem drug={drug} />)}
		</ul>
	</div>
}

export default DiseaseList