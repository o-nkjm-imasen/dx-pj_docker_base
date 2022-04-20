import { useEffect, useState } from "react"
import styled from "styled-components"
import axios from "axios"
import { fetchBeApiServer } from "common/apiConfig"
import Items from "components/Items"


const Delete = () => {

  const [id, setId] = useState("")

  const deleteItem = () => {
    const server = fetchBeApiServer()
    const url = `http://192.168.19.149:8888/deleteitem/${id}`;
    console.log(url)
    axios.delete(url)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    deleteItem()
  }

  const handleIdChange = (e) => {
    setId(e.target.value)  // e.target.value
  }


  return (
    <>
    <form onSubmit={handleSubmit}>
      <label>
        Id:
        <input type="text" value={id} onChange={handleIdChange} />
      </label>
      <p />
      <input type="submit" value="Submit" />
    </form>

    </>
  );
}

export default Delete



