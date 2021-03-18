import React from 'react';

import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  h1 {
    font-size: 26px;
    color: ${props => props.colored ? 'red' : 'green'}
    :hover {
      color: blue;
    }
  }
  h2 {
    font-size: 1.2rem;
    color: grey
  }
`

const AppHeader = ({liked, allPosts}) => {
    return (
        // <div className="app-header d-flex">
        // аналогия colored={true}
        <Header colored>
            <h1>Webdevek</h1>
            <h2>{allPosts} записей, из них понравилось {liked}</h2>
        </Header>
    )
}

export default AppHeader;
