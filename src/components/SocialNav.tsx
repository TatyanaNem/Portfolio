import React from 'react';
import Icon from './common/Icon';
import {StyledNav} from './common/Nav.styled';

export const SocialNav = () => {
    return (
        <StyledNav>
            <ul>
                <li>
                    <a href="https://github.com/TatyanaNem">
                        <Icon iconId={'git'} viewBox={'0 0 30 35'}/>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/tatyana-nemchina-50b113256/">
                        <Icon iconId={'linkedIn'} viewBox={'0 0 30 35'}/>
                    </a>
                </li>
                <li>
                    <a href="https://vk.com/angorka23">
                        <Icon iconId={'vk'} viewBox={'0 0 42 27'} />
                    </a>
                </li>
                <li>
                    <a href="https://t.me/TanyaNemchina">
                        <Icon iconId={'telegram'} viewBox={'0 0 20 20'}/>
                    </a>
                </li>
                <li>
                    <a href="https://wa.me/79811068473">
                        <Icon iconId={'whatsapp'} viewBox={'0 0 20 20'}/>
                    </a>
                </li>
            </ul>
        </StyledNav>
    );
};
