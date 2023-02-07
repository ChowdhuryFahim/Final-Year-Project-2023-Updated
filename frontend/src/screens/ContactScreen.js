import { React, useState} from 'react';
import {Row, Col} from 'react-bootstrap'

function Contact()
{
    const [contact, setContact] = useState(
        {
            f_name: "",
            l_name: "",
            a_code: "",
            tel_p: "",
            email: "",
            need_contact: "",
            c_type: "",
            message: "",

        }
    )
    

    return(
        <div className="container">
                <h1>Contact Screen</h1>
           <Row>
                <Col md={6} className="bg-dark p-4 text-white">
                    <h5 className="text-white">Our Address</h5>
                    <address>
                        121, Zindabazar<br></br>
                        Sylhet, Sylhet<br></br>
                        Bangladesh<br></br>
                        <i class="fa fa-phone"></i>: +852 1234 5678<br></br>
                        <i class="fa fa-fax"></i>: +852 8765 4321<br></br>
                        <i class="fa fa-envelope"></i>:
                        <a href="mailto:mac@gmail.com" className="text-white">mac@gmail.com</a>
                    </address>
                    <div class="btn-group" role="group">
                        <a role="button" class="btn btn-warning" href="tel:+85212345678"><i class="fa fa-phone"></i> Call</a>
                        <a role="button" class="btn btn-info"><i class="fa fa-skype"></i> Skype</a>
                        <a role="button" class="btn btn-success" href="mailto:mac@gmail.com"><i class="fa fa-envelope-o"></i> Email</a>
                    </div>
                </Col>
                
               
               
           </Row>
           <hr></hr>
          
        
        </div>
    )
}

export default Contact;