import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import styled from 'styled-components';

const Quiz = () => {
	const [quiz, setQuiz] = useState({Questions: []})
	const params = useParams()
	useEffect(() => {
		async function fetchQuiz() {
			const q = await axios(`http://localhost:3000/quizzes/${params.id}`, {
				headers: {
					token: localStorage.token
				}
			})
	  		setQuiz(q.data)
		}
		fetchQuiz()
	}, []);

	return (
		<form id="quiz">
			<QuizName>{quiz.name} Quiz</QuizName>
			<ul>
				{quiz.Questions.map(q => (
					<li>
						<Question>{q.question}</Question>
						<ul>
							<Choices>
								{q.Choices.map(c => (
									<div>
										<ChoiceInputs type="radio" name={'question_' + q.id} required />
										<ChoiceLabel for={'question_' + q.id}>{c.label}</ChoiceLabel>
										<p>{console.log('question' + q.id)}</p>
									</div>
								))}
							</Choices>
						</ul>
					</li>
				))}
			</ul>
			<Submit type="submit">Submit Quiz</Submit>
		</form>
	)
}

export default Quiz

const QuizName = styled.h1 `
	font-size: 3.5rem;
	margin: 4rem 0 2rem 0;
	color: rgba(72, 64, 65, 1);
`
const Question = styled.h3 `
	font-size: 2.5rem;
	margin: .5rem 0 .5rem 0;
`
const Choices = styled.li `
	font-size: 1.75rem;
	margin: 1rem 0 1rem 1.25rem ;
`

const ChoiceInputs = styled.input `
	margin: 0 0 .5rem 0;
}

`
const ChoiceLabel = styled.label `
	color: rgba(193, 11, 111, 1);
	font-weight: 700;
	margin: 0 0 0 1rem;
`

const Submit = styled.button `
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
