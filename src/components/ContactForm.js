import React from "react"
import * as emailjs from 'emailjs-com'
import '../styles/contact.css'

const templateParams = {
  from_name: 'James',
  text: 'Check this out!',
};



class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      version: '2.0.0',
      flashText: '',
      warningText: '',
      email: '',
      username: '',
      message: '',
      subbmitted: false,

      touched: {
        email: false,
        username: false,
        message: false,
      },

      
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    validate(username, email, message) {
      return {
        username: username.length === 0,
        email: email.length === 0,
        message: message.length === 0,
      }

    }

    canBeSubmitted() {
      const errors = this.validate(this.state.username, this.state.email, this.state.message);
      console.log(errors)
      const isDisabled = Object.keys(errors).some(x => errors[x]);
      console.log(isDisabled)
      return !isDisabled

    }

  // computed property name syntax to update the state key 
  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    // if (target.checkValidity) {
    //   console.log(name + ' is ' + event.target.checkValidity());
    // }

    this.setState({
      [name]: value,
      flashText: '',
      warningText: ''
    });
  }

  handleSubmit(event) {
    if (!this.canBeSubmitted()) {
      this.setState({
        warningText: 'All fields are required.'
      })
      event.preventDefault();
      return;
    }

    this.setState({
      flashText: 'Thanks for your feedback.',
      username: '',
      email: '',
      message: '',
      subbmitted: true
    })

    const templateParams = {
      from_name: this.state.username,
      text: this.state.message,
      reply_to: this.state.email,
      version: this.state.version
    };
    emailjs.init('user_Mu4HD0jhEqq21ZdULpCsB')
    emailjs.send('mailgun', 'template_XQMafMNT', templateParams)
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
      }, function (err) {
        console.log('FAILED...', err);
      });
    //console.log(this.state.flashText)
    event.preventDefault();
  }

  render() {
    // const errors = this.validate(this.state.email);
    // const isDisabled = Object.keys(errors).some(x => errors[x]);
    
    // const shouldMarkError = (field) => {
    //   const hasError = errors[field];
    //   const shouldShow = this.state.touched[field];
      
    //   return hasError ? shouldShow : true;
    // };
    let emptyform = (<span>
      <form style={{display:[this.state.subbmitted ? 'None' : 'block']}}>
        <fieldset>
          <legend>Contact Us:</legend>

          <label >Name:</label>
          <input type="text" name="username" onChange={this.handleChange} value={this.state.username}
          placeholder="Enter your name" required />
          <br />
          {/* <label style={labelStyle}>Company/Organization:</label><input type="text" name="org" /><br /> */}
          <label >E-mail:</label>
          <input type="text" name="email" type='email' onChange={this.handleChange} value={this.state.email}
          placeholder="Enter your email" required />
          <br />
          {/* <label style={labelStyle}>Address:</label><input type="text" name="address" /><br />
          <label style={labelStyle}>City:</label><input type="text" name="city" /><br />
          <label style={labelStyle}>State:</label><input type="text" name="state" /><br />
          <label style={labelStyle}>Country:</label><input type="text" name="country" /><br />
          <label style={labelStyle}>Phone:</label><input type="text" name="phone" /><br /> */}
          <label>Version:</label>
          <select name="version" value={this.state.version} onChange={this.handleChange} required>
            <option value="2.0">2.0</option>
          </select> <br />
          <p style={{ verticalAlign: `top` }}>
            <label style={{ verticalAlign: `bottom` }}>Comments:</label>
            <textarea name="message" rows='5' cols='30' value={this.state.message}
              onChange={this.handleChange} required>
            </textarea>
          </p>

          <div>
            <input type="submit" onClick={this.handleSubmit} style={{ marginLeft: `45%`, background: `lightgreen` }} />
          </div>

          {/* <p className='centerP'>{this.state.flashText}</p> */}
          <p className='centerP warning'>{this.state.warningText}</p>

        </fieldset>
      </form>
    </span>);
    return (
      // <span>
      //   <form>
      //     <fieldset>
      //       <legend>Contact Us:</legend>

      //       <label >Name:</label>
      //       <input type="text" name="username" onChange={this.handleChange} value={this.state.username}
      //       placeholder="Enter your name" required />
      //       <br />
      //       {/* <label style={labelStyle}>Company/Organization:</label><input type="text" name="org" /><br /> */}
      //       <label >E-mail:</label>
      //       <input type="text" name="email" type='email' onChange={this.handleChange} value={this.state.email}
      //       placeholder="Enter your email" required />
      //       <br />
      //       {/* <label style={labelStyle}>Address:</label><input type="text" name="address" /><br />
      //       <label style={labelStyle}>City:</label><input type="text" name="city" /><br />
      //       <label style={labelStyle}>State:</label><input type="text" name="state" /><br />
      //       <label style={labelStyle}>Country:</label><input type="text" name="country" /><br />
      //       <label style={labelStyle}>Phone:</label><input type="text" name="phone" /><br /> */}
      //       <label>Version:</label>
      //       <select name="version" value={this.state.version} onChange={this.handleChange} required>
      //         <option value="2.0">2.0</option>
      //       </select> <br />
      //       <p style={{ verticalAlign: `top` }}>
      //         <label style={{ verticalAlign: `bottom` }}>Comments:</label>
      //         <textarea name="message" rows='5' cols='30' value={this.state.message}
      //           onChange={this.handleChange} required>
      //         </textarea>
      //       </p>

      //       <div>
      //         <input type="submit" onClick={this.handleSubmit} style={{ marginLeft: `45%` }} />
      //       </div>



      //       <p className='centerP'>{this.state.flashText}</p>
      //       <p className='centerP warning'>{this.state.warningText}</p>

      //     </fieldset>
      //   </form>
      // </span>
      <div>
        <p style={{display:[this.state.subbmitted ? 'none' : 'block']}}>Please fill out the form below to provide feedback or suggestions about FREECORP™.</p>
          {emptyform}
        <p className='centerP' style={{display:[this.state.subbmitted ? 'block' : 'none']}} >
        {this.state.flashText}
        </p>
      </div>
      
      
    )
  }
}

export default ContactForm