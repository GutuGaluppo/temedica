import React, { useEffect, useMemo, useState } from 'react'
import './DiseaseList.css'
import ListItem from '../DiseaseListItem/DiseaseListItem'
// import data from '../../dataset.json'

function DiseaseList() {
	const [drugs, setDrugs] = useState([])
	const [nameFilter, setNameFilter] = useState('')

	const handleNameFilter = (e) => {
		setNameFilter(e.target.value.toLowerCase())
	}

	const matchText = (name, search) => {
		const regex = new RegExp(`[\\w\\s]*(${search})[\\w\\s]*`, "g")
		return name.match(regex);
	}

	useEffect(() => {
		fetch('http://localhost:3001/api/drugs')
			.then((response) => response.json())
			.then((data) => {
				console.log("Data: ", data.drugs)
				setDrugs(data.drugs)
			})
			.catch(err => console.log(err))
	}, [])

	const filteredList = useMemo(() => {
		if (!nameFilter) return drugs

		const filterByDrugName = drugs?.filter(drug => {
			const drugSub = drug.name.toLowerCase();
			return matchText(drugSub, nameFilter) || drug.diseases.some(diseasee => matchText(diseasee, nameFilter))
		})

		return filterByDrugName
	}, [nameFilter, drugs])

	return <div>
		<label htmlFor="search">Search</label>
		<input
			type="text"
			placeholder="Search by drug name or disease"
			onChange={handleNameFilter}
			className="input-search"
		/>
		<ul>
			{filteredList.map(drug => <ListItem drug={drug} />)}
		</ul>
	</div>
}

export default DiseaseList