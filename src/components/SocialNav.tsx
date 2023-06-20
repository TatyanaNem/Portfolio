import React from 'react';
import Icon from './common/Icon';
import {StyledNav} from './common/Nav.styled';

export const SocialNav = () => {
    return (
        <StyledNav>
            <ul>
                <li>
                    <a href="https://github.com/TatyanaNem">
                        <span className='visually-hidden'>Link to github</span>
                        <Icon iconId={'github'} viewBox={'0 0 30 35'}/>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/tatyana-nemchina-50b113256/">
                        <span className='visually-hidden'>Link to linkedIn</span>
                        <Icon iconId={'linkedIn'} viewBox={'0 0 30 35'}/>
                    </a>
                </li>
                <li>
                    <a href="https://vk.com/angorka23">
                        <span className='visually-hidden'>Link to Vkontakte</span>
                        <Icon iconId={'vk'} viewBox={'0 0 42 27'} />
                    </a>
                </li>
                <li>
                    <a href="https://t.me/TanyaNemchina">
                        <span className='visually-hidden'>Link to Telegram</span>
                        <Icon iconId={'telegram'} viewBox={'0 0 20 20'}/>
                    </a>
                </li>
                <li>
                    <a href="https://wa.me/79811068473">
                        <span className='visually-hidden'>Link to Whatsapp</span>
                        <Icon iconId={'whatsapp'} viewBox={'0 0 20 20'}/>
                    </a>
                </li>
            </ul>
        </StyledNav>
    );
};
