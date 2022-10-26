import Form from "./Compnents/Form/Form";
import "./App.css";
import BmiScore from "./Compnents/BMI-Score/BmiScore";
import BmiList from "./Compnents/BmiList/BmiList";
import React, { useState } from "react";

function App() {
  const [show, setShow] = useState(false)
  const [weightUpdate, setWeightUpdate] = useState({weight:'', type:''})
  const [bmi, setBmi] = useState("00");
  const [bmiType, setBmiType] = useState("Not Calculted");
  const [bmiRange, setBmiRange] = useState({
    underWeight: { low: "" },
    normal: { low: "", high: "" },
    overWeight: { low: "", high: "" },
    obesityOne: { low: "", high: "" },
    obesityTwo: { low: "", high: "" },
    obesityThree: { high: "" },
  });

  //########## functions #########//

  const getData = (w, h) => {
    let b = calculateBMI(w, h);
    setBmi(b);
    let wType = weightType(b);
    setBmiType(wType);

    const range = {
      underWeight: { low: calWeight(18.5, h) },
      normal: { low: calWeight(18.5, h), high: calWeight(24.9, h) },
      overWeight: { low: calWeight(25, h), high: calWeight(29.9, h) },
      obesityOne: { low: calWeight(30, h), high: calWeight(34.9, h) },
      obesityTwo: { low: calWeight(35, h), high: calWeight(39.9, h) },
      obesityThree: { high: calWeight(40, h) },
    };

    setBmiRange(range)
    setWeightUpdate(weightChange(b,w,range))
    setShow(true)
  };

  const calculateBMI = (w, h) => (w / (h * h)).toFixed(2);

  const weightType = (bmi) => {
    if (bmi < 18.5) {
      return "Under Weight";
    } else if (18.5 < bmi && bmi < 24.9) {
      return "Normal";
    } else if (24.9 < bmi && bmi < 29.9) {
      return "Over Weight";
    } else if (29.9 < bmi && bmi < 34.9) {
      return "Obsity Class I";
    } else if (34.9 < bmi && bmi < 39.9) {
      return "Obsity Class II";
    } else if (bmi > 39.9) {
      return "Obsity Class III";
    }
  };

  const calWeight = (b,h)=> (b * h * h).toFixed(2)

  const weightChange = (b, w, range) => {
    let changeObj;
    if (b > 24.9) {
      changeObj = {
        wight: (w - range.normal.high).toFixed(2),
        type: "You Need Lose",
      };
      return changeObj;
    } else if (b < 18.5) {
      changeObj = {
        wight: (range.normal.low - w).toFixed(2),
        type: "You Need Gain",
      };
      return changeObj;
    } else {
      changeObj = { wight: 0, 
        type: "You Weight is Normal, Good For You",
        normal:true
      
      };
      return changeObj;
    }
  };

  

  //############# Return #############//
  return (
    <>
      <div>
        <div className="container">
          <div className="row d-flex justify-content-center mt-5 mx-2">
            <Form getData={getData} />
          </div>
        </div>

        

        {show && <div className="row justify-content-center mt-5 p-3">
          <div className="col-12 col-sm-6 mb-5">
            <BmiScore bmiNo={bmi} bmiType={bmiType} status={weightUpdate} />
          </div>
          <div className="col-12 col-sm-6 mb-5">
            <BmiList range={bmiRange} bmi={bmi} />
          </div>
        </div>}
      </div>
    </>
  );
}

export default App;
