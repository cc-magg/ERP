import React from 'react';
import { Form, FormGroup, Col, ControlLabel, FormControl, Checkbox, Button } from 'react-bootstrap';

const FormLogin = props => {
    let color = (props.baseColor)? props.baseColor : '';
    return (
        <Form horizontal onSubmit={props.handleSubmit}>
            {(color != '')&& <h4 style={{color: color}} className="title">Member Login</h4>}
            <FormGroup controlId="formHorizontalEmail">
                {/*<Col componentClass={ControlLabel} sm={12}>
                UserName
                </Col>*/}
                <Col sm={12}>
                <FormControl type="text" placeholder="UserName" name="userName" inputRef={props.setRef} />
                </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
                {/*<Col componentClass={ControlLabel} sm={2}>
                Password
                </Col>*/}
                <Col sm={12}>
                <FormControl type="password" placeholder="Password" name="password" inputRef={props.setRef} />
                </Col>
            </FormGroup>

            <FormGroup>
                <Col sm={12}>
                {
                    (color != '')? <Button style={{background: color, color: '#FFFFFF', fontSize: 15}} bsSize="lg" block type="submit">LOGIN</Button>
                    :
                    <Button style={{fontSize: 15}} bsStyle="primary" bsSize="lg" block type="submit">LOGIN</Button>
                }
                </Col>
            </FormGroup>
            <style jsx>{`
                .title {
                    text-align: center;
                    font-weight: bold;
                }`
            }</style>
        </Form>
    )
}

export default FormLogin;