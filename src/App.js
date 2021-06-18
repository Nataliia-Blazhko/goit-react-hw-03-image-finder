import { Component } from "react";
import { Searchbar } from "./components/searchbar/Searchbar";
import { ImageGallery } from "./components/imagegallery/ImageGallery";
import { Button } from "./components/button/Button";
import { Modal } from "./components/modal/Modal";
import "./styles.scss";
import Loader from "react-loader-spinner";
import apiService from "./apiService";

class App extends Component {
  state = {
    images: [],
    isLoading: false,
    query: "",
    page: 1,
    isModalOpen: false,
    fullImageUrl: "",
  };

  componentDidMount() {
    this.updateImages(this.state.query, true);
  }

  toggleModal = () => {
    this.setState(({ isModalOpen }) => ({
      isModalOpen: !isModalOpen,
    }));
  };

  updateImages(query, newQuery = false) {
    this.setState(
      (prevState) => {
        return {
          query: query,
          page: newQuery ? 1 : prevState.page + 1,
          isLoading: true,
        };
      },
      () => {
        apiService.fetchImages(query, this.state.page).then((response) => {
          this.setState((prevState) => {
            if (newQuery) {
              return {
                images: [...response.data.hits],
                isLoading: false,
              };
            } else {
              return {
                images: [...prevState.images, ...response.data.hits],
                isLoading: false,
              };
            }
          });
        });
      }
    );
  }

  searchQuery = (query) => {
    this.updateImages(query, true);
  };

  nextPage = () => {
    this.updateImages(this.state.query);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  showFullImage = (fullImage) => () => {
    this.setState((prevState) => {
      return {
        fullImageUrl: fullImage,
      };
    });
    this.toggleModal();
  };

  render() {
    return (
      <>
        <Searchbar searchQuery={this.searchQuery} />
        <ImageGallery
          list={this.state.images}
          showFullImage={this.showFullImage}
          openModal={this.toggleModal}
        />
        {this.state.isModalOpen && (
          <Modal open={this.toggleModal} fullImage={this.state.fullImageUrl} />
        )}

        {this.state.isLoading ? (
          <Loader type="ThreeDots" color="#00BFFF" height={100} width={100} />
        ) : (
          <Button nextPage={this.nextPage} />
        )}
      </>
    );
  }
}

export default App;
