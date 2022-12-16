import React from 'react';
import Header from './components/Header';
import styled from 'styled-components';
class Login extends React.Component
{
	render() {
		return (
			<LoginDiv>
				<Header />
				<LoginButton href="https://github.com/login/oauth/authorize?client_id=8c96c7d550e48835b6d5">Login With Github</LoginButton>
			</LoginDiv>
		)
	}
}

export default Login

const LoginDiv = styled.div `
	max-width: 50%;
	margin: 0rem auto;
	position: relative;
`
const LoginButton = styled.a `
	margin: 0;
  	position: absolute;
  	top: 110%;
  	left: 50%;
  	transform: translate(-50%, 0%);
	text-align: center;
	padding: 1rem;
	font-size: 2rem;
	color: rgba(198, 238, 250, 1);
	width: 200px;
	background: rgba(8, 76, 97, 1);
	border: 1px solid rgba(8, 76, 97, 1);
	border-radius: 5px;

	&:hover {
		background: rgba(193, 11, 111, 1);
	}
`

// rgba(193, 11, 111, 1)