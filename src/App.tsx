//import Message from './Message';
//import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Vertical from "./Vertical";
import Collapse from "./components/Collapse";
import Dropdown from "./components/Dropdown";
import { useState } from "react";
import Card from "./components/Card";
import ForeCast from "./components/ForeCast";

function App() {
  const [isShown, setIsShown] = useState(false);
  const handleWeatherBtnClick = () => {
    setIsShown((current) => !current);
    console.log("Changed state");
  };
  const handleTweetsBtnClick = () => {
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
          onClick={handleTweetsBtnClick}
          position={{ top: "150px", left: "-350px" }}
        >
          View Related Tweets
        </Button>

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
          <li>
            <a className="dropdown-item" href="#">
              New York
            </a>
          </li>
        </Dropdown>

        <Collapse></Collapse>
        <Vertical></Vertical>

        {/* show elements on click */}
        {isShown && (
          <div>
            <Card
              tweetUser="dialnfornick"
              tweetLink="https://twitter.com/dialnfornick/status/1681015160004116481"
              position={{ top: "-10px", left: "350px" }}
            >
              the way I have to check air quality levels daily like it's the
              weather
            </Card>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
