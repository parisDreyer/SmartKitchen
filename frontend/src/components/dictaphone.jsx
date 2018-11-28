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
        this.switchRenderUtil = this.switchRenderUtil.bind(this);
        window.isRenderingSpeechInput = false;
    }

    switchRenderUtil(trueOrFalse){
        window.isRenderingSpeechInput = trueOrFalse;
        this.setState({ ["renderUtil"]: trueOrFalse });
    }

    
    render() {
        const { transcript, resetTranscript, browserSupportsSpeechRecognition } = this.props
        window.speechRecogTranscript=transcript;
        if (!browserSupportsSpeechRecognition) {
            return null
        }

        if(window.location.toString().includes("/search")) {
            if(this.state.renderUtil){
                const resetButton = <div className="reset-speech-input">
                    <button onClick={resetTranscript}>
                      <i class="fa fa-trash" aria-hidden="true" />
                    </button>
                  </div>;
                return <div className="speech-options">
                    <div className="render-speech">
                    <button onClick={() => this.switchRenderUtil(false)}>
                            <i className="fas fa-microphone-slash" />
                    </button>
                    </div>
                    {resetButton}
                    <div id="speech-transcript" className="speech-input">{transcript}</div>
                </div>;
            } else {
                return <div className="speech-options">
                <div className="render-speech">
                    <button onClick={() => this.switchRenderUtil(true)}>
                        <i className="fas fa-microphone"></i>
                    </button>
                    <div id="speech-transcript" className="speech-input">
                    {transcript}
                    </div>
                    </div>
                </div>;
            }
        } else {
            if (transcript.length > 0) resetTranscript();
            if (this.state.renderUtil) this.setState({["renderUtil"]: false});
            return null;
        }
    }
}

Dictaphone.propTypes = propTypes

export default SpeechRecognition(Dictaphone)