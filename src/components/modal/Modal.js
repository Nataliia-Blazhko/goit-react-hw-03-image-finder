import { Component } from "react";

export class Modal extends Component {


  // state={
  //   isModalOpen:false,
  //   largeImage:''
  // }

  render() {
    return (
      this.props.isModalOpen && (
        <div className="Overlay">
          <div className="Modal">
            <img src={this.props.largeImage} alt="" />
          </div>
        </div>
      )
    );
  }
}
