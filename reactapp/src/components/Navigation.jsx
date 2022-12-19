import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import OutButton from './Logout';
class Navigation extends React.Component
{
	render() {
		return (
			<NavDiv>
				<NavUl>
					<li><Link to="/">Home</Link></li>
					{/* {this.props.isLoggedIn && <li><Link to="/logout">Logout</Link></li>} */}
					<OutButton />
				</NavUl>
			</NavDiv>
		);
	}
}

export default Navigation;

const NavDiv = styled.div `
	display: flex;
	justify-content: center;
	width: 20%;
	margin: 0.5rem 0 0 0;
	
`
const NavUl = styled.ul `
	display: flex;
	font-weight: 600;
	font-size: 2rem;
	
	li {
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
	}

`