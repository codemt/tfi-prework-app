import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import SlideCards from './carousel';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
 class VolunteerCards extends Component {
  render() {
    return (
        <div>
         <div class="container">
         <div class="row">
            <div class="col-sm-4">
                <Card>
                    <CardImg top width="100%" src="http://weusemath.org/wp-content/uploads/2013/05/math_teacher1-640x295.jpg" alt="Card image cap" />
                    <CardBody>
                    <CardTitle>Become a Maths Teacher</CardTitle>
                    <CardText>Love Math , teach and inspire students all over india. Help Overcome Math Problems</CardText>
                    {/* <Button>Button</Button> */}
                    </CardBody>
                </Card>
            </div>
            <div class="col-sm-4">
                 <Card>
                    <CardImg top width="100%" src="https://www.gooverseas.com/sites/default/files/styles/1014x/public/volunteer/sep-24-2015/115285-volunteers-in-asia.jpg?itok=1mNIMaPC" alt="Card image cap" />
                    <CardBody>
                    <CardTitle>Become a Fellow Volunteer</CardTitle>
                    <CardText>help us with our Activities in Teach for India , and help solve the problem of under employment in the nation.</CardText>
                    {/* <Button>Button</Button> */}
                    </CardBody>
                </Card> 
            </div>
            <div class="col-sm-4">
                <Card>
                    <CardImg top width="100%" src="https://www.commonwealthfund.org/sites/default/files/styles/cmwf_content_hero/public/Harkness%20Fellowship.jpg?itok=XZIsA3ku" alt="Card image cap" />
                    <CardBody>
                    <CardTitle> Register for Fellowship </CardTitle>
                    <CardText>Become a Fellow Member and contribute to the growth of Teach for india.</CardText>
                    {/* <Button>Button</Button> */}
                    </CardBody>
                </Card> 
            </div>
        </div>
                
         </div>
    </div>
    )
  }
}
export default VolunteerCards;