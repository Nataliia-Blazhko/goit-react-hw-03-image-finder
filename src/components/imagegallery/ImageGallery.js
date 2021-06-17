import { Component } from "react";
import ImageGalleryItem from "../imagegalleryitem/ImageGalleryItem";
import {Modal} from "../modal/Modal"
import {createPortal} from "react-dom";

export class ImageGallery extends Component {
  state={
    largeImage:'',
    isModalOpen:false,
  }



  openModal=(largeImage)=>{
    this.setState({
      largeImage:largeImage, 
      isModalOpen:true
    })
    
  }


  render() {
    
    return (
      <ul className="ImageGallery">
        {this.props.list.map((item) => (
          <ImageGalleryItem
            openModal={this.openModal}
            key={item.id}
            id={item.id}
            webformatURL={item.webformatURL}
            largeImageURL={item.largeImageURL}
          />
        ))}
        {createPortal(<Modal largeImage={this.state.largeImage} isModalOpen={this.state.isModalOpen} />, document.querySelector("#modal-root"))}
      </ul>
    );
  }
}
