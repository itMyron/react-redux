import React,{ Component } from "react";
import classnames from "classnames";    //管理class插件
import { withRouter } from "react-router-dom";  //使用高阶组件处理路由
class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "" ,
            email:'' ,
            password:'' ,
            passwordConfirmation:'' ,
            errors:{} , //存放错误信息
            isLoading : false ,     //防止重复提交按钮  
        };
    }
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    onSubmit = e =>{
        e.preventDefault();
        this.setState({ 
            errors: {} ,
            isLoading: true 
        })
        this.props.userSignupRequest(this.state);
        this.props.userSignupRequest(this.state).then(
            ()=>{
                this.props.addFlashMessage({
                    type: "success",
                    text: "You signed up successfully. welcome"
                })
                this.props.history.push('/');
            },
            //status 不为2**时，一般都会进到这个函数体里
            ({ response })=>{ this.setState({ 
                errors:response.data,
                isLoading : false
            }) }
        ) 
    }
    render() {
        const { errors } = this.state;
        return (
        <form onSubmit={this.onSubmit}>
            <h1>Sign Up</h1>
            <div className="form-group">
                <label className="control-label">UserName</label>
                <input
                    type="text"
                    name="username"
                    className={classnames('form-control', { 'is-invalid': errors.username })}
                    value={this.state.username}
                    onChange={this.onChange}
                />
                {errors.username && <span className='form-text text-muted'>{errors.username}</span>}
            </div>
            <div className="form-group">
                <label className="control-label">Email</label>
                <input
                    type="email"
                    name="email"
                    className = {classnames('form-control', { 'is-invalid': errors.email })}
                    value={this.state.email}
                    onChange={this.onChange}
                />
                {errors.email && <span className='form-text text-muted'>{errors.email}</span>}
            </div>
            <div className="form-group">
                <label className="control-label">Password</label>
                <input
                    type="password"
                    name="password"
                    className={classnames('form-control', { 'is-invalid': errors.password })}
                    value={this.state.password}
                    onChange={this.onChange}
                />
                {errors.password && <span className='form-text text-muted'>{errors.password}</span>}
            </div>
            <div className="form-group">
                <label className="control-label">passwordConfirmation</label>
                <input
                    type="Password"
                    name="passwordConfirmation"
                    className={classnames('form-control', { 'is-invalid': errors.passwordConfirmation })}
                    value={this.state.passwordConfirmation}
                    onChange={this.onChange}
                />
                {errors.passwordConfirmation && <span className='form-text text-muted'>{errors.passwordConfirmation}</span>}
            </div>
            <div className="form-group">
                <button className="btn btn-primary btn-lg">Sign Up</button>
            </div>
        </form>
        );
    }
}
export default withRouter(SignupForm);