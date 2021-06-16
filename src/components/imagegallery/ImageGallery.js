import { Component } from "react";
import ImageGalleryItem from "../imagegalleryitem/ImageGalleryItem";

export class ImageGallery extends Component {
  render() {
    return (
      <ul className="ImageGallery">
        {this.props.list.map((item) => (
          <ImageGalleryItem
            id={item.id}
            webformatURL={item.webformatURL}
            largeImageURL={item.largeImageURL}
          />
        ))}
      </ul>
    );
  }
}
