import React, {useState} from 'react'
const image = require('./alberobello_risultato.jpeg')
function Section1() {
    const [showModal, setShowModal] = useState(false);

    const handleButtonClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };
    return (
        <div className='my-2' id='home'>
            <div className="colorr">
                <div className="middle container-fluid row">
                    <div className="col-md-12 text-center mt-5">
                        <h1 className="text">Get The Best Online<br />Learning Service</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium cum assumenda repudiandae.<br />Unde
                            facere, error cupiditate velit excepturi ipsam eaque delectus voluptas magni asperiores<br />consectetur
                            modi blanditiis, perspiciatis, vitae adipisci.</p>
                        <button className="btn btn-primary ">Start a Session</button>
                    </div>
                </div>

                <div className="middle text-center justify-content-center container-fluid row">
                    <div className="col-md-5 text-center mt-5 me-3">
                        <img src={image} className="img-thumbnail rounded" style={{cursor: 'pointer'}} onClick={handleButtonClick} alt="" />
                    </div>
                </div>
            </div>
            
            <div className={`modal ${showModal ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: showModal ? 'block' : 'none' }}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleCloseModal}></button>
                        </div>
                        <div className="modal-body">
                            
                            {/* <video src="https://www.youtube.com/watch?v=a9__D53WsUs&t=1s&pp=ygUDYXdz"></video> */}
                            <iframe 
                            width="100%" 
                            height="315" 
                            src="https://www.youtube.com/watch?v=a9__D53WsUs&t=1s&pp=ygUDYXdz" 
                            title="YouTube video"  
                            allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section1
