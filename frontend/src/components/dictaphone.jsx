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

    switchRenderUtil(trueOrFalse, resetAction){
        if (trueOrFalse) resetAction();
        window.isRenderingSpeechInput = trueOrFalse;
        this.setState({ ["renderUtil"]: trueOrFalse });
    }

    
    render() {
        const { transcript, resetTranscript, browserSupportsSpeechRecognition } = this.props
        window.speechRecogTranscript=transcript;
        if (!browserSupportsSpeechRecognition) {
            return null
        }

        if(window.location.hash === "#/search"){ //.toString().includes("/search")) {
            const fa = this.state.renderUtil ? <i class="fa fa-square" aria-hidden="true" /> : <i className="fas fa-microphone" />;
                return <div className="speech-options">
                <div className="render-speech">
                        <button id="switch-render-util-btn" onClick={() => this.switchRenderUtil(!this.state.renderUtil, resetTranscript)}>
                            {fa}
                        </button>
                        <div id="speech-transcript" className="speech-input">
                            {transcript}
                        </div>
                    </div>
                </div>;
        } else {
            if (transcript.length > 0) resetTranscript();
            if (this.state.renderUtil) this.setState({["renderUtil"]: false});
            return null;
        }
    }
}

Dictaphone.propTypes = propTypes

export default SpeechRecognition(Dictaphone)