import React, { Component } from "react";
import Controls from "./Controls/Controls";
import config from "../../config";

export default class Game extends Component {
  state = {
    uuid: "",
    name: "",
    title: "",
    description: "",
    players: []
  };

  movePlayer(direction) {
    config
      .axiosHeaders()
      .post("/api/adv/move", { direction })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  componentDidMount() {
    config
      .axiosHeaders()
      .get("/api/adv/init/")
      .then(res => {
        const { data } = res;
        this.setState({
          uuid: data.uuid,
          name: data.name,
          title: data.title,
          description: data.description,
          players: data.players
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return <Controls move={this.movePlayer} />;
  }
}
