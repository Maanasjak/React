import { useState } from 'react'
import "./style.css"

export default function Comp(props){
  return(
        <div className="col">
            <div className="card" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop">
                <img src={props.imgMain} className="card-img-top" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title">{props.carName}
                    </h5>
                    <p className="card-text">{props.SmallDiscription}</p>
                    <p className="card-text">{props.color}</p>
                </div>
                <div className="mb-5 mx-3 text-center">
                    <h3>£{props.price}</h3>
                    <a className='btn btn-primary' id="btn-primary" href={props.web}>Shop</a>
                </div>
            </div>
            <div className='d-none d-md-block d-lg-block'>
                <div class="offcanvas offcanvas-top m-2 " tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                    <div className="offcanvas-body">
                        <div className="carousel slide" id="carousel" data-bs-wrap="false">
                            <div className="carousel-inner">
                                <div className="carousel-item active text-center w-md-90">
                                    <img src={props.imgSide} alt="hi" className='img-fluid rounded h-auto hi' />
                                </div>
                                <div className="carousel-item active text-center w-md-90">
                                    <img src={props.imgMain} alt="hi" className='img-fluid rounded h-auto hi' />
                                </div>
                                <div className="carousel-item text-center w-md-90">
                                    <img src={props.imgBack} alt="hi" className='img-fluid rounded h-auto hi' />
                                </div>
                                <div className="carousel-item text-center w-md-90">
                                    <img src={props.imgInterior} alt="hi" className='img-fluid rounded h-auto hi' />
                                </div>
                            </div>
                        </div>
                        <button className='carousel-control-prev' data-bs-slide="prev" data-bs-target="#carousel">
                            <span className='carousel-control-prev-icon'></span>
                        </button>
                        <button className='carousel-control-next' data-bs-slide="next" data-bs-target="#carousel">
                            <span className='carousel-control-next-icon'></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
  )
}