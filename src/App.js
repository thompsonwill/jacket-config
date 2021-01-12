import React from "react";
import logo from "./logo.svg";
import "antd/dist/antd.css";
import "./style.scss";
import "./App.css";
import { VPMap } from "./config/VPMap";
import { PageHeader, Radio, Input, Menu, Dropdown, Button, Tabs } from "antd";
import ImageGallery from "react-image-gallery";

class App extends React.Component {
  setImages() {
    this.setState({
      images: [
        {
          original: VPMap[this.state.suit + "-" + this.state.int].open,
          thumbnail: VPMap[this.state.suit + "-" + this.state.int].open,
        },
        {
          original: VPMap[this.state.suit + "-" + this.state.int].personal,
          thumbnail: VPMap[this.state.suit + "-" + this.state.int].personal,
        },
        {
          original: VPMap[this.state.suit + "-" + this.state.int].roll,
          thumbnail: VPMap[this.state.suit + "-" + this.state.int].roll,
        },
      ],
    });
  }

  handleClick = (e) => {
    this.setState(
      {
        [e.target.id]: e.target.value,
      },
      () => {
        this.setImages();
      }
    );
  };

  state = {
    suit: "Black",
    int: "FloralNavy",
    images: [
      {
        original: VPMap["Black" + "-" + "FloralNavy"].open,
        thumbnail: VPMap["Black" + "-" + "FloralNavy"].open,
      },
      {
        original: VPMap["Black" + "-" + "FloralNavy"].personal,
        thumbnail: VPMap["Black" + "-" + "FloralNavy"].personal,
      },
      {
        original: VPMap["Black" + "-" + "FloralNavy"].roll,
        thumbnail: VPMap["Black" + "-" + "FloralNavy"].roll,
      },
    ],
  };
  render() {
    return (
      <div className="App">
        <div>
          <div className="config-container">
            <div className="mtl-btn-container" id="test">
              <b>Suit Material</b>
              <div>
                <Radio.Group defaultValue="Black">
                  <Radio.Button onClick={this.handleClick} value={"Black"} id="suit">
                    Black Pindot
                  </Radio.Button>
                  <Radio.Button
                    onClick={this.handleClick}
                    value={"BrightBlue"}
                    id="suit"
                  >
                    Bright Blue
                  </Radio.Button>
                  <Radio.Button
                    onClick={this.handleClick}
                    value={"GreyPlaid"}
                    id="suit"
                  >
                    Grey Plaid
                  </Radio.Button>

                  <Radio.Button
                    onClick={this.handleClick}
                    value={"Sharkskin"}
                    id="suit"
                  >
                    Sharkskin
                  </Radio.Button>
                  <Radio.Button onClick={this.handleClick} value={"Wine"} id="suit">
                    Wine
                  </Radio.Button>
                </Radio.Group>
              </div>
            </div>

            <div className="int-btn-container" style={{ marginBottom: "5px" }}>
              <b>Interior Material</b>
              <div>
                <Radio.Group defaultValue="FloralNavy">
                  <Radio.Button
                    onClick={this.handleClick}
                    value={"FloralNavy"}
                    id="int"
                  >
                    Floral Navy
                  </Radio.Button>
                  <Radio.Button
                    onClick={this.handleClick}
                    value={"FloralPurple"}
                    id="int"
                  >
                    Floral Purple
                  </Radio.Button>
                  <Radio.Button
                    onClick={this.handleClick}
                    value={"NavyWhiteDot"}
                    id="int"
                  >
                    Navy White Dot
                  </Radio.Button>

                  <Radio.Button
                    onClick={this.handleClick}
                    value={"Surfside"}
                    id="int"
                  >
                    Surfside
                  </Radio.Button>
                  <Radio.Button onClick={this.handleClick} value={"Taupe"} id="int">
                    Taupe
                  </Radio.Button>
                </Radio.Group>
              </div>
            </div>
          </div>
          <ImageGallery items={this.state.images} showPlayButton={false} />
        </div>
      </div>
    );
  }
}

export default App;
