import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../stylesheets/article-clean.css';
import '../stylesheets/signupform.css';
 class AboutUs extends Component {
  render() {
    return (
      <div> 
      
      
            <div class="container" style={{backgroundImage: `url(https://www.dasra.org/sites/default/files/styles/org_banner/public/TFI_Banner.jpg?itok=QMvxXnXq)`}}>
                <div class="wrapper animated bounceInLeft">
                    <div class="intro" style={{backgroundColor:'#c9e6ff'}}>
                        <h1 class="text-center">About Us</h1>
                      <img class="img-fluid" src="http://dubeat.com/wp-content/uploads/Five-reasons-to-enrol-for-the-Teach-For-India-Project.jpg" /></div>
                    <div class="text" style={{backgroundColor:'white'}}>
                        <p>Sed lobortis mi. Suspendisse vel placerat ligula.<span style={{textDecoration:'underline'}}>Vivamus</span>ac sem lac. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.
                            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.</p>
                        <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac lacus.<strong>Ut vehicula rhoncus</strong>elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit<em>pulvinar dict</em>vel in justo. Vestibulum ante ipsum
                            primis in faucibus orci luctus et ultrices posuere cubilia Curae.</p>
                        <h2>Aliquam In Arcu</h2>
                        <p>Suspendisse vel placerat ligula. Vivamus ac sem lac. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                            posuere cubilia Curae.</p>
                        <figure><img class="figure-img" src="beach.jpg" />
                            <figcaption>Caption</figcaption>
                        </figure>
                        <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae. Suspendisse vel placerat ligula. Vivamus ac sem lac. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar
                            dictum vel in justo.</p>
                    </div>
                </div>
            </div>
        
      </div>
    )
  }
}

export default AboutUs;