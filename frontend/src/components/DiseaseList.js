import React, { useMemo, useState } from 'react'
import ListItem from './DiseaseListItem'

function DiseaseList() {
	const [drugs, setDrugs] = useState([])
	const [nameFilter, setNameFilter] = useState('')

	const handleNameFilter = (e) => {
		if (e.target.value === '') return setDrugs([])
		fetchApi()
		setNameFilter(e.target.value.toLowerCase())
	}

	const matchText = (name, search) => {
		const regex = new RegExp(`[\\w\\s]*(${search})[\\w\\s]*`, "g")
		return name.match(regex);
	}

	const fetchApi = () => {
		return fetch('http://localhost:3001/api/drugs')
			.then((response) => response.json())
			.then((data) => {
				setDrugs(data.drugs)
			})
			.catch(err => console.log(err))
	}

	const filteredList = useMemo(() => {
		if (!nameFilter) return drugs

		const filterByDrugName = drugs?.filter(drug => {
			const drugSub = drug.name.toLowerCase();
			return matchText(drugSub, nameFilter) || drug.diseases.some(diseasee => matchText(diseasee, nameFilter))
		})

		return filterByDrugName
	}, [nameFilter, drugs])

	return <div>
		<div class="w-4/5 md:w-full mx-auto">
			<label class="block">
				<span class="block text-sm font-medium text-slate-700">
					Search
				</span>
				<input
					type="search"
					name="search"
					onChange={handleNameFilter}
					placeholder="Search by drug name or disease"
					class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder:italic placeholder:text-slate-400 focus:placeholder:text-gray-200 focus:outline-none focus:border-gray-200 focus:ring-gray-300 block w-full rounded-md sm:text-sm focus:ring-1"
				/>
			</label>
		</div>
		{filteredList.length > 0 ? (
			<p class="text-lg m-4">There {filteredList.length <= 1 ? "is" : "are"} {filteredList.length} results</p>
		) : null}
		<ul class='mx-auto w-full min-w-[100%] overflow-auto h-screen'>
			{filteredList?.map(drug => <ListItem drug={drug} />)}
		</ul>
	</div>
}

export default DiseaseList