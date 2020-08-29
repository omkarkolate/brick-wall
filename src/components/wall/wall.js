import React from "react";
import "./wall.css";
import Brick from "../brick/brick";

class Wall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bricks: []
    };
  }

  addBrick = (event) => {
    this.state.bricks.push(this.state.bricks.length + 1);

    this.setState({
      bricks: this.state.bricks
    });
  };

  render = () => {
    return (
      <div className="wall-container">
        {this.state.bricks.map((brick) => {
          return <Brick key={brick} name={brick} />;
        })}

        <button className="add-btn" onClick={this.addBrick}>
          +
        </button>
      </div>
    );
  };
}

export default Wall;
