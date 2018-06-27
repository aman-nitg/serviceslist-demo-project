import React, { Component } from 'react';
import ServiceProvider from './ServiceProvider';
import Navbar from './Navbar';

class ListServices extends Component {
  state = {
    category: 'all'
  };

  updateProviderList = (category) => (
    this.setState({ category })
  );

  render() {
    const {category} = this.state;
    const services = category === 'all' ? this.props.services : this.props.services.filter( s => s.category.toLowerCase() === category);
    return (
      <div>
        <Navbar/>
        <div className="App-header">
          <h2 className="App-title vertical-center">Demo Services</h2>
        </div>
        <br/>
        <br/>
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-auto">
              <label htmlFor="sort">Sort By &nbsp;&nbsp;&nbsp;</label>
              <select name="sort" id="sort" value={this.state.category} onChange={(e) => this.updateProviderList(e.target.value)}>
                <option disabled>Select service providers type</option>
                <option value="all">All Service Providers</option>
                <option value="technology">Technology</option>
                <option value="accounting">Accounting</option>
                <option value="hr services">HR Services</option>
                <option value="consulting services">Consulting Services</option>
              </select>
            </div>
          </div>
          <br/><br/>
          <div className="row">
            <ul className="list-unstyled col-12">
              { services.map((sp) => (
                <ServiceProvider sp={sp} key={sp.id}/>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default ListServices;