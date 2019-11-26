import React from 'react';
import ReactDOM from 'react-dom';
import WaveSurfer from 'wavesurfer.js';


export default class Waveform extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.$el = ReactDOM.findDOMNode(this);
        this.$waveform = this.$el.querySelector('.wave');
        this.wavesurfer = WaveSurfer.create({
            container: this.$waveform,
            waveColor: 'violet',
            progressColor: 'purple'
        });
        //this.wavesurfer.load(this.props.src);
    }

    render() {
        return (
            <div className='waveform'>
              <div className='wave'></div>
            </div>
        );
    }
}
