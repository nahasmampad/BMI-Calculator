import React from 'react'

function BmiScore({bmiNo, bmiType, status}) {
  
  return (
    <>
    <div className="text-center shadow rounded px-5 p-3">
      <div>Your BMI Score</div>
      <div className="row justify-content-md-center">
        <div className="p-3 my-2 alert alert-primary col-sm-4 fs-1 fw-bold">{bmiNo}</div>
      </div>
      <div className="fs-3 fw-bold text-primary">{bmiType}</div>

      <div><h5>{status.normal ?  status.type :  status.type + ' '+status.wight  }</h5></div>

    </div>
    </>
  )
}

export default BmiScore