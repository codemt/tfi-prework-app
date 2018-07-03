import React, { Component } from 'react';
import fire from '../config/fire';
import { OutgoingMessage } from 'http';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../stylesheets/signupform.css';
import { withAlert } from 'react-alert';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
 class SignupForm extends Component {

    constructor(props){
        super(props);
        
        this.state = {

                name : '',
                interest: '',
                email:'',
                phone:''

        }
      //  this.handleChange = this.handleChange.bind(this);
    }
     submitForm(e){
        e.preventDefault();
        console.log(123);
        const name = e.target.name.value;
        const interest = e.target.interest.value;
        const email = e.target.email.value;
        const phone = e.target.phone.value;
        const message = e.target.messege.value;
        console.log(name);
        console.log(interest);
        console.log(email);
        console.log(phone);
        console.log(message);
       
        if(name.length == 0 || email.length == 0 || phone.length == 0 || message.length == 0 )
        {
           this.props.alert.show('Please fill the details');
        }
        else {

        
        this.saveMessage(name,interest,email,phone,message);
        this.sendEmail(name,interest,email,phone,message);
        this.props.alert.show('Thank You , we will contact you');
        
      
        }
        
        
       // console.log(this.state.name);
    }
    async sendEmail(name,interest,email,phone,message){
          

          const form = await axios.post('/api/form',{
            name,
            interest,
            email,
            phone,
            message
        })

    }
     saveMessage(name,interest,email,phone,message){

      var messageRef = fire.database().ref('message');
        var newMessageRef = messageRef.push();
        newMessageRef.set({
            name : name,
            interest:interest,
            email : email,
            phone:phone,
            message:message
        })
    }
  render() {
    return (
      <div style={{backgroundImage: `url(https://www.dasra.org/sites/default/files/styles/org_banner/public/TFI_Banner.jpg?itok=QMvxXnXq)`}}>
        {/* TODO : change the color of navbar and navbar items to exactly as teach for india. */}
          <div className="container">
    <div className="wrapper animated bounceInLeft">
      <div className="company-info">
        <h3>Fill up this form to become a volunteer , and we will get back to you. </h3>
        <ul>
          <li><i className="fa fa-road"></i> 44 Something st</li>
          <li><i className="fa fa-phone"></i> (555) 555-5555</li>
          <li><i className="fa fa-envelope"></i> test@acme.test</li>
        </ul>
      </div>
      <div className="contact">
        <h3>Email Us</h3>
        <form onSubmit={this.submitForm.bind(this)}>
          <p>
            <label>Name</label>
            <input type="text" name="name"   ref="name"    />
          </p>
          <p>
            <label>Email Address</label>
            <input type="email" name="email"  ref="email"  />
          </p>
          <p>
            <label htmlFor="exampleSelect1">Select an Opportunity</label>
            <select className="form-control" id="exampleSelect1" name="interest">
              <option>Share your skills in art/ dance/ theatre to bring arts into a child’s learning</option>
              <option>Tutor or mentor a child once a week on Sundays</option>
              <option>Conduct a student/teacher exchange between a high-income school and a low-income school</option>
              <option>Pay for a counselor in a school, or a teacher for children with special needs</option>
              <option>Gift board games or educational aids to a classroom</option>
              <option>Donate 5 percent of your salary each month to education </option>
              <option>Launch a social media campaign around educational equity </option>
              <option> Thank someone who has been a teacher to you </option>
              <option> Be a Role Model for Teacher around you </option> 
            </select>
          </p>
          <p>
            <label>Phone Number</label>
            <input type="text" name="phone" ref="phone"   />
          </p>
          <p className="full">
            <label>why you want to volunteer , any previous volunteering experience please mention details. </label>
            <textarea name="message" rows="5" name="messege"></textarea>
          </p>
          <p className="full">
            <button type="submit">Submit</button>
          </p>
        </form>
      </div>
    </div>
  </div>
      </div>
    )
  }
}
export default withAlert(SignupForm);