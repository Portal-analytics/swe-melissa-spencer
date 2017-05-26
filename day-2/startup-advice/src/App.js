
import React from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const AppBarExampleIcon = () => (
  <AppBar
    title="Great Fucking Advice"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
);

class App extends React.Component {
	state = {
		clicks: 0,
		nextQuote: 0
	}

	nextQuote = () => {
		this.setState({
			clicks: this.state.clicks + 1,
			nextQuote: this.state.nextQuote + 1
		});
	}

	randomQuote = (quotes) => {
		this.setState({
			clicks: this.state.clicks + 1,
			nextQuote: Math.floor(Math.random() * quotes.length)
		});
	}

	render() {
		const advice = ['Fake it till you make it', 'Hire Spencer', 'Watch Silicon Valley', 'Hire Melissa', 'Read up on Bernie Madoff', 'Take a leap'];
		return (
			<MuiThemeProvider>
				<div>
				<AppBarExampleIcon></AppBarExampleIcon>
				<div className='program'>
					<div className='container'>
						<div>
							<h1 className='quote'>
								{advice[this.state.nextQuote % advice.length]}
							</h1>
							<div className='ButtonPanel'>
								<button
									className='button'
									onClick={(e) => this.nextQuote(e)}>
									In Order
								</button>
								<button
									className='button'
									onClick={(e) => this.randomQuote(advice, e)}>
									Random
								</button>
							</div>
						</div>
						<img className='image'
							src="https://s-media-cache-ak0.pinimg.com/736x/7d/95/94/7d95944b2401deeaa6143620d6499443.jpg"
							alt="Just Do It" />
					</div>
					<h2 className='clicks'>
						You have completed {this.state.clicks} clicks!
				</h2>
				</div>
				</div>
			</MuiThemeProvider>
		)
	}
}

export default App;