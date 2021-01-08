import React from 'react';
import Timer from './Timer'

class PomodoroTimer extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			workTime: 25,
			breakTime: 5,
			intervalType : "Trabajando",
		}
	}

	// handles completion of timer
	handleTimerCompleted = () => {
		if(this.state.intervalType === "Trabajando")
		{
			this.setState({
				intervalType: "Descanso"
			})
		}
		else
		{
			this.setState({
				intervalType: "Trabajando"
			})	
		}
	}


	// called to set the timer's time
	handleTime = () => {
		if(this.state.intervalType === "Trabajando")
		{
			return this.state.workTime
		}
		else
		{
			return this.state.breakTime
		}
	}

	render() {
		let time= this.handleTime()
		return (
				<Timer
					intervalType={this.state.intervalType}
					Oncomplete={this.handleTimerCompleted}
					period={time}
				/>
			)
	}
}

export default PomodoroTimer;