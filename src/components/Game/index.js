import React, { Component } from "react";
import Controls from "./Controls/Controls";
import TextBox from "./TextBox";
import config from "../../config";

export default class Game extends Component {
  state = {
    uuid: "",
    name: "",
    title: "",
    description: "",
    players: [],
    error_msg: ""
  };

  refresh(data) {
    return this.setState({
      uuid: data.uuid,
      name: data.name,
      title: data.title,
      description: data.description,
      players: data.players,
      error_msg: data.error_msg
    });
  }

  movePlayer = direction => {
    config
      .axiosHeaders()
      .post("/api/adv/move", { direction })
      .then(res => {
        console.log(res);
        return this.refresh(res.data);
      })
      .catch(err => console.log(err));
  }

  componentDidMount() {
    config
      .axiosHeaders()
      .get("/api/adv/init/")
      .then(res => this.refresh(res.data))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="nes-container">
        <Controls move={this.movePlayer} />
        <TextBox info={this.state} />
      </div>
    );
  }
}
