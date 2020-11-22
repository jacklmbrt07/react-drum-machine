import { Component } from "react";

class Box extends Component {
  render() {
    const { text, audio } = this.props;
    return (
      <div className="box">
        {text}
        <audio src={audio} className="click" id={text} />
      </div>
    );
  }
}

export default Box;
