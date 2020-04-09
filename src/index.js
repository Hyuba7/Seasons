import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import	Spinner	from	'./Spinner';

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

		renderContent	()	{
			//位置情報が取得できなかった場合
			if (this.state.errorMessage && !this.state.lat) {
				return <div>エラー: {this.state.errorMessage}</div>;
			}
			//位置情報を取得した場合
			if (!this.state.errorMessage && this.state.lat) {
				return <SeasonDisplay lat={this.state.lat} />;
			}
			//ローディング画面
			return <Spinner	message="位置情報の使用を許可してください"/>;
		}

  render() {
	return <div className="border	red">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector(`#root`));
