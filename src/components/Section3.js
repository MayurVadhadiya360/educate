import React from 'react'

function Section3() {
    return (
        <div className='my-2' id='courses'>
            <div className="sec_colorr">
                <div className="container-fluid row justify-content-center sec_colorr">
                    <div className="col-md-12 text-center mt-5">
                        <h1>How to educate work?</h1>
                    </div>
                </div>
                <div className="container-fluid my-5 row justify-content-center">
                    <div className="col-md-3 text-center">
                        <button className="btn btn-success btn-lg" style={{borderRadius: '50%'}}>1</button>
                        <p>Brouse course from our expert contributors</p>
                    </div>
                    <div className="col-md-1">
                    </div>
                    <div className="col-md-3 text-center">
                        <button className="btn btn-success btn-lg" style={{borderRadius: '50%'}}>2</button>
                        <p>Purchase quickly and securly</p>
                    </div>
                    <div className="col-md-1">
                    </div>
                    <div className="col-md-3 text-center">
                        <button className="btn btn-success btn-lg" style={{borderRadius: '50%'}}>3</button>
                        <p>That's start learning right away</p>
                    </div>
                </div>
                <div className="container-fluid row justify-content-center">
                    <div className="col-md-6 text-center mb-5">
                        <h4>Join over 1,000 satisfied learners today.</h4><br/>
                            <p><button className="btn btn-primary">Explore Courses</button></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section3
