import React, { Component, useState } from "react";

class Tooltip extends Component {
  state = {
    xPosition: 0,
    yPosition: 0,
    mouseMoved: false,
    listenerActive: false
  };

  componentDidMount() {
    this.addListener();
  }

  componentDidUpdate() {
    if (!this.state.listenerActive && this.props.visible) {
      this.addListener();
    }

    if (this.state.listenerActive && !this.props.visible) {
      this.removeListener();
    }
  }

  componentWillUnmount() {
    this.removeListener();
  }

  onMouseMove = ({ clientX: xPosition, clientY: yPosition }) => {
    this.setState({
      xPosition,
      yPosition,
      mouseMoved: true
    });
  };

  addListener = () => {
    document.addEventListener("mousemove", this.onMouseMove);
    this.setState({ listenerActive: true });
  };

  removeListener = () => {
    document.removeEventListener("mousemove", this.onMouseMove);
    this.setState({ listenerActive: false });
  };

  render() {
    return (
      <div
        className={this.props.className}
        style={{
          display: this.props.visible && this.state.mouseMoved ? "block" : "none",
          position: "fixed",
          top: this.state.yPosition + this.props.offsetY,
          left: this.state.xPosition + this.props.offsetX,
          ...this.props.style
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default function TooltipImg(props) {
  const [visible, setVisible] = useState(false);

  return <div>
    <img
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      {...props}
    />
    <Tooltip
      visible={visible}
      offsetX={15}
      offsetY={10}
      style={{
        zIndex: "1",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        padding: "6px",
        borderRadius: "4px",
        color: "rgb(255, 255, 255)"
      }}
    >
      <span>{props.tooltip}</span>
    </Tooltip>
    {props.children}
  </div>;
}
