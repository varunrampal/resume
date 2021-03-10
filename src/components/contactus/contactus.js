import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
               
                <h4>Email :
                  <span style={{paddingLeft:'10px'}}>{resumeData.email}</span>
                </h4>
                <h4>Phone :
                <span style={{paddingLeft:'10px'}}>{resumeData.phone}</span>
                
                </h4>
                <h4>Linked in :
                <span style={{paddingLeft:'10px'}}>{resumeData.linkedinId}</span>
                </h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}
