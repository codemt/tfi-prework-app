import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../stylesheets/card-classic.css';
import $ from 'jquery';
 class Cards extends Component {

  render() {
    return (
      <div>
        <div class="container">
                    <div class="cust_bloglistintro">
                        <h2 class="text-center">Latest Articles</h2>
                        <p class="text-muted text-center">Nunc luctus in metus eget fringilla. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae.</p>
                    </div>
                    <div class="row">
                        <div class="col-md-4 cust_blogteaser">
                            <a href="#">
                                <img class="img-fluid" src="http://dubeat.com/wp-content/uploads/AkwUqZ60VImEGr7ikVTrdS8b05E5yQcHmAbZhlQJRgE-.jpg"style={{width:290,height:217}} />
                            </a>
                            <h3>In Conversation with Suvidha Jain, SRCC Alumni and Fellow at Teach for India.</h3>
                            <p class="text-secondary">Teach For India, a project of Teach To Lead, is a nationwide movement of outstanding college graduates and young professionals who will commit two-years to teach full-time in under resourced schools and who will become lifelong leaders working from within various sectors towards the pursuit of equity in education.
                            </p>
                            <a href="https://www.letsintern.com/blog/1in-conversation-with-suvidha-jain-srcc-alumni-and-fellow-at-teach-for-india/"  target="_blank" class="h4">
                            <i class="fa fa-arrow-circle-right"></i>
                            </a>
                        </div>
                        <div class="col-md-4 cust_blogteaser">
                            <a href="#">
                                <img class="img-fluid" src="http://www.thehindu.com/news/cities/chennai/article16807727.ece/ALTERNATES/LANDSCAPE_615/Teach%20for%20India.JPG"   style={{width:290,height:217}}/>
                            </a>
                            <h3> How Teach For India initiative works </h3>
                            <p class="text-secondary">"One day, all children will have an excellent education," reads the tag line of Teach for India. Working with low income and schools in need of better resources in Chennai since 2012, the presence of the program has significantly increased over the years.
                             </p>
                            <a href="https://www.thehindu.com/news/cities/chennai/article16807725.ece"  target="_blank"  class="h4"><i class="fa fa-arrow-circle-right"></i>
                            </a>
                        </div>
                        <div class="col-md-4 cust_blogteaser">
                            <a href="#">
                                <img class="img-fluid" src="https://www.duexpress.in/wp-content/uploads/2017/03/16700511_247695932307928_45563138553466263_o-1024x586.jpg" style={{width:290,height:217}}/>
                            </a>
                            <h3>Jai Mishra’s Journey Of Trials and Triumph Is Truly Inspirational</h3>
                        <p class="text-secondary">“I was born and brought up in the small town of Jaunpur, Uttar Pradesh. We stayed in a slum area & my family always struggled to fulfill basic needs like food, clothing and shelter. My father, who is a Gold Medalist in Math, worked relentlessly to provide me with the right kind of education. He is my role model – I have seen him going from being a peon in the Public Works Department to becoming the Bank Manager of Gramin Bank today” he says with pride reflecting in his eyes.
                        </p>
                        <a href="https://www.thebetterindia.com/27045/jai-mishras-journey-trials-triumph-truly-inspirational/"  target="_blank"class="h4">
                            <i class="fa fa-arrow-circle-right"> </i>
                        </a>
                    </div>
                       
            </div>
            </div>
      </div>
    )
  }
}
export default Cards;