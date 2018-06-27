import React from 'react';
import error from '../error404.jpg';
import {Link} from 'react-router-dom';

const PageNotFound = ({location}) => (
  <div style={{backgroundColor: '#eed', height: `${window.innerHeight}px`}}>
    <div className="vertical-center text-center">
      <img src={error} alt="404 Page Not Found" className="mb-3"/>
      <p className="">Looks like nothing matches &nbsp;<code>{location.pathname}</code></p>
      <Link className="btn btn-danger" to="/">Go back</Link>
    </div>
  </div>
);

export default PageNotFound;