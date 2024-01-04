import React, { useState, useEffect } from 'react'
// import './image_content.png';
const image_testimonial = require('./image_content.png');

function Testimonials() {
    const [activeSlide, setActiveSlide] = useState(0);

    function showSlide(index) {
        setActiveSlide(index);
        const carouselItems = document.querySelectorAll('.carousel-item');
        const buttons = document.querySelectorAll('.carousel-button');

        carouselItems.forEach((item, i) => {
            if (i === index) {
                item.classList.add('active');
                buttons[i].classList.add('active');
            } else {
                item.classList.remove('active');
                buttons[i].classList.remove('active');
            }
        });
    }

    //https://viaje.ai/testimonial_api/
    const [testimonial, setTestimonial] = useState([]);

    const updateTestimonials = async () => {
        const url = "https://viaje.ai/testimonial_api/";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData.data);
        setTestimonial(parsedData.data);
        
    }

    useEffect(() => {
        updateTestimonials();
        // eslint-disable-next-line
    }, []);


    return (
        <div style={{ backgroundColor: 'aqua' }} className='container-fluid my-2' id='testimonial'>
            <div className='mt-4 d-flex justify-content-center'>
                <h1 className='pricetable-header'>What Our Student Says</h1>
            </div>
            <div className="container-fluid row d-flex justify-content-center p-3">
                <div className="col-md-5">
                    <img className='img-thumbnail' src={image_testimonial} alt='' />
                </div>
                <div className="col-md-5 container-fluid">
                    <div className="carousel-container">
                        <h1 className='pricetable-header' style={{ fontSize: "30px" }}>“</h1>
                        <br />
                        <div className="carousel-content">

                            {testimonial.map((element, index) => {
                                return (
                                    <div className={`carousel-item ${index===0?'active':''}`} key={`item${index}`}>
                                        <p className='pricetable-content' style={{ textAlign: 'justify' }}>
                                            {element.comment}
                                        </p>
                                        <div className='container' key={`rate${index}`}>
                                            <div className="rate">
                                                <input type="radio" id="star5" name="rate" value="5" checked={Math.round(Number(element.rating)) === 5} disabled />
                                                <label htmlFor="star5" title="text">5 stars</label>
                                                <input type="radio" id="star4" name="rate" value="4" checked={Math.round(Number(element.rating)) === 4} disabled />
                                                <label htmlFor="star4" title="text">4 stars</label>
                                                <input type="radio" id="star3" name="rate" value="3" checked={Math.round(Number(element.rating)) === 3} disabled />
                                                <label htmlFor="star3" title="text">3 stars</label>
                                                <input type="radio" id="star2" name="rate" value="2" checked={Math.round(Number(element.rating)) === 2} disabled />
                                                <label htmlFor="star2" title="text">2 stars</label>
                                                <input type="radio" id="star1" name="rate" value="1" checked={Math.round(Number(element.rating)) === 1} disabled />
                                                <label htmlFor="star1" title="text">1 star</label>
                                                <br />
                                            </div>
                                                <p>{Number(element.rating)+'★'}</p>
                                            <br />
                                        </div>
                                        <br />
                                        <div className='d-flex justify-content-left'>
                                            <div className="d-flex flex-column">
                                                <div className="ps-2">
                                                    <p className="pricetable-header" style={{ fontSize: '24px' }}>{element.comment_by}</p>
                                                </div>
                                                <div className="ps-2">
                                                    <p className='pricetable-content'>Poland</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}

                            
                            {/* Add more carousel items as needed  */}
                        </div>
                        <div className="carousel-buttons">
                            {testimonial.map((element, index) => {
                                return (
                                    <button key={index} className={`carousel-button ${activeSlide === index ? 'active' : ''}`} onClick={() => showSlide(index)}></button>
                                );
                            })}
                            {/* Add more buttons as needed  */}
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Testimonials;
