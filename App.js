import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Form from './components/Form';

const API_KEY = 'f5ef3bc4ab139b60cb8861e28a726329'

class App extends Component {
	state = {
		temp: '',
		windSpeed: '',
		pressure: '',
		minTemp: '',
		city: '',
		countryCode: '',
		weather: ''
	}

	fetchData = () => {
		this.fetchCityData(this.state.city)
	}

	fetchCityData = async city => {
		const url = `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
		const api_call = await fetch(url);

		const response = await api_call.json();
		console.log(response);

		this.setState({
			temp: response.main.temp,
			windSpeed: response.wind.speed,
			pressure: response.main._min,
			minTemp: response.main.pressure,
			countryCOde: response.sys.country,
			weather: response.weather[0].main
		});
	}

	render() {
		// console.log('Current Text', this.state.city);
		const { temp, windSpeed, pressure, minTemp, countryCode, weather, city } = this.state
		return (
			<View style={styles.container}>
				<Form
					onSubmit={this.fetchData}
					onChangeText={text => this.setState({ city: text })}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default App;