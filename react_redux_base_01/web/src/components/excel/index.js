import { useEffect, useState } from "react"
import styled from "styled-components"
import axios from "axios"
import { fetchBeApiServer } from "common/apiConfig"
import { saveAs } from "file-saver";


const Button = styled.input`
  border: solid 1px #000;
  color: #000;
  font-size: 1rem;
  padding: 16px 32px;
  text-decoration: none;
  margin: 4px 2px;
  cursor: pointer;
  &:hover {
    color: #fff;
    background: #000;
  }
`


const Excel = () => {

  const excelDownload = async (selectDate) => {
    console.log("excelDownload called !");
    const server = fetchBeApiServer()
    const url = `http://${server}/excel`;
    await axios
      .post(
        url,
        { selectDate: selectDate }, // secound params is needed !!!
        {
          responseType: "arraybuffer",
          // responseType: 'blob', // 'arraybuffer'/'blob' works well
          // dataType:'binary',   // this is not needed
          headers: {
            "Content-Type": "text/plain",
            // 'Access-Control-Allow-Origin': '*',
          },
        }
      )
      .then((res) => {
        const filename = res.headers["content-disposition"].split(
          "filename="
        )[1];
        let blob = new Blob(
          [res.data],
          {
            type:
              "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          }
          // [res.data], { type: "application/vnd.ms-excel;charset=UTF-8"}
        );
        saveAs(blob, filename);
      });
  };

  const handleClick = (e) => {
    e.preventDefault()
    excelDownload()
  }


  return (
    <>
      <Button type="button" value="Download" onClick={handleClick} />
    </>
  );
}

export default Excel



