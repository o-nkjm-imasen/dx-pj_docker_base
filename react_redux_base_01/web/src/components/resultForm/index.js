import React, { useState, useEffect, useRef} from "react";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5em;
  font-size: 2em;
`;

const Result = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 2em;
`;

const TdHead = styled.td`
  width: 50px;
  text-align: center;
`;

const TdVal = styled.td`
  width: 200px;
  text-align: right;
`;


// TODO !!! need to dynamic table

const ResultForm = ({ym, account, result, cursor}) => {

  return (
    <>
      <Header>{ym}</Header>
      <Result>
        <table>
          <tr>
            <th></th><th>科目名</th><th>金額</th>
          </tr>
          {Object.keys(account).map((key, index) => {
            return (
              <tr>
                <TdHead>{(cursor === index) ? "🐯" : "" }</TdHead>
                <td>{account[key]}</td>
                <TdVal>{result[key]}</TdVal>
              </tr>)})
          }
        </table>
      </Result>
    </>
  );

}

export default ResultForm


