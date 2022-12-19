import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import queryString from 'querystring';
import styled from 'styled-components';

const Home = () => {
	const [quizzes, setQuizzes] = useState([])
	useEffect(() => {
		async function fetchQuizes() {
			const params = queryString.parse(window.location.search.replace(/^\?/, ''))
			localStorage.token = params.token
			const response = await axios('http://localhost:3000/quizzes', {
        headers: {
          token: localStorage.token
        }
      })
	  		setQuizzes(response.data)
		}
		fetchQuizes()
	}, []);
	return (
		<HomeDiv>
			<QuizH2>Take a Quiz!</QuizH2>
			<HomeH3>Click on any quiz listed below to take one.</HomeH3>
			<ul>
				{quizzes.map(q => (
					
					<QuizLi>
						<Link to={'/quizzes/' + q.id}>{q.name}</Link>
					</QuizLi>
				))}
			</ul>
		</HomeDiv>
	)
}

export default Home

const HomeDiv = styled.div `
	padding: 1rem;
`

const QuizH2 = styled.h2 `
	font-size: 4rem;
	margin: 0 0 0rem 0;
	color: rgba(72, 64, 65, 1);
`
const QuizLi = styled.li `
	font-size: 2.25rem;
	color: rgba(72, 64, 65, 1);
	margin: 2rem 0 0 0;

	&:hover {
		color: rgba(193, 11, 111, 1);
		font-weight: 700;
	}
`

const HomeH3 = styled.h3 `
	font-size: 2.5rem;
	margin: 0 0 3rem 0;
	color: rgba(32, 131, 35, 1);
`