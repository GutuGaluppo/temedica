import './App.css';
import List from './components/List/List';
import logo from './logo.png';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" width="50px"/>
				<a href="">Temedica</a>
			</header>
			<List />
		</div>
	);
}

export default App;
