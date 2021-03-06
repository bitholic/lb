'use strict';

import React from 'react';
import {
	Dimensions,
	Image,
	InteractionManager,
	View,
	Text,
} from 'react-native';

import MainFrame from '../ApplicationTabs/ApplicationTabs';

var {height, width} = Dimensions.get('window');

class Splash extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		const {navigator} = this.props;
		this.timer=setTimeout(() => {
			InteractionManager.runAfterInteractions(() => {
				navigator.resetTo({
					component: MainFrame,
					name: 'AppMain'
				});
			});
		}, 2500);
	}
	componentWillUnmount() {
		this.timer && clearTimeout(this.timer);
	}

	render() {
		return (
			<View style={{flex:1}}>
				<Image
					style={{flex:1,width:width,height:height}}
					source={require('../resources/ic_welcome.jpg')}
				/>
			</View>
		);
	}
}
export default Splash;
