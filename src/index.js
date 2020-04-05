import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
	
	
	state = { lat: null,	errorMessage:''};
		
		


		componentDidMount()	{
			window.navigator.geolocation.getCurrentPosition(
				position =>	this.setState({lat:position.coords.latitude}),
				err => this.setState({errorMessage: err.message})
				);
		}

		componentDidUpdate()	{
			console.log('')
		}
	
	
	render() {
		//位置情報が取得できなかった場合
		if(this.state.errorMessage && !this.state.lat)	{
		return	<div>エラー:	{this.state.errorMessage}</div>;
		}
		//位置情報を取得した場合
		if(!this.state.errorMessage && this.state.lat)	{
		return	<SeasonDisplay  lat={this.state.lat}	/>
		}
			//ローディング画面
		return	<div>読み込み中</div>

	}
}

ReactDOM.render(
	<App/>, 
	document.querySelector(`#root`));