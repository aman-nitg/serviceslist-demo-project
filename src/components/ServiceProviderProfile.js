import React, { Component } from 'react';
import Navbar from './Navbar';

class ServiceProviderProfile extends Component {
  validateForm = (e) => {
    const form = document.getElementById('needs-validation');
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    form.classList.add('was-validated');
  };
  render() {
    const decodedId = decodeURIComponent(this.props.match.params.id);
    const sp = this.props.services.filter(s => s.permalink === decodedId);
    return (
      <div>
        <Navbar/>
        <div className="container">{/*{JSON.stringify(this.props)}*/}
          <div className="row col-12">
            <div className="media" style={{marginTop: '2rem'}}>
              <div className="mr-4">
                <img
                  src={
                    sp[0].image ?
                      sp[0].image :
                      'https://s3-ap-southeast-1.amazonaws.com/letsventure/public/service_provider/provider_logos/default.png'
                  }
                  width="150px" height="150px" alt="" className="mb-3"
                />
                <div className="row no-gutters p-0 col-12 mb-3 text-center justify-content-center">
                  {sp[0].website && <a className="col-3" href={sp[0].website}><i className="fas fa-globe-asia fa-lg"></i></a>}
                  {sp[0].twitter && <a className="col-3" href={`https://twitter.com/${sp[0].twitter}`}><i className="fab fa-twitter-square fa-lg"></i></a>}
                  {sp[0].linked_in && <a className="col-3" href={sp[0].linked_in}><i className="fab fa-linkedin fa-lg"></i></a>}
                  {sp[0].facebook && <a className="col-3" href={sp[0].facebook}><i className="fab fa-facebook fa-lg"></i></a>}
                </div>
                {/*Connect modal code starts*/}
                <button type="button" className="btn btn-success row col-12 no-gutters" data-toggle="modal" data-target="#connectModal">Connect</button>
                <div className="modal fade" id="connectModal" tabIndex="-1" role="dialog" aria-labelledby="connectModalLabel" aria-hidden="true">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="connectModalLabel">Contact Us</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <form id="needs-validation" noValidate>
                        <div className="modal-body">
                          <div className="form-group position-relative">
                            <label htmlFor="recipient-name" className="col-form-label">Recipient:</label>
                            <input type="text" className="form-control" id="recipient-name" required />
                            <div className="invalid-tooltip">Please provide recipient name</div>
                            <div className="valid-tooltip">Looks good</div>
                          </div>
                          <div className="form-group position-relative">
                            <label htmlFor="recipient-email" className="col-form-label">Email:</label>
                            <input type="email" className="form-control" id="recipient-email" required/>
                            <div className="invalid-tooltip">Please provide email</div>
                          </div>
                          <div className="form-group position-relative">
                            <label htmlFor="recipient-number" className="col-form-label required">Contact number:</label>
                            <input type="number" className="form-control" id="recipient-number" required/>
                            <div className="invalid-tooltip">Please provide contact number</div>
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                          <button type="submit" className="btn btn-primary" onClick={(e) => this.validateForm(e)}>Submit</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                {/*Connect modal code ends*/}
              </div>
              <div className="media-body">
                <div className="card">
                  <div className="card-header">
                    <h3>{sp[0].name}</h3>
                    <p className="text-muted">{sp[0].category}</p>
                    <p>{sp[0].short_note}</p>
                  </div>
                </div>
                <br/>
                <div>
                  <p><strong>Who are we?</strong></p>
                  <p className="text-muted">{sp[0].who_are_we}</p>
                </div>
                <br/>
                <div>
                  <p><strong>What can we do for you?</strong></p>
                  <p className="text-muted">{sp[0].what_can_we_do_for_you}</p>
                </div>
                <br/>
                <div>
                  <p><strong>Why work with us</strong></p>
                  <p className="text-muted">{sp[0].why_work_with_us}</p>
                </div>

                {sp[0].team.length > 0 && (
                  <div className="team-details">
                    <hr className="col-8 row no-gutters"/>
                    <h5 className="mb-4">Our Team</h5>
                    <div className="row">
                      {sp[0].team.map( (t, index) => (
                        <div key={index} className="col-auto">
                          <div className="media">
                            <img className="mr-3"
                                 src={
                                   t.image ?
                                     t.image :
                                     'https://s3-ap-southeast-1.amazonaws.com/letsventure/public/service_provider/team_member_pics/default.png'
                                 }
                                 alt={t.name} width="80px" height="80px"
                            />
                            <div className="media-body">
                              <h6 className="font-weight-bold">{t.name}</h6>
                              <h6 className="font-weight-bold">{t.designation}</h6>
                              {t.twitter && <a className="ml-2" href={`https://twitter.com/${t.twitter}`}><i className="fab fa-twitter-square rounded fa-lg"></i></a>}
                              {t.linked_in && <a className="ml-2" href={t.linked_in}><i className="fab fa-linkedin fa-lg"></i></a>}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {sp[0].testimonials.map(t => t.text).join('').length > 0 && (
                  <div className="testimonials">
                    <hr className="col-8 row no-gutters"/>
                    <h5 className='mb-4'>Testimonials</h5>
                    <ul className="list-unstyled">
                      {sp[0].testimonials.map( (testimonial, index) => (
                        <li key={index} className="media mb-2">
                          <div className="mr-4">
                            <img className="mb-3"
                                 src={
                                   testimonial.image ?
                                     testimonial.image :
                                     'https://s3-ap-southeast-1.amazonaws.com/letsventure/public/service_provider/provider_logos/default.png'
                                 }
                                 alt={testimonial.company_name} width="80px" height="80px"
                            />
                            <p className="font-weight-bold text-center" style={{maxWidth: '80px'}}>{testimonial.company_name}</p>
                          </div>

                          <div className="media-body">
                            { testimonial.scope_of_engagement && (
                              <p>
                                <strong>Scope of Engagement - </strong>
                                <span className="text-muted">
                                {testimonial.scope_of_engagement}
                              </span>
                              </p>
                            )}
                            { testimonial.recommended_to && (
                              <p>
                                <strong>Kind of startups that should work with {sp[0].permalink} - </strong>
                                <span className="text-muted">{testimonial.recommended_to}</span>
                              </p>
                            )}
                            <p className="text-muted">{testimonial.text}</p>
                            <div className="testimonial-signature row justify-content-between">
                              <p className="font-weight-bold col-auto">{testimonial.duration}</p>
                              <div className="col-auto mr-4">
                                <p className="font-weight-bold mb-0">{testimonial.name}</p>
                                <p className="font-weight-bold">{testimonial.designation}</p>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ServiceProviderProfile;