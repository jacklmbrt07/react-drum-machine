import { Component, createRef } from "react";
import "./DrumPad.css";

class DrumPad extends Component {
  state = {
    currentId: "",
  };

  constructor(props) {
    super(props);
    this.audio = createRef();
  }

  componentDidMount() {
    this.audio.current.addEventListener("ended", (e) => {
      const parent = e.target.parentNode;
      parent.classList.remove("active");
    });
  }

  playSound = () => {
    const parent = this.audio.current.parentNode;

    const id = this.audio.current.id;

    this.audio.current.play();
    parent.classList.add("active");

    const display = parent.parentNode;
    display.querySelector("h1").innerText = `${id} is playing`;
  };

  render() {
    const { text, audio } = this.props;

    return (
      <div
        className="drum-pad"
        onClick={this.playSound}
        onKeyDown={this.handleKey}
        id={`drum-${text}`}
      >
        {text}
        <audio ref={this.audio} src={audio} className="click" id={text} />
      </div>
    );
  }
}

export default DrumPad;
