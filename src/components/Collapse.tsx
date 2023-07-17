import React, { useState } from "react";
import { Button, Collapse } from "react-bootstrap";

function createCollapse() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div style={{ position: "relative" }}>
      <p>
        <Button
          className="btn btn-info"
          type="button"
          onClick={handleToggle}
          aria-controls="collapseWidthExample"
          aria-expanded={isCollapsed}
          style={{
            position: "absolute",
            top: "160px",
            left: "110px",
          }}
        >
          ?
        </Button>
      </p>
      <Collapse in={isCollapsed}>
        <div
          id="collapseWidthExample"
          className="card card-body"
          style={{
            width: "250px",
            position: "absolute",
            top: "200px",
            left: "5px",
          }}
        >
          Toggle through the buttons on the left-hand side to check the weather
          for the last and upcoming weeks, view relevant news stories related to
          the country chosen, and view what people on social media have to say
          about these events.
        </div>
      </Collapse>
    </div>
  );
}

export default createCollapse;
