import React from "react";
import styled from "styled-components";
import image from "../images/lmdb.png";

const StyledHeader = styled.div`
  background: #1c1c1c;
  padding: 0 20px;
  box-sizing: border-box;

  .header-content {
    max-width: 1280px;
    height: 20vh;
    padding: 20px 0;
    margin: 0 auto;
    box-sizing: border-box;

    @media screen and (max-width: 500px) {
      min-height: 0px;
    }
  }
`;

const StyledLogo = styled.img`
  width: 250px;
  margin-top: 0px;

  @media screen and (max-width: 500px) {
    width: 150px;
    margin-top: 5px;
  }
`;

const Header = () => (
  <StyledHeader>
    <div className="header-content">
      <StyledLogo src={image} alt="lmdb" />
    </div>
  </StyledHeader>
);

export default Header;
