import React,{ Component } from "react";
import { connect } from "react-redux";
import SignupForm from './SignupForm' ;

//传过来action
import { userSignupRequest } from "../../actions/signupActions";
import { addFlashMessage } from "../../actions/flashMessages";

class SignupPage extends Component{
    render(){
        return(
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <SignupForm addFlashMessage={this.props.addFlashMessage }  userSignupRequest = {this.props.userSignupRequest} />
                </div>
                <div className="col-md-3"></div>
          </div >
        );
    }
}
export default connect(null, { addFlashMessage ,userSignupRequest })(SignupPage);