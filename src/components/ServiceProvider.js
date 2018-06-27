import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ServiceProvider extends Component {
  render() {
    const {sp} = this.props;
    return (
      <li className="media" style={{marginBottom: '2rem'}}>
        <img
          className="mr-3"
          width="150px"
          height="150px"
          src={
            sp.image ?
              sp.image :
              'https://s3-ap-southeast-1.amazonaws.com/letsventure/public/service_provider/provider_logos/default.png'
          }
          alt={sp.name}
        />
        <div className="media-body">
          <div className="card">
            <div className="card-header">
              <h3 className="mb-0">{sp.name}</h3>
              <p className="text-muted">{sp.category}</p>

            </div>
            <div className="card-body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci delectus eum incidunt reprehenderit tenetur unde voluptatibus. Cumque eveniet laudantium magni nostrum praesentium suscipit! Alias assumenda laudantium mollitia nesciunt totam? Voluptate?
              <p style={{fontWeight: 600, marginTop: '1rem'}}>Our Clients</p>
              <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel" data-interval="3000">
                <div className="carousel-inner">
                  {sp.testimonials.map( (t, index) => (
                    <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`} >
                      <p className="mb-0">{t.name}</p>
                      <p>{t.designation}</p>
                      <p className="text-muted">{t.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="card-footer text-center">
              <Link to={sp.permalink} target="_blank" className="btn btn-dark">Read More</Link>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default ServiceProvider;