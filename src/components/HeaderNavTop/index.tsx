import React from 'react';

import { StyledHeaderNavTop, StyledLogo, StyledLinks, StyledButtonLog } from './styles';

const HeaderNavTop: React.FC = () => {
  return(
    <StyledHeaderNavTop>
        <StyledLogo/>
        <StyledLinks>
          <li>Oi</li>
          <li>Oi</li>
          <li>Oi</li>
        </StyledLinks>
        <StyledButtonLog/>
    </StyledHeaderNavTop>
  );
}

export default HeaderNavTop;