let initialState = {
    start: false,
    hour: 00,
    minutes: 00,
    seconds: 00
}



const timerReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_TIMER:
            let startTimerTick = (state) => {
                if (state.seconds === 59) {
                    state.minutes += 1
                    state.seconds = 00
                } else {
                    state.seconds + 1
                }
            }
            let startTimer = setInterval(startTimerTick(state), 1000)
            return {
                startTimer
            }
            case STOP_TIMER:
                return
            case WAIT:
                return
            case RESET:
                return


    }

}

export default timerReducer