import styled from "styled-components"

const Td = styled.td`
  border: solid;
`


const Item = ({item}) => {

  return (
    <tr>
      <td>{item.id}</td>
      <td>{item.yearmonth}</td>
      <td>{item.acc_title_id}</td>
      <td>{item.amount}</td>
    </tr>
  );
}

export default Item
