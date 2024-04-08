import { useEffect, useState } from "react";
import styles from "./home.module.css";

function calcBmi(weight, height) {
  const convertedHeight = height / 100;
  const bmi = (weight / convertedHeight ** 2).toFixed(1);
  return bmi;
}

const Second = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [status, setStatus] = useState("");
  const [bmi, setBmi] = useState(0);

  function handleWeight(e) {
    setWeight(+e.target.value);
  }

  function handleHeight(e) {
    setHeight(+e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    setBmi(calcBmi(weight, height));
  }

  useEffect(
    function () {
      if (!bmi) return;

      if (bmi < 18.5) setStatus("Underweight");
      else if (bmi < 25) setStatus("Normal");
      else if (bmi < 30) setStatus("Overweight");
      else if (bmi > 30) setStatus("Obese");
    },
    [bmi]
  );
  return (
    <div className={`${styles.second} container sections-padding`}>
      <div>
        <h2>
          Jūsų <span>KMI</span>
        </h2>
        <p>
          Overrideds on hanging fruits to identify ball park value added
          activity to beta overrided the digitals divided with additionals
          clickthroughs from line.
        </p>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="number"
              min={1}
              placeholder="Weight / kg"
              value={weight || ""}
              onChange={handleWeight}
              required
            />

            <input
              type="number"
              min={1}
              placeholder="Height / cm"
              value={height || ""}
              onChange={handleHeight}
              required
            />
          </div>
          <div>
            <p>
              Your BMI is: <span>{bmi || ""}</span>
            </p>
            <p>
              Your weight is: <span>{status}</span>
            </p>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Second;
