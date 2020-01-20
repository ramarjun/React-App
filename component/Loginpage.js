import React  from "react";
import Button  from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


class Loginpage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            email:"",
            password:""
        }
    }
    validateForm = e => {
        e.preventDefault();
        return this.state.email.length > 0 && this.state.password.length > 0;
        
    };
    handelChange = e => {
        this.setState({
            [e.target.id]:e.target.value
        });
    }
    handleSubmit = e => e.preventDefault();
    render(){
        return(
            <div className="Login login-wrapper col-md-12">
                <div className="col-md-6 login-main">
                    <Form autoComplete="false" onSubmit={this.handelSubmit}>
                        <Form.Group controlId="email" bssize="large">
                            <Form.Label>Email</Form.Label>
                            <Form.Control autoFocus type="email" value={this.state.email} onChange={this.handelChange}/>
                        </Form.Group>
                        <Form.Group controlId="password" bssize="large">
                            <Form.Label>Password</Form.Label>
                            <Form.Control autoFocus type="password" onChange={this.handelChange} value={this.state.password}/>
                        </Form.Group>
                        <Button block bssize="large" disabled={!this.validateForm} type="submit">
                            Login
                        </Button>
                    </Form>
                </div>
            </div>
        )
    }
}

export default Loginpage;
