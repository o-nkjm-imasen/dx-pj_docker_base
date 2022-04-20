import { useEffect, useState } from "react"
import styled from "styled-components"
import axios from "axios"
import { fetchBeApiServer } from "common/apiConfig"


const Update = () => {

  const [id, setId] = useState("")
  const [category, setCategory] = useState("")
  const [price, setPrice] = useState("")

  const updateItem = () => {
    const server = fetchBeApiServer()
    const url = `http://192.168.19.149:8888/updateitem`;
    // const url = `http://${server}/additem`;
    // formdata application/x-www-form-urlencoded
    const params = new URLSearchParams()
    params.append('id', id)
    params.append('category', category)
    params.append('price', price)
    axios.patch(url, params)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    updateItem()
  }

  const handleIdChange = (e) => {
    setId(e.target.value)
  }

  const handleCategoryChange = (e) => {
    setCategory(e.target.value)  // e.target.value
  }

  const handlePriceChange = (e) => {
    setPrice(e.target.value)
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label>
        Id:
        <input type="text" value={id} onChange={handleIdChange} />
      </label>
      <p />

      <label>
        Category:
        <input type="text" value={category} onChange={handleCategoryChange} />
      </label>
      <p />

      <label>
        Price:
        <input type="text" value={price} onChange={handlePriceChange} />
      </label>
      <p />
      <input type="submit" value="Submit" />
    </form>

    </>
  );
}

export default Update



