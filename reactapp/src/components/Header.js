import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <header>
            <H1>Quiz-Master 3000</H1>
        </header>
 
    )
}
export default Header

const H1 = styled.h1 `
    font-size: 5rem;
    font-family: 'Roboto Slab', 'Roboto', san-serif;
    font-weight: 500;
    text-align: center;
    color: rgba(67, 67, 113, 1);
    margin-bottom: .25rem;
`
