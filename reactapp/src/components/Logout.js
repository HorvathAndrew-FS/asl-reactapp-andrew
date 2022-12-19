import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import styled from 'styled-components';


class Logout extends Component {
    state = { navigate: false };
    logout = () => {
         localStorage.clear("token");
         this.setState({ navigate: true });
    };

render() {
    const { navigate } = this.state;
    if ( navigate ) {
        
        return <Navigate to="/" push={true} />;
    }
        return <LogoutLi onClick={this.logout}>Logout</LogoutLi>;
}
}

export default Logout;

const LogoutLi = styled.li `
		background: rgba(67, 67, 113, 1);
		color: rgba(112, 238, 156, 1);
		margin: 1rem;
		border: 2px solid rgba(32, 131, 35, 1);
		border-radius: 5px;
		padding: .5rem 1rem;

		&:hover {
			background: none;
			color: rgba(67, 67, 113, 1);
		}
        `