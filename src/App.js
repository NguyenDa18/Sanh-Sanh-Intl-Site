import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Row } from 'reactstrap';
import './App.css';

import AppBar from './components/AppBar';

import FrontPage from './pages/FrontPage';

import NewItemsPage from './pages/NewItemsPage';
import BowlsPage from './pages/BowlsPage';
import CeramicPage from './pages/CeramicPage';
import CollectionsPage from './pages/CollectionsPage';
import GadgetsPage from './pages/GadgetsPage';
import HouseholdPage from './pages/HouseholdPage';
import PotsPage from './pages/PotsPage';
import StovesPage from './pages/StovesPage';
import TablewarePage from './pages/TablewarePage';

function App() {
	return (
		<>
			<AppBar />
			<Router>
				<Switch>
					<Route exact path="/" component={FrontPage} />
					<Route exact path="/new" component={NewItemsPage} />
					<Route exact path="/bowls" component={BowlsPage} />
					<Route exact path="/ceramics" component={CeramicPage} />
					<Route exact path="/collections" component={CollectionsPage} />
					<Route exact path="/gadgets" component={GadgetsPage} />
					<Route exact path="/household" component={HouseholdPage} />
					<Route exact path="/pots" component={PotsPage} />
					<Route exact path="/stoves" component={StovesPage} />
					<Route exact path="/tableware" component={TablewarePage} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
