import Header from './components/Header';
import List from './components/DiseaseList/DiseaseList';

function App() {
	return (
		<div class="flex flex-col justify-center aligned-center max-w-3xl mx-auto">
			<Header />
			<List />
		</div>
	);
}

export default App;
