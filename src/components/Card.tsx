import React from "react";

interface Props {
  children: string;

  //color: string;
  //onClick: () => void;
  position: { top: string; left: string };
  tweetUser: string;
  tweetLink: string;
}

const Card = ({ children, position, tweetUser, tweetLink }: Props) => {
  const handleClick = () => {
    window.open(tweetLink, "_blank");
    //window.location.href = "https://twitter.com";
  };
  return (
    <div
      className="card"
      style={{ top: position.top, left: position.left, width: "18rem" }}
    >
      <img
        src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">from @{tweetUser}</h5>
        <p className="card-text">{children}.</p>
        <a href="#" className="btn btn-primary" onClick={handleClick}>
          Visit tweet
        </a>
      </div>
    </div>
  );
};

export default Card;
