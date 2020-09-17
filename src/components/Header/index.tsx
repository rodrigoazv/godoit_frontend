import React from 'react';

import { StyledHeader, StyledLogo, StyledLinks, StyledButtonLog } from './styles';

const Header: React.FC = () => {
  return(
    <StyledHeader>
        <StyledLogo/>
        <StyledLinks/>
        <StyledButtonLog/>
    </StyledHeader>
  );
}

export default Header;