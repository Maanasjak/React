import { useState } from 'react'
import './App.css'
import Comp from "./comp"
import data from "./data/data"


const obj = data.map((obj) => {
  return <Comp
    key={obj.id}
    carName={obj.carName}
    color={obj.color}
    discription={obj.discription}
    SmallDiscription={obj.SmallDiscription}
    model={obj.model}
    company={obj.company}
    price={obj.price}
    imgMain={obj.imgMain}
    imgBack={obj.imgBack}
    imgSide={obj.imgSide}
    imgInterior={obj.imgInterior}
    web={obj.web}
  />
})

function App() {

  return (
    <>
    <nav className="navbar bg-body-tertiary  align-items-center d-flex">
      <div className="container-fluid">
      <div className='d-flex'>
        <a className="navbar-brand" href="#">
          <img src="src/assets/My first design 2.png" alt="Logo" width="40" height="40" className="d-inline-block align-text-center" />
          ShopWave
        </a>
      </div>
        <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>
    <div className="container-fluid py-3 p-5 ">
      <div className='d-flex align-items-center'>
        <h1 className='d-inline-block'>Cars</h1>
        <a href="#" className='btn btn-primary mx-4'>More</a>
      </div>
      <div className="row row-cols-1 row-cols-md-4 g-4 py-4">
          {obj}
          {obj}
          {obj}
          {obj}
          {obj}
          {obj}
          {obj}
          {obj}
      </div>
      <div className='d-flex align-items-center'>
        <h1 className='d-inline-block'>Bikes</h1>
        <a href="#" className='btn btn-primary mx-4'>More</a>
      </div>
      <div className="row row-cols-1 row-cols-md-4 g-4 py-4 row-cols-sm-6 row-col-s-6">
          {obj}
          {obj}
          {obj}
          {obj}
          {obj}
          {obj}
          {obj}
          {obj}
      </div>
      <div className='d-flex align-items-center'>
        <h1 className='d-inline-block'>Other</h1>
        <a href="#" className='btn btn-primary mx-4'>More</a>
      </div>
      <div className="row row-cols-1 row-cols-md-4 g-4 py-4">
          {obj}
          {obj}
          {obj}
          {obj}
          {obj}
          {obj}
          {obj}
          {obj}
      </div>
    </div>
    </>
  )
}

export default App
