import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [age, setAge] = useState({ old: 65, teen: 19 });
  const checkAge = (e) => {
    const value = Number(e.target.value);
    //console.log(typeof(value));
    Object.keys(age).map(function (k, v) {
      if (age[k] === value) {
        console.log(k, typeof age[k], typeof value);
        return k;
      } else {
        setAge((prevAge) => ({ ...prevAge, adult: value }));
        console.log(Object.entries(age));
        return "adult";
      }
    });
  };
  useEffect(() => {
    // Update the document title using the browser API
    document.p = `You clicked ${checkAge} times`;
  });
  return (
    <div className="App">
      <p></p>
      <input onChange={checkAge} name="agegroup" />
    </div>
  );
}
