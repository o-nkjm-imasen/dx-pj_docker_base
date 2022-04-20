import { useEffect, useState } from "react"
import Item from "./Item"
import styled from "styled-components"
import axios from "axios"
import { fetchBeApiServer } from "common/apiConfig"

const Table = styled.table`
  border: solid;
`

// useEffect(() => {
//   /* 第1引数には実行させたい副作用関数を記述*/
//   console.log('副作用関数が実行されました！')
// },[依存する変数の配列])
// useEffect(1, 2)
// useEffect(() => {}, [])  // 初期値せってい 第２引数空配列

const Items = () => {

  const [items, setItems] = useState([])

  useEffect(() => {
    const server = fetchBeApiServer()
    const url = `http://${server}/list`;

    axios.get(url)
        .then(res => {
            setItems(res.data)
        })
    console.log("items start!")
  }, [])

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Year-Month</th>
          <th>AccTitleId</th>
          <th>amount</th>
        </tr>
      </thead>
      { items.map((item) => {
          return <Item item={item} />
      })}
    </table>
  );
}

export default Items



