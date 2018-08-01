import React,{ Component } from "react";
import { connect } from "react-redux";
import FlashMessage from './FlashMessage'
import { deleteFlashMessage } from "../../actions/flashMessages";

class FlashMessagesList extends Component {

    render() {
        const messages = this.props.messages.map(message =>{
            return <FlashMessage key={message.id} deleteFlashMessage={this.props.deleteFlashMessage} message={message} />;
        })
        return (
            <div className="container">
                {messages}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log("组件：",state)
    return {
        messages: state.flashMessages
    };
};

export default connect(mapStateToProps, { deleteFlashMessage })(FlashMessagesList);