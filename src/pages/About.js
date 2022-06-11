import React, { Component } from 'react';
import "./About.css";
import profile_pic from "./assets/profile_pic.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        <div class="split left">
          <div className="centered">
            <img className="profile_image" src={profile_pic} alt="Profile Pic"></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">About me/Nancy Ching</div>
            <div className="brief_description">
              <p>Computer Science Student at American University (2024)</p>
              <hr></hr>
              <p>A little about myself:</p>
              <ul>
                <li>I love coding and one day would like to be a Software Engineer.</li>
                <li>I love video games and also one day want to program an app or game.</li>
                <li>I love IBM Accelerate!</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}