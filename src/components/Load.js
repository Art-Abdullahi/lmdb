import React from "react";
import { StyledLoadMoreBtn } from "../styles/StyledBtn";
const Load = ({ text, callback }) => (
  <StyledLoadMoreBtn type="button" onClick={callback}>
    {text}
  </StyledLoadMoreBtn>
);

export default Load;
