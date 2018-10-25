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

    constructor(props){
        super(props);
        this.state = {
            renderUtil: false
        };
    }
    render() {
        const { transcript, resetTranscript, browserSupportsSpeechRecognition } = this.props
    
        if (!browserSupportsSpeechRecognition) {
            return null
        }

        if(this.state.renderUtil){
            return <div>
                <div className="render-speech">
                  <button
                    onClick={() =>
                      this.setState({ ["renderUtil"]: false })
                    }
                  >
                    Text Input
                  </button>
                </div>
                <div className="reset-speech-input">
                  <button onClick={resetTranscript}>
                    Reset
                  </button>
                </div>
                <div className="speech-input">{transcript}</div>
              </div>;
        } else {
            return (
                <div className="render-speech">
                    <button onClick={()=>this.setState({['renderUtil']: true})}>
                        Vocal Input
                    </button>
                </div>
            )
        }
    }
}

Dictaphone.propTypes = propTypes

export default SpeechRecognition(Dictaphone)