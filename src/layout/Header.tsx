import React from 'react';
import styled from 'styled-components';
import {MainNav} from '../components/MainNav';
import {SocialNav} from '../components/SocialNav';

export const Header = () => {
    return (
        <StyledHeader>
            <a href="#">
                <img src="#" alt="logo"/>
            </a>
            <MainNav />
            <SocialNav />
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1209px;
  margin: 0 auto;
  padding: 49px 0;
  background-color: lightgreen;
`;
