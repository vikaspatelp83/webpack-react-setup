import React, { Component } from "react";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			msg: "welcome",
		};
	}

	render() {
		return <h1>{this.state.msg}</h1>;
	}
}

export default App;
