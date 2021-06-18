import { Component } from "react";
import ImageGalleryItem from "../imagegalleryitem/ImageGalleryItem";

export class ImageGallery extends Component {
  render() {
    return (
      <ul className="ImageGallery">
        {this.props.list.map((item) => (
          <ImageGalleryItem
            showFullImage={this.props.showFullImage}
            openModal={this.props.openModal}
            key={item.id}
            id={item.id}
            webformatURL={item.webformatURL}
            largeImageUrl={item.largeImageURL}
          />
        ))}
      </ul>
    );
  }
}
