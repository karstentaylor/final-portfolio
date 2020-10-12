import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Header';
import About from './About';
import Work from './Work';
import Contact from './Contact';

function App() {
	return (
		<div className="App">
			<div className="Top-bar"></div>
			<header className="App-header">
				<Header />
			</header>
			<main>
				<Switch>
					<Route exact path={'/'} component={About} />
					<Route path={'/work'} component={Work} />
					<Route path={'/contact'} component={Contact} />
				</Switch>
			</main>
		</div>
	);
}

export default App;
