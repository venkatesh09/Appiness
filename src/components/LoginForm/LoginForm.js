import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../redux/reducer';
import { Route, BrowserRouter } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Dashboard from '../Dashboard';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const placeholder = {
  color: '#f50057 !important',
};

const styles = {
  fields:{
      position: 'absolute', 
      top: '50%', 
      left: '50%', 
      transform: 'translate(-50%, -50%)', 
      flexDirection: 'column',
    },
  fields1:{
      position: 'absolute', 
      top: '60%', 
      left: '50%', 
      transform: 'translate(-50%, -50%)', 
      flexDirection: 'column',
    },
  button:{
    position: 'absolute', 
    top: '70%', 
    left: '50%', 
    transform: 'translate(-50%, -50%)', 
    flexDirection: 'column',
    },
    title:{
      position: 'absolute', 
      top: '40%', 
      left: '50%', 
      transform: 'translate(-50%, -50%)', 
      flexDirection: 'column',
      color: '#de9a1a',
      },
    button1:{
      position: 'absolute', 
      top: '60%', 
      flexDirection: 'column',
      color: '#de9a1a',
      },
    }

const theme = createMuiTheme({
  overrides: {
    MuiInput: {
      underline: {
        '&:before': {
          borderBottom: '1px solid #ffffff',
        },
        '&:after': {
          borderBottom: '2px solid #f50057',
        },
        '&:hover:not(:focus):before': {
          borderBottom: '2px solid #f50057 !important',
        },
        '&:active': {
          borderBottom: '1px solid #f50057',
        },
      },
      input: {
        color: '#ffffff !important',
        '&::-webkit-input-placeholder': placeholder,
        '&::-moz-placeholder': placeholder, // Firefox 19+
        '&:-ms-input-placeholder': placeholder, // IE 11
        '&::-ms-input-placeholder': placeholder, // Edge
      },
    },
    MuiFormLabel: {
      root: {
        color: 'rgba(255, 255, 255, 0.54) !important',
      },
    },
  },
});

class LoginForm extends Component {
    constructor(props) {
      super(props);
      this.state = {};
      this.onSubmit = this.onSubmit.bind(this);
    }


    handleChange = (event) => {
      const { name, value } = event.target;
      this.setState({
          [name]: value,
      });
    }
  
    render() {
      let {email, password} = this.state;
      let {isLoginPending, isLoginSuccess, loginError} = this.props;
      if (isLoginSuccess) {
        return (
              <BrowserRouter>
                <div>
                  <Route path="/" component={Dashboard} />
                </div>
              </BrowserRouter>

        );
      }
      return (
    <MuiThemeProvider theme={theme}>
    <div>
        <form name="loginForm" onSubmit={this.onSubmit}>
        <div className="form-group-collection" style={{ width: '100vw', height: '100vh', backgroundColor: '#000000' }}>
            <h1 style={styles.title}> Login Form </h1>
            <div style={styles.fields} >
              <TextField
                  name="email"
                  label="Email"
                  type="email"
                  value={email}
                  onChange={this.handleChange}
                  fullWidth
                  style={{ marginTop: '10px' }}
              />
            </div>
  
            <div style={styles.fields1}>
              <TextField
                  name="password"
                  label="Password"
                  type="password"
                  value={password}
                  onChange={this.handleChange}
                  fullWidth
                  style={{ marginTop: '10px' }}
              />
            </div>
            <div style={styles.button}>
          <Button 
            color="secondary"
            variant="contained"
            fullWidth
            type="submit" 
            value="Login"
            // style={{ marginTop: '10px' }}
            >
            Submit
            </Button>
            { isLoginPending && <div style = {styles.button1}>Please wait...</div> }
          { isLoginSuccess && <div style = {styles.button1}>Success.</div> }
          { loginError && <div style = {styles.button1}>{loginError.message}</div> }
          </div>
          </div>
        </form>
        </div>

        </MuiThemeProvider>
      );
    }
  
    onSubmit(e) {
      e.preventDefault();
      let { email, password } = this.state;
      this.props.login(email, password);
      this.setState({
        email: '',
        password: ''
      });
    }
  }
  
  const mapStateToProps = (state) => {
    return {
      isLoginPending: state.isLoginPending,
      isLoginSuccess: state.isLoginSuccess,
      loginError: state.loginError
    };
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      login: (email, password) => dispatch(login(email, password))
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
  