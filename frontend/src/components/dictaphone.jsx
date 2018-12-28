import React, { PropTypes, Component } from 'react'
import SpeechRecognition from 'react-speech-recognition'


const defaultPropTypes = {
    transcript: () => '',
    resetTranscript: () => {},
    browserSupportsSpeechRecognition: () => false
}

const propTypes = PropTypes ? {
    // Props injected by SpeechRecognition
    transcript: PropTypes.string,
    resetTranscript: PropTypes.func,
    browserSupportsSpeechRecognition: PropTypes.bool,
    listening: PropTypes.bool,
    startListening: PropTypes.func,
    stopListening: PropTypes.func
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

    switchRenderUtil(takeSpeechInput, resetAction){
        if (takeSpeechInput) {
            this.props.stopListening();
            resetAction();
        } else this.props.startListening();

        window.isRenderingSpeechInput = takeSpeechInput;
        this.setState({ ["renderUtil"]: takeSpeechInput });
    }

    
    render() {
        const { 
            transcript, 
            resetTranscript, 
            browserSupportsSpeechRecognition,
            listening,
            // startListening,
            stopListening
        } = this.props;
        window.speechRecogTranscript=transcript;
        if (!browserSupportsSpeechRecognition) {
            return null
        }

        if(window.location.hash === "#/search"){ //.toString().includes("/search")) {

            const fa = this.state.renderUtil ? <i className="fa fa-square" aria-hidden="true" /> : <i className="fas fa-microphone" />;
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
            // if (transcript.length > 0) resetTranscript();
            // if (this.state.renderUtil) this.setRenderUtilToFalse();
            if(listening) stopListening();
            return null;
        }
    }
    
    setRenderUtilToFalse() {
        this.setState({ ["renderUtil"]: false });
    }
}


const options = {
    autoStart: false
};

Dictaphone.propTypes = propTypes


export default SpeechRecognition(options)(Dictaphone)