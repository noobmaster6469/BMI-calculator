import React, { useState } from "react";

const Calc = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [msg, setMsg] = useState("Default message");
  const [opacity, setOpacity] = useState("opacity-0");

  const submitHandler = (e) => {
    e.preventDefault();
    if (height === 0 || weight === 0 || height == "" || weight == "") {
      alert("Enter Valid Values");
    } else {
      const bmi = (weight / (height ** 2 * 0.34048 ** 2)).toFixed(1);
      setBmi(bmi);
      setOpacity("opacity-1");
      console.log(height);
      console.log(weight);

      if (bmi < 18.5) {
        setMsg("You are underweight");
      } else if (bmi > 18.5 && bmi < 24.9) {
        setMsg("You are of healthy weight");
      } else {
        setMsg("You are overweight");
      }
    }
  };

  const reloadHandler = (e) => {
    window.location.reload();
  };

  return (
    <div className="h-screen bg-emerald-900 flex justify-center items-center">
      <div className=" bg-white w-[30%] p-12 relative rounded-lg">
        <form>
          <div>
            <label className="text-lg">Height(feet):</label> <br />
            <input
              className="text-white bg-slate-800 w-full px-4 py-2 rounded-xl mb-4 mt-2 outline-none placeholder:text-white"
              type="number"
              value={height}
              placeholder="0"
              onChange={(e) => {
                setHeight(e.target.value);
              }}
            />
          </div>

          <div>
            <label className="text-lg">Weight(kg):</label> <br />
            <input
              className="text-white bg-slate-800 w-full px-4 py-2 rounded-xl mb-4 mt-2 outline-none placeholder:text-white"
              type="number"
              value={weight}
              placeholder="0"
              onChange={(e) => {
                setWeight(e.target.value);
              }}
            />
          </div>

          <div className="flex gap-4 mb-4">
            <input
              className="bg-emerald-900 border-2 text-white px-4 py-2 rounded-lg active:scale-75 cursor-pointer hover:bg-emerald-800"
              type="submit"
              value="Submit"
              onClick={(e) => {
                submitHandler(e);
              }}
            />
            <input
              className="border-emerald-900 border-2 text-black px-4 py-2 rounded-lg active:scale-75 cursor-pointer hover:bg-slate-100"
              type="submit"
              value="Reload"
              onClick={(e) => {
                reloadHandler(e);
              }}
            />
          </div>

          <div>
            <h3 className="text-lg">Your BMI is : {bmi}</h3>
            <p className={`text-lg ${opacity}`}>{msg}</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Calc;
