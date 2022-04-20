import React from "react";
import styled from "styled-components";

const MyStyledHeader = styled.div`
  display:flex;  
  grid-row: 1 / 2;
  grid-column: 1 / -1;
  padding: 10px;
  background-color: #f2f2f2;
  border-bottom: 1px solid #e0e0e0;
  box-shadow: 0px 1px 10px 1px #e0e0e0;
}
`;


function MyHeader(props) {
  return (
    <>
      <MyStyledHeader>{props.name}</MyStyledHeader>
    </>
  );
}

export default MyHeader;
