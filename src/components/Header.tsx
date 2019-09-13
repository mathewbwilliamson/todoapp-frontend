import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from 'styled-components';

const HeaderStyles = styled.div`
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5%;
    margin-bottom: 5%;

    ul {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    li {
        list-style-type: none;
    }
`

const Header: React.FC = () => {
    return (
        <HeaderStyles>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/todos">List Todos</Link>
                </li>
                <li>
                    <Link to="/events">List Events</Link>
                </li>
                <li>
                    <Link to="/contacts">List Contacts</Link>
                </li>
            </ul>
        </HeaderStyles>
    )
}

export default Header