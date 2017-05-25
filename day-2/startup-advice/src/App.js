var React = require('react');


class App extends React.Component {
	  state = {
			clicks: 0
    }

	nextState = () => {
		this.setState({ clicks: this.state.clicks + 1 });
	}

	render() {
    const advice = ['Fake it till you make make', 'Hire Spencer', 'Watch Silicon Valley', 'Hire Melissa', 'Read up on Bernie Madoff', 'Take a leap'];
		return (
			<div className='container'>
        <div>
        <h3 > Take Some Advice </h3>
				<h1 className='quote'>
					{advice[this.state.clicks % advice.length]}
				</h1>
				<button
					className='button'
					onClick={(e) => this.nextState(e)}>
					Next
				</button>
        </div>
        <img className='image'
        src="https://sites.psu.edu/behindthememes/files/2016/09/maxresdefault-1iulwsz.jpg"
        alt="Just Do It"/>
				<h2 className='clicks'>
					You have completed {this.state.clicks} clicks!
				</h2>
			</div>
		)
	}
}

module.exports = App;