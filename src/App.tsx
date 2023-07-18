import Alert from "./components/Alert";
import Button from "./components/Button";
import Vertical from "./Vertical";
import Collapse from "./components/Collapse";
import Dropdown from "./components/Dropdown";
import { useState } from "react";
import ListGroup from "./components/ListGroup";
import { getThreeArticles } from "./news";
import Card from "./components/Card";
import ForeCast from "./components/ForeCast";
const componentStyle: React.CSSProperties = {
  position: "absolute",
  top: "150px",
  left: "625px",
};
function App() {
  const API_KEY = "b029201ed31848d9a39905d951266fe9";
  const [isShown, setIsShown] = useState(false);
  const [isGraphShown, setIsGraphShown] = useState(false);
  const [isNewsShown, setIsNewsShown] = useState(false);

  const handleWeatherBtnClick = () => {
    setIsGraphShown((current) => !current);
    if (isShown) {
      setIsShown((current) => !current);
    }
    if (isNewsShown) {
      setIsNewsShown((current) => !current);
    }
    console.log("Changed state");
  };
  const handleTweetsBtnClick = () => {
    setIsShown((current) => !current);
    if (isGraphShown) {
      setIsGraphShown((current) => !current);
    }
    if (isNewsShown) {
      setIsNewsShown((current) => !current);
    }
    console.log("Changed state");
  };
  const handleNewsBtnClick = () => {
    setIsNewsShown((current) => !current);
    if (isGraphShown) {
      setIsGraphShown((current) => !current);
    }
    if (isShown) {
      setIsShown((current) => !current);
    }
    console.log("Changed state");
  };

  let items = ["United States of America", "Canada", "Mexico", "China"];

  const handleSelectItem = (item: string) => {
    console.log(item, "was selected");
    if (item == "United States of America") {
      //const news = await getThreeArticles("us", API_KEY);
      let firstArticleTitle = "";
      getThreeArticles("us", API_KEY).then((news) => {
        console.log("worked");
        firstArticleTitle = news[0].title;
        console.log(firstArticleTitle);
        return firstArticleTitle;
      });
      console.log(firstArticleTitle);
      //console.log(news[0].title);
      //console.log(title);
      //const usTitle = news[0].title;
      //console.log(news.title)
    } else if (item == "Canada") {
      getThreeArticles("ca", API_KEY).then((news) => console.log(news));
    } else if (item == "Mexico") {
      getThreeArticles("mx", API_KEY).then((news) => console.log(news));
    } else {
      getThreeArticles("cn", API_KEY).then((news) => console.log(news));
    }
  };

  async function fetchArticles(item: string) {
    let cardTitle1 = "";
    let url1 = "";
    try {
      if (item == "United States of America") {
        const news = await getThreeArticles("us", API_KEY);
        const firstArticleTitle = news[0].title;
        cardTitle1 = firstArticleTitle;
        url1 = news[0].url;
      } else if (item == "Canada") {
        const news = getThreeArticles("ca", API_KEY).then((news) =>
          console.log(news)
        );
      } else if (item == "Mexico") {
        const news = getThreeArticles("mx", API_KEY).then((news) =>
          console.log(news)
        );
      } else {
        const news = getThreeArticles("cn", API_KEY).then((news) =>
          console.log(news)
        );
      }
    } catch (error) {
      // Handle any errors that occur during the API request
    }

    console.log("title", cardTitle1);
    console.log("url:", url1);
  }

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
          color="light"
          onClick={handleWeatherBtnClick}
          position={{ top: "30px", left: "8px" }}
        >
          Check Weather and Air Quality
        </Button>

        <Button
          color="light"
          onClick={handleNewsBtnClick}
          position={{ top: "90px", left: "-190px" }}
        >
          See News Reports
        </Button>

        <Button
          color="light"
          onClick={handleTweetsBtnClick}
          position={{ top: "150px", left: "-350px" }}
        >
          View Related Tweets
        </Button>

        <Dropdown
          buttonTitle="Select Location"
          buttonPosition={{ top: "-50px", left: "650px" }}
          position={{ top: "-10px", left: "650px" }}
          //onClick={handleLocationClick}></div>
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
        <div>{isGraphShown && <ForeCast></ForeCast>}</div>

        <div style={componentStyle}>
          {isNewsShown && (
            <ListGroup items={items} onSelectItem={fetchArticles} />
          )}
        </div>
        {/* </Dropdown> */}

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
