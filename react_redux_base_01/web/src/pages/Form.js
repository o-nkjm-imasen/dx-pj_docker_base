import React, { useState, useEffect, useRef} from "react";
import styled from "styled-components";
import ResultForm from "components/resultForm";
import axios from "axios"
import { fetchBeApiServer } from "common/apiConfig"

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 78vh;
`;

const LeftPain = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  border: ${props => (props.editing ? 'solid' : 'solid')};  
  border-radius: 20px;
  border-color: ${props => (props.editing ? '#9f8' : '#eee')};
  background-color: ${props => (props.editing ? 'white' : 'lightgrey')};
`;

const RightPain = styled.div`
  grid-column: 2 / 2;
  grid-row: 1 / 2;
  border: ${props => (props.editing ? 'solid' : 'solid')};  
  border-radius: 20px;
  border-color: ${props => (props.editing ? 'fff' : '#1f0')};
  background-color: ${props => (props.editing ? 'grey' : 'white')};
`;

const Result = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 2em;
`;

const ValueHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  height: 20vh;
`;

const Value = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 8em;
`;

const Confirm = styled.div`
  grid-column: 1 / -1;  
  grid-row: 2 / 2;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  border-radius: 10px;
  margin: 10px;
  background-color: lightgreen;
`;

function FormPage() {
  const [editing, setEditing] = useState(false)
  const [ym, setYm] = useState("")
  const [ymCursor, setYmCursor] = useState(8)
  const [inputVal, setInputVal] = useState("")
  const [result, setResult] = useState({0: ""})
  const [cursor, setCursor] = useState(0)
  const [confirm, setConfirm] = useState(false)
  const [account, setAccount] = useState({})
  const inputRef = useRef()
  const resultRef = useRef()
  const editRef = useRef()
  const cursorRef = useRef()
  const confirmRef = useRef()
  const ymRef = useRef()
  const ymCursorRef = useRef()
  ymRef.current = ym
  ymCursorRef.current = ymCursor
  inputRef.current = inputVal
  resultRef.current = result
  editRef.current = editing
  cursorRef.current = cursor
  confirmRef.current = confirm

  const DUMMY_ACCOUNT = {
    "0": "部門経費",
    "1": "新型コロナウィルス",
  }

  const DUMMY_YEARMONTH = {
    "0": "202104",
    "1": "202105",
    "2": "202106",
    "3": "202107",
    "4": "202108",
    "5": "202109",
    "6": "202110",
    "7": "202111",
    "8": "202112",
    "9": "202201",
    "10": "202202",
    "11": "202203",            
  }
  
  useEffect(() => {
    setAccount(DUMMY_ACCOUNT)
    setYm(DUMMY_YEARMONTH)
    document.addEventListener("keydown", handleInput, false)
    return () => {
      document.removeEventListener("keydown", handleInput)
    }
  }, [])

  const MAX = Object.keys(DUMMY_ACCOUNT).length
  const handleInput = (e) => {
    e.preventDefault();
    console.log(e.key)
    if (e.key === 'Tab') {
      setEditing(!editRef.current)
    } else if (Number.isInteger(Number.parseInt(e.key)) && editRef.current === false) {
      const current = inputRef.current + e.key
      setInputVal(current)
    } else if (e.key === 'n' && editRef.current === true) {
      const current = (cursorRef.current + 1) % MAX // !!! TODO 
      setCursor(current)
      setConfirm(false)  
    } else if (e.key === 'p' && editRef.current === true) {
      const current = (cursorRef.current - 1) % MAX // !!! TODO 
      setCursor(current)
      setConfirm(false)  
    } else if (e.key === 'f' && editRef.current === true) {
      const current = (ymCursorRef.current + 1) % 12 // !!! TODO 
      setYmCursor(current)
    } else if (e.key === 'j' && editRef.current === true) {
      const current = (ymCursorRef.current - 1) % 12 // !!! TODO 
      setYmCursor(current)
    } else if (e.key === 'Enter' && inputRef.current !== "" ) {
      const ym = DUMMY_YEARMONTH[ymCursorRef.current]
      setResult(Object.assign(resultRef.current, {ym: ym, [cursorRef.current]: inputRef.current}))
      setCursor(cursorRef.current + 1)
      if (cursorRef.current === MAX){
        setConfirm(true)  
      }
      setInputVal("")
    } else if (e.key === 'Enter' && confirmRef.current ) {
      const res = window.confirm("送信しますよ？😸");
      if( res == true ) {
        createItem(resultRef.current)
        alert("データ送信完了");
        setConfirm(false)
        setResult({})
        setCursor(0)                
      }
      else {
        alert("キャンセルしました");
      }
    }
  }

  const createItem = async (result) => {

    const server = fetchBeApiServer()
    const url = `http://${server}/create`;
    console.log(result)
    const ym = result["ym"]
    const keys = Object.keys(result).filter((key) => {
      if (key !== "ym") { return key }
    }
    )
    const params = keys.map((key) => {
      return {yearmonth: ym, amount: Number.parseInt(result[key]), acctitleid: Number.parseInt(key) + 1}
    })
    console.log(params)
    await axios.post(url, params
    )
               .then((res) => console.log(res))
               .catch((err) => console.log(err))


  }
  
  return (
    <Container>
      <LeftPain editing={editing}>
        <ResultForm ym={ym[ymCursor]} account={account} result={result} cursor={cursor}/>
      </LeftPain>
      <RightPain editing={editing}>
        <ValueHeader>
          {account[cursor]}
        </ValueHeader>
        <Value>
          {inputVal}
        </Value>
      </RightPain>
      { confirm && <Confirm>確認</Confirm> }
    </Container>
  );

}

export default FormPage


// TODO
// 年月　選択
// 部署　選択
// 1回入力した場合　新規登録できないようにする
