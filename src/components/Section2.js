import React from 'react'
const image = require('./alberobello_risultato.jpeg')

function Section2() {
    return (
        <div className='my-2' id='programs'>
            <div className="container-fluid justify-content-center row mt-5">
                <div className="col-md-6 ms-3 text-left">
                    <h1>New Courses</h1>
                </div>
                <div className="col-md-3"></div>
                <div className="col-md-2 ms-3 justify-content-right mt-2 text-right">
                    <button className="btn btn-primary">EXPLORE COURSES</button>
                </div>
                
                <div className="col-md-5 my-4">
                    <div className="bg-image rounded position-relative"
                        style={{backgroundImage: `url(${image})`, height: '400px', backgroundSize: 'cover'}}>
                        <div className="position-absolute bottom-0 end-0">
                            <button className="btn btn-primary me-2 my-2"
                                style={{backgroundColor: 'white', color: 'black', borderRadius:'50px', border: 'black'}}>Software</button>
                            <button className="btn btn-success me-2" style={{borderRadius: '50px'}}>$ 25.3 USD</button>
                        </div>
                    </div>
                    <div className="mt-4 ms-3">
                        <h4 style={{color: 'blue'}}>Native Mac Apps in Swift</h4>
                        <p style={{color: 'black'}}>Take your dev skills to next level with this ground-up tutorial on native
                            mac<br/>apps</p>
                    </div>
                    <div className="ms-4">
                        <a className="p-1"
                            style={{border: '1px solid black', borderRadius: '25px', fontSize: 'smaller', textDecoration: 'none', color: 'black'}}>
                                <img className="p-2 me-1" style={{border: '1px solid black', borderRadius: '50%'}}/>Annabella Porter</a>
                        <a className="p-1 ms-2"
                            style={{border: '1px solid black', borderRadius: '25px', fontSize: 'smaller', textDecoration: 'none', color: 'black'}}>
                                <img className="p-2 me-1" style={{border: '1px solid black', borderRadius: '50%'}}/>3 Lesson</a>
                    </div>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-5 my-4">
                    <div className="bg-image rounded position-relative"
                        style={{backgroundImage:`url(${image})`, height: '400px', backgroundSize: 'cover'}}>
                        <div className="position-absolute bottom-0 end-0">
                            <button className="btn btn-primary me-2 my-2"
                                style={{backgroundColor: 'white', color: 'black', borderRadius:'50px', border: 'black'}}>Art &
                                Design</button>
                            <button className="btn btn-success me-2" style={{borderRadius: '50px'}}>Free</button>
                        </div>
                    </div>
                    <div className="mt-4 ms-3">
                        <h4 style={{color: 'blue'}}>Fundamentals of Interior design</h4>
                        <p style={{color: 'black'}}>A begginer's guide of designing or renoating breathtaking interior spaces that pop
                        </p>
                    </div>
                    <div className="ms-4">
                        <a className="p-1"
                            style={{border: '1px solid black', borderRadius: '25px', fontSize: 'smaller', textDecoration: 'none', color: 'black'}}>
                                <img className="p-2 me-1" style={{border: '1px solid black', borderRadius: '50%'}}/>by Annabella Porter</a>
                        <a className="p-1 ms-2"
                            style={{border: '1px solid black', borderRadius: '25px', fontSize: 'smaller', textDecoration: 'none', color: 'black'}}>
                                <img className="p-2 me-1" style={{border: '1px solid black', borderRadius: '50%'}}/>3 Lesson</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section2
