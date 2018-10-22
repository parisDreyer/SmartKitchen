import React, { PropTypes, Component } from 'react'
import SpeechRecognition from 'react-speech-recognition'


const defaultPropTypes = {
    transcript: '',
    resetTranscript: () => {},
    browserSupportsSpeechRecognition: false
}

const propTypes = PropTypes ? {
    // Props injected by SpeechRecognition
    transcript: PropTypes.string,
    resetTranscript: PropTypes.func,
    browserSupportsSpeechRecognition: PropTypes.bool
} : defaultPropTypes;

class Dictaphone extends Component {
    render() {
        const { transcript, resetTranscript, browserSupportsSpeechRecognition } = this.props

        if (!browserSupportsSpeechRecognition) {
            return null
        }

        return (
            <div>
                <button onClick={resetTranscript}>Reset</button>
                <span>{transcript}</span>
            </div>
        )
    }
}

Dictaphone.propTypes = propTypes

export default SpeechRecognition(Dictaphone)