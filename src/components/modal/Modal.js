import { Component } from "react";
import { createPortal } from "react-dom";

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.code === "Escape") {
      this.props.open();
    }
  };

  clickOverlayHandler = (event) => {
    if (event.currentTarget === event.target) {
      this.props.open();
    }
  };

  render() {
    return createPortal(
      <div className="Overlay" onClick={this.clickOverlayHandler}>
        <div className="Modal">
          <img src={this.props.fullImage} alt="" />
        </div>
      </div>,
      document.querySelector("#modal-root")
    );
  }
}
