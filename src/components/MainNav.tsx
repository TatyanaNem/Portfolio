import React from 'react';
import { StyledNav } from './common/Nav.styled';

export const MainNav = () => {
    return (
        <StyledNav>
            <ul>
                <li>
                    <a href="home">Home</a>
                </li>
                <li>
                    <a href="about">About</a>
                </li>
                <li>
                    <a href="tech">Tech stack</a>
                </li>
                <li>
                    <a href="projects">Projects</a>
                </li>
                <li>
                    <a href="contacts">Contacts</a>
                </li>
            </ul>
        </StyledNav>
    );
};
