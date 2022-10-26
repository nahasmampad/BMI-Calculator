import React, { useState } from "react";
import "./Form.css";

function Form({getData}) {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [alert, setAlert] = useState(false)
  const onSubmit = (e) => {
    e.preventDefault();
    if (isNaN(weight) || isNaN(height)) {
      setAlert(true)
    } else {
      getData(weight, height)
      setAlert(false)
      
    }
  };

  return (
    <>
      <div className="col-sm-4 shadow rounded px-5 p-3">
        <h1 className="text-center  pt-3 text-seconda ry h2">BMI Calculaor</h1>
        <form onSubmit={onSubmit}>
          <div className="row">
            <div className="col col-sm-6">
              <div className="my-3">
                <label className="form-lable">Weight (kg) : </label>
                <input
                  type="text"
                  className="form-control"
                  value={weight}
                  onChange={(e) => {
                    setWeight(e.target.value);
                  }}
                  required
                />
              </div>
            </div>

            <div className="col col-sm-6">
              <div className="my-3">
                <label className="form-lable">Height (m) : </label>
                <input
                  type="text"
                  className="form-control"
                  value={height}
                  onChange={(e) => {
                    setHeight(e.target.value);
                  }}
                  required
                />
              </div>
            </div>
          </div>

          <input
            type="submit"
            className="btn btn-primary my-3"
            value="GET BMI"
          />
        </form>
        {alert && <div className="alert alert-danger" role='alert' > Please Enter a Valid Data</div>}
      </div>
    </>
  );
}

export default Form;
