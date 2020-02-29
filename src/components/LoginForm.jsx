import React from "react";
import "antd/dist/antd.css";
import "../../css/styles.css"
import { Form, Input, Button } from "antd";
export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      methodSelected: "Sign Up",
      hoverSingUp: false,
      hoverLogIn: false
    };
  }

  handleSignMethodClick = method => {
    this.setState({
      methodSelected: method
    });
  };

  toggleHover = method => {
    switch (method) {
      case "Sign Up":
        this.setState({ hoverSingUp: !this.state.hoverSingUp });
        break;
      case "Log In":
        this.setState({ hoverLogIn: !this.state.hoverLogIn });
        break;
    }
  };

  validateMessages = {
    required: "This field is required!",
    types: {
      email: "Not a validate email!"
    }
  };

  inputStyle = {
    backgroundColor: "inherit",
    color: "white"
  };

  renderLogInForm() { 
    return (
      <div>
        <h1>Welcome Back!</h1>
        <Form validateMessages={this.validateMessages}>
          <Form.Item
            name="login-email"
            key="login-email"
            rules={[
              {
                required: true,
                type: "email"
              }
            ]}
          >
            <Input
              placeholder="Email Address*"
              style={{ ...this.inputStyle, ...{ width: "85%" } }}
            />
          </Form.Item>
          <Form.Item
            name="login-password"
            key="login-password"
            rules={[
              {
                required: true
              }
            ]}
          >
            <Input
              placeholder="Password*"
              style={{ ...this.inputStyle, ...{ width: "85%" } }}
            />
          </Form.Item>
          <div className="pass-recover">
            <a>Forgot password?</a>
          </div>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{
                width: "85%",
                backgroundColor: "#34ae89",
                outline: "none",
                border: "none"
              }}
            >
              LOG IN
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
  renderSignUpForm() {
    return (
      <div>
        <h1>Sign Up for free</h1>
        <Form validateMessages={this.validateMessages}>
          <Form.Item
            className="name-form"
            name="first_name"
            key="first_name"
            style={{ width: "40%", marginRight: "5%" }}
            rules={[
              {
                required: true
              }
            ]}
          >
            <Input placeholder="First Name*" style={this.inputStyle} />
          </Form.Item>
          <Form.Item
            className="name-form"
            name="last_name"
            key="last_name"
            style={{ width: "40%" }}
            rules={[
              {
                required: true
              }
            ]}
          >
            <Input placeholder="Last Name*" style={this.inputStyle} />
          </Form.Item>
          <Form.Item
            name="Email"
            key="email"
            rules={[
              {
                required: true,
                type: "email"
              }
            ]}
          >
            <Input
              placeholder="Email Address*"
              style={{ ...this.inputStyle, ...{ width: "85%" } }}
            />
          </Form.Item>
          <Form.Item
            name="password"
            key="password"
            rules={[
              {
                required: true
              }
            ]}
          >
            <Input
              placeholder="Set a Password*"
              style={{ ...this.inputStyle, ...{ width: "85%" } }}
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{
                width: "85%",
                backgroundColor: "#34ae89",
                outline: "none",
                border: "none"
              }}
            >
              GET STARTED
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
  render() {
    return (
      <div className="form-container">
        <div className="sign-buttons-wrapper">
          <button
            className="sign-buttons"
            style={{
              backgroundColor:
                this.state.methodSelected === "Sign Up" ||
                this.state.hoverSingUp
                  ? "#34ae89"
                  : "#45525b"
            }}
            onMouseEnter={() => this.toggleHover("Sign Up")}
            onMouseLeave={() => this.toggleHover("Sign Up")}
            onClick={() => this.handleSignMethodClick("Sign Up")}
          >
            Sign Up
          </button>
          <button
            className="sign-buttons"
            style={{
              backgroundColor:
                this.state.methodSelected === "Log In" || this.state.hoverLogIn
                  ? "#34ae89"
                  : "#45525b"
            }}
            onMouseEnter={() => this.toggleHover("Log In")}
            onMouseLeave={() => this.toggleHover("Log In")}
            onClick={() => this.handleSignMethodClick("Log In")}
          >
            Log In
          </button>
        </div>
        {this.state.methodSelected === "Sign Up"
          ? this.renderSignUpForm()
          : this.renderLogInForm()}
      </div>
    );
  }
}
