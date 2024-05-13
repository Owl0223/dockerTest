import { useEffect, useId, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState([{}]);
  useEffect(() => {
    const url = `http://209.97.176.187:4000/api/examples`;
    const fetchData = async () => {
      const rsp = await axios(url);

      setData(rsp.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div>
        <h1>Welcome to My MERN App</h1>
        <p>This is the frontend of the MERN app.</p>

        {data.map((element, index) => {
          return (
            <div key={index}>
              <span> Name : {element.name}</span>
              <span> Name : {element.description}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
