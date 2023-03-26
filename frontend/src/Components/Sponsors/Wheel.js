import React, { Component } from "react";
import SponsorsCard from "./SponsorsCard";
import "./Sponsors.css";

export default class Wheel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      radius: 1800,
      cards: [],
      theta: 0.0,
    };

    this.imageList = props.Images;
    this.tempTheta = 0.0;
    this.animId = null;
  }

  componentDidMount() {
    let centerOfWheel = {
      x: parseFloat(this.wheel.style.width) / 2.0,
      y: parseFloat(this.wheel.style.height) / 2.0,
    };

    let newCards = [];

    let numCards = 32;
    let constant = numCards / 2;

    for (let i = 0; i < numCards; i++) {
      newCards.push(
        <SponsorsCard
          theta={(Math.PI / parseFloat(constant)) * i}
          radius={this.state.radius}
          center={centerOfWheel}
          key={`card_${i}`}
          image={this.imageList[i]}
        />
      );
    }

    this.setState({ cards: newCards });
  }
  render() {
    return (
      <>
        <div
          ref={(refId) => (this.wheel = refId)}
          style={Styles.Wheel}
          className="SponsorsWheel z-0"
        >
          {this.state.cards}
        </div>
        <div
          className="mt-[50px] xs:mt-[20px] sm:mt-80px] md:mt-[30px] lg:mt-[10px] 2xl:mt-[30px]"
          style={Styles.heading}
        >
          {/* <h3 style={Styles.text.smallhead}>OUR SPONSORSHIPS</h3> */}
          <h1
            className="japanFont text-[9vw] lg:text-[5vw] xl:text-[5vw] 2xl:text-[5vw]"
            style={Styles.text.largehead}
          >
            OFFICIAL SPONSORS
          </h1>
        </div>
      </>
    );
  }
}

const Styles = {
  Wheel: {
    position: "absolute",
    top: "65%",
    left: "50%",
    transform: "translate( -50%, -100%)",
    height: "3600px",
    width: "3600px",
    borderRadius: "50%",
    backgroundColor: "#927071",
    overflowLeft: "hidden",
  },
  heading: {
    position: "absolute",
    top: "50%",
    paddingBottom: "15vh",
    left: "50%",
    transform: "translate( -50%, -100%)",
    textAlign: "center",
  },
  text: {
    smallhead: {
      color: "white",
      fontSize: "2vw",
      fontWeight: "bold",
    },
    largehead: {
      color: "white",
      fontWeight: "bold",
    },
  },
};
