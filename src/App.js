import { Component } from "react";
import { Searchbar } from "./components/searchbar/Searchbar";
import { ImageGallery } from "./components/imagegallery/ImageGallery";
import { Button } from "./components/button/Button";
import { Modal } from "./components/modal/Modal";
import "./styles.scss";
import apiService from "./apiService";
import LoaderSpinner from "./components/loader/LoaderSpinner";

class App extends Component {
  state = {
    images: [],
    isLoading: false,
    query: "",
    page: 1,
    isModalOpen: false,
    fullImageUrl: "",
    perPage: 12,
    totalPages: 0,
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
        query
          ? apiService
              .fetchImages(query, this.state.page, this.state.perPage)
              .then((response) => {
                this.setState((prevState) => {
                  if (newQuery) {
                    return {
                      images: [...response.data.hits],
                      isLoading: false,
                      totalPages: response.data.totalHits / this.state.perPage,
                    };
                  } else {
                    return {
                      images: [...prevState.images, ...response.data.hits],
                      isLoading: false,
                    };
                  }
                });
              })
          : this.setState({ images: [] });
      }
    );
    this.scrollTo();
  }

  scrollTo = () => {
    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }, 750);
  };

  searchQuery = (query) => {
    this.updateImages(query, true);
  };

  nextPage = () => {
    this.updateImages(this.state.query);
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

        {this.state.isLoading && this.state.query ? (
          <LoaderSpinner />
        ) : (
          this.state.page <= this.state.totalPages && (
            <Button nextPage={this.nextPage} />
          )
        )}
      </>
    );
  }
}

export default App;
