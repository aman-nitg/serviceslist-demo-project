import React, { Component } from 'react';
import '../App.css';
import {Switch, Route, Redirect} from 'react-router-dom';
import ListServices from './ListServices';
import ServiceProviderProfile from "./ServiceProviderProfile";
import PageNotFound from "./PageNotFound";
import { getSp } from '../utils/Api';

class App extends Component {
  state = {
    serviceProviders: []
  };

  componentDidMount() {
    getSp().then( data => { this.setState({ serviceProviders: data }) } )
  }

  render() {
    const allowedIds = this.state.serviceProviders.map(sp => sp.permalink).join('|').replace(/\+/g, '%2B');
    return (
        <Switch>
          <Route path="/" exact render={() => (
            <ListServices services={this.state.serviceProviders}/>
          )} />
          <Redirect from="/i+b" to="/i%2bb"/>
          <Route path={`/:id(${allowedIds})`} render={(props) => (
            <ServiceProviderProfile {...props} services={this.state.serviceProviders}/>
          )}/>
          <Route component={PageNotFound}/>
        </Switch>
    );
  }
}

export default App;
