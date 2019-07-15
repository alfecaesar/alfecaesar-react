import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>

      <nav class="menu" id="theMenu">
          <div class="menu-wrap">
              <i class="fa fa-bars menu-close"></i>
              <div id="menu-logo">
                <h2> <img src="img/logo.png" alt="Alfe Caesar Lagas" /> alfecaesar</h2>
              </div>

              <ul id="main-menu">
                <li><a href="#headerwrap">Home <i class="fa fa-home menu-icon"></i></a></li>
                <li><a href="#about">About Me <i class="fa fa-question-circle menu-icon"></i></a></li>
                <li><a href="#services">Skills <i class="fa fa-gears menu-icon"></i></a></li>
                <li><a href="#portfolio">Portfolio <i class="fa fa-camera menu-icon"></i></a></li>            	
                <li><a href="#contact-us">Contact <i class="fa fa-envelope menu-icon"></i></a></li>
              </ul>

              <ul id="social-icons">
                  <li class="facebook"><a href="#"><i class="fa fa-facebook"></i></a></li>
                  <li class="twitter"><a href="#"><i class="fa fa-twitter"></i></a></li>
                  <li class="dribbble"><a href="#"><i class="fa fa-dribbble"></i></a></li>
              </ul>
          </div>
      </nav>

      </div>
    )
  }
}