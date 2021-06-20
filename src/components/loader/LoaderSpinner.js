import { Component } from "react";
import Loader from "react-loader-spinner";

export default class LoaderSpinner extends Component {
  render() {
    return (
      <div className="loader">
        <Loader
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}
          type="ThreeDots"
        />
      </div>
    );
  }
}
