import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';
import { Button, FormFeedback, Form, FormGroup, Label, Input } from 'reactstrap';
import styles from './Contact.module.scss';

class ContactForm extends Component {
  state = {
    sent: false,
    name: '',
    email: '',
    subject: '',
    message: '',
    errorMessage: null,
  }
  handleSubmit(e) {
    e.preventDefault()
    const { name, email, subject, message } = this.state
    let templateParams = {
      from_name: name,
      from_email: email,
      to_name: '<YOUR_EMAIL_ID>',
      subject: subject,
      message: message,
    }
    emailjs.send(
      'Film Music Site',
      'template_0soe06q',
      templateParams,
      'user_a9AZgmEP5clP4eqlkWOLo'
    )
      .then(response => {
        this.setState({sent: true});
      }, error => {
        this.setState({sent: false, errorMessage: error});
      });
    this.resetForm()
  }
  resetForm() {
    if (!this.state.sent && !this.state.errorMessage) {
      this.setState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }
  }
  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }

  render() {
    return (
      <div className={styles.contactForm}>
        <div className={styles.contactFormContainer}>
          <h3>Get in Touch</h3>
          <Form onSubmit={this.handleSubmit.bind(this)}>
            <FormGroup controlId="formBasicEmail">
              <Label>Email address</Label>
              <Input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange.bind(this, 'email')}
                placeholder="Enter email"
              />
            </FormGroup>
            <FormGroup controlId="formBasicName">
              <Label>Name</Label>
              <Input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange.bind(this, 'name')}
                placeholder="Name"
              />
            </FormGroup>
            <FormGroup controlId="formBasicSubject">
              <Label>Subject</Label>
              <Input
                type="text"
                name="subject"
                value={this.state.subject}
                onChange={this.handleChange.bind(this, 'subject')}
                placeholder="Subject"
              />
            </FormGroup>
            <FormGroup controlId="formBasicMessage">
              <Label>Message</Label>
              <Input
                type="textarea"
                name="message"
                value={this.state.message}
                onChange={this.handleChange.bind(this, 'message')}
              />
            </FormGroup>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    )
  }
}
export default ContactForm
