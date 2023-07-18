//import Message from './Message';
//import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Vertical from "./Vertical";
import Collapse from "./components/Collapse";
import Dropdown from "./components/Dropdown";
import { useState } from "react";
import ForeCast from "./components/ForeCast";

function App() {
  const [isShown, setIsShown] = useState(false);
  const handleWeatherBtnClick = () => {
    setIsShown((current) => !current);
    console.log("Changed state");
  };
  return (
    <>
      {/* <ForeCast></ForeCast> */}
      <div>
        <Alert>
          <center>
            <b>
              <i>Weather Aggregator</i>
            </b>
          </center>
        </Alert>
        <Button
          color="secondary"
          onClick={handleWeatherBtnClick}
          position={{ top: "30px", left: "8px" }}
        >
          Check Weather and Air Quality
        </Button>

        <Button
          color="secondary"
          onClick={() => console.log("Clicked")}
          position={{ top: "90px", left: "-190px" }}
        >
          See News Reports
        </Button>

        <Button
          color="secondary"
          onClick={() => console.log("Clicked")}
          position={{ top: "150px", left: "-350px" }}
        >
          View Related Tweets
        </Button>

        <Collapse></Collapse>
        <Vertical></Vertical>
        {/* show elements on click */}
        {isShown && (
          <div>
            <Dropdown
              buttonTitle="Select Location"
              buttonPosition={{ top: "-50px", left: "650px" }}
              position={{ top: "-10px", left: "650px" }}
            >
              <li>
                <a className="dropdown-item" href="#">
                  California
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Maryland
                </a>
              </li>
            </Dropdown>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
