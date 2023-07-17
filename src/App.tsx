//import Message from './Message';
//import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Vertical from "./Vertical";
import Collapse from "./components/Collapse";
function App() {
  return (
    <>
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
          onClick={() => console.log("Clicked")}
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
      </div>
    </>
  );
}

export default App;
