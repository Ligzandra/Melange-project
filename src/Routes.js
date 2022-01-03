import React from 'react';
import { Switch, Route } from 'react-dom';
import Home from './pages/Home';

const Routes = () => {
	return(
		<Switch>
			 <Route exact path="/home" component={Home} />
		</Switch>

);
};

export default Routes;