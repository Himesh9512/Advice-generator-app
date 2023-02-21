import React from "react";
import DividerMobile from "./images/pattern-divider-mobile.svg";
import DividerDesktop from "./images/pattern-divider-desktop.svg";
import Dice from "./images/icon-dice.svg";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			id: 117,
			advice:
				"It is easy to sit up and take notice, what's difficult is getting up and take action.",
		};
	}
	updateCardData = ({ id, advice }) => this.setState({ id: id, advice: advice });
	handleClick = async () => {
		let response = await fetch("https://api.adviceslip.com/advice");
		let data = await response.json();
		this.updateCardData(data.slip);
	};
	render() {
		return (
			<div className="bg-secondary-dark-blue w-screen h-screen flex justify-center items-center">
				<div className="bg-secondary-grayish-blue-dark max-sm:w-11/12 max-sm:m-auto flex flex-col items-center justify-between h-2/5 font-bold p-5 rounded-xl pb-0 w-2/5 sm:min-w-[400px] max-w-[500px] max-h-[300px] min-h-[250px]">
					<span className="text-primary-neon-green">ADVICE #{this.state.id}</span>
					<blockquote className="text-center text-ctm text-primary-cyan-light">
						"{this.state.advice}"
					</blockquote>
					<div>
						<img src={DividerMobile} alt="divider" className="max-sm:block hidden"></img>
						<img src={DividerDesktop} alt="divider" className="max-sm:hidden block"></img>
					</div>
					<button
						onClick={this.handleClick}
						className="bg-primary-neon-green h-16 w-16 flex justify-center items-center relative top-9 rounded-full hover:shadow-custom">
						<img alt="dice" src={Dice}></img>
					</button>
				</div>
			</div>
		);
	}
}

export default App;
