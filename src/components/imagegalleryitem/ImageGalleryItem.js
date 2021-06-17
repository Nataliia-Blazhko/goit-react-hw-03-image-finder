import { Component } from "react";

export default class ImageGalleryItem extends Component {
  render() {
    return (
      <li className="ImageGalleryItem">
        <img
          onClick={() => this.props.openModal(this.props.largeImageURL)}
          src={this.props.webformatURL}
          alt=""
          className="ImageGalleryItem-image"
        />
      </li>
    );
  }
}
