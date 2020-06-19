import React, { Component } from 'react';
import CatComponent, './CatComponent.js';
import MouseComponent, './MouseComponent.js';
import GraceHopperQuoteComponent, './GraceHopperQuoteComponent.js';

class App extends Component {
	render() {
		// your code in the return statement below!
		return (
			<div className="App">
				<CatComponent />
				<GraceHopperQuoteComponent />
				{/* one more component missing */}
			</div>
		);
	}
}

export default App;
