import React, { useState } from "react";

const App: React.FC = () => {
  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [bmi, setBmi] = useState<number>(0);
  const [category, setCategory] = useState<string>("");

  const calculateBMI = (): void => {
    const result = weight / Math.pow(height / 100, 2);
    setBmi(result);

    if (result < 18.5) {
      setCategory("Underweight");
    } else if (result >= 18.5 && result <= 22.9) {
      setCategory("Normal");
    } else if (result >= 23 && result <= 29.9) {
      setCategory("Overweight");
    } else if (result > 30) {
      setCategory("Obese");
    }
  };
  return (
    <div>
      <h1>Kalkulator BMI</h1>
      <div>
        <label htmlFor="weight">weight (kg)</label>
        <input
          type="number"
          id="weight"
          name="weight"
          value={weight}
          onChange={(e) => setWeight(Number(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="height">height</label>
        <input
          type="number"
          id="height"
          name="height"
          value={height}
          onChange={(e) => setHeight(Number(e.target.value))}
        />
      </div>
      <button onClick={calculateBMI}>Cek Hasil</button>
      <div>
        <p>BMI: {bmi.toFixed(2)}</p>
        <p>Category: {category}</p>
      </div>
    </div>
  );
};

export default App;
