import { Component, createRef } from "react";
import "./Box.css";

class Box extends Component {
  constructor(props) {
    super(props);
    this.audio = createRef();

    this.audio.current.addEventListener("ended", () => {
        const parent = audio.parentNode;

        parent.classList.remove("active");
      });
  }

  playSound = () => {
    const parent = audio.parentNode;

    this.audio.current.play();
    parent.classList.add('active')
  };

  render() {
    const { text, audio } = this.props;
    return (
      <div className="box" onClick={this.playSound} onKeyDown={this.handleKey}>
        {text}
        <audio ref={this.audio} src={audio} className="click" id={text} />
      </div>
    );
  }
}

export default Box;
