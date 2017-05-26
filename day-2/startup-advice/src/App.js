
var React = require('react');
var AppBar = require('material-ui/AppBar');
var MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');
/*
function AppBarExampleIcon() {
	return (
		<AppBar
		title="Great Fucking Startup Advice"
		iconClassNameRight="muidocs-icon-navigation-expand-more"
	/>
	)
}
*/

// const AppBarExampleIcon = () => (
// );


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
							src="https://sites.psu.edu/behindthememes/files/2016/09/maxresdefault-1iulwsz.jpg"
							alt="Just Do It" />
					</div>
					<h2 className='clicks'>
						You have completed {this.state.clicks} clicks!
				</h2>
				</div>
			</MuiThemeProvider>
		)
	}
}

module.exports = App;