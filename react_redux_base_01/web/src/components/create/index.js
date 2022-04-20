import { useEffect, useState } from "react"
import styled from "styled-components"
import axios from "axios"
import { fetchBeApiServer } from "common/apiConfig"

const Create = () => {

  const [category, setCategory] = useState("")
  const [price, setPrice] = useState("")


  const createItem = async () => {
    if (checkValue(category) === true) {
      const server = fetchBeApiServer()
      const url = `http://192.168.19.149:8888/additem`;
      // const url = `http://${server}/additem`;
      // formdata application/x-www-form-urlencoded
      const params = new URLSearchParams()
      params.append('category', category)
      params.append('price', price)
      await axios.post(url, params)
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
      resetInputForm()
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    createItem()
  }

  const handleCategoryChange = (e) => {
    setCategory(e.target.value)  // e.target.value
  }

  const handlePriceChange = (e) => {
    setPrice(e.target.value)
  }

  const resetInputForm = () => {
    setCategory("")
    setPrice("")
  }

  const checkValue = (val) => {
    return val !== "" ? true : false
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
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

export default Create



