import React, { useEffect, useState } from 'react';
// import DataTable from 'react-datatable';


function Pricetable() {
  const [tableData, setTableData] = useState([]);

  const updateTable = async () => {
    const url = "https://viaje.ai/seatinfo_api/";
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData.data);
    setTableData(parsedData.data);
  }

  useEffect(() => {
    updateTable();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='container row d-flex justify-content-center my-2' id='admissions'>

      <div className="col-md-5">
        <h1 className='pricetable-header'>Get the Seat price</h1>
        <p className="pricetable-content">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam possimus provident voluptatem vero culpa, odit obcaecati quam ratione eum ducimus, voluptate neque perferendis, vel ipsam?
        </p>
        <ul className="pricetable-bullet">
          <li>World class</li>
          <p className="pricetable-content">Lorem ipsum dolorlorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, officiis.</p>
          <li>Affordable</li>
          <p className="pricetable-content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet.</p>
        </ul>
      </div>

      <div className="col-md-5 table-responsive">
        <table className='table table-bordered border-info text-center' style={{width: '100%'}}>
          <thead className='table-info'>
            <tr>
              <th scope="col">Seat No</th>
              <th scope="col">Price</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((element, index)=>{
              return (
                <tr key={index}>
                  <td>{element.seat_no}</td>
                  <td>{element.price}</td>
                  <td>{element.status}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default Pricetable;
