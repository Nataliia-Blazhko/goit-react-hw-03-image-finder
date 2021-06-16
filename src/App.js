import { Component } from "react";
import { Searchbar } from "./components/searchbar/Searchbar";
import { ImageGallery } from "./components/imagegallery/ImageGallery";
import "./styles.scss";
import Loader from "react-loader-spinner";
import axios from "axios";

class App extends Component {
  state = {
    images: [],
    isLoading: false,
  };

  componentDidMount() {
    axios
      .get(
        "https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=cat&page=1&per_page=12&key=21282104-2eb447408a79d7cba0630cd2c"
      )
      .then((response) => {
        console.log(response);
        this.setState((prevState) => {
          return {
            images: [...prevState.images, ...response.data.hits],
          };
        });
        console.log(this.state.images);
      });
  }

  render() {
    return (
      <>
        <Loader type="ThreeDots" color="#00BFFF" height={100} width={100} />
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery list={this.state.images} />
        <Modal />
      </>
    );
  }
}

export default App;
