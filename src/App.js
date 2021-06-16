import { Component } from "react";
import { Searchbar } from "./components/searchbar/Searchbar";
import "./styles.scss";
import Loader from "react-loader-spinner";
import axios from "axios";

class App extends Component {
  state = {
    images: [],
    isLoading: false,
  };

  getImages = (query) => {
    const BASE_URL = "https://pixabay.com/api/";
    const API_KEY = "21282104-2eb447408a79d7cba0630cd2c";
    axios
      .get(
        `${BASE_URL}?image_type=photo&orientation=horizontal&q=${query}&page=${1}&per_page=12&key=${API_KEY}`
      )
      .then((response) => {
        console.log(response);
        this.setState({
          images: [...response.hits],
          isLoading: false,
        });
      });
  };

  // componentDidMount() {
  onSubmit = (query) => {
    console.log(query);
    this.getImages(query);
  };
  //   this.setState({ isLoading: true });
  // }

  render() {
    return (
      <>
        <Loader type="ThreeDots" color="#00BFFF" height={100} width={100} />
        <Searchbar onSubmit={this.onSubmit} />
      </>
    );
  }
}

export default App;
