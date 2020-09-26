import styled from 'styled-components';

export const Container = styled.div`
  .infoBar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #9991D7;
    border-radius: 4px 4px 0 0;
    height: 60px;
    width: 100%;
  }

  .leftInnerContainer {
    flex: 0.5;
    display: flex;
    align-items: center;
    margin-left: 5%;
    color: white;
  }

  .rightInnerContainer {
    display: flex;
    flex: 0.5;
    justify-content: flex-end;
    margin-right: 5%;
  }

  .onlineIcon {
    margin-right: 5%;
  }

  .usersContainer {
    display: flex;
    flex-direction: row;
    justify-items: flex-start;
    align-items: center;
    margin-left: 5%;
  }

  .usersOnline {
    background: #9991D7;
    height: 30px;
    width: 100%;
    color: #3d3d3d;
    font-size: 10px;
  }

  .activeItem {
    display: flex;
    align-items: center;
    margin-right: 3%;
  }
`;
