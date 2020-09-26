import React from 'react';

import onlineIcon from '../../assets/onlineIcon.png';
import closeIcon from '../../assets/closeIcon.png';

import { Container } from './styles';

const InfoBar = ({ room, users }) => (
  <Container>
    <div className="infoBar">
      <div className="leftInnerContainer">
        <img className="onlineIcon" src={onlineIcon} alt="online icon" />
        <h3>{room}</h3>
      </div>
      <div className="rightInnerContainer">
        <a href="/"><img src={closeIcon} alt="close icon" /></a>
      </div>
    </div>

    <div className="usersOnline">
      {users
        ? (
          <div>
            <div className="activeContainer">
              <h2 className="usersContainer">
                {users.map(({ name }) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon} />
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null}
    </div>
  </Container>
);

export default InfoBar;