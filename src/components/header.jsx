import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div>

      <div id="headerwrap">
        <div class="container">
          <div class="row">
            <div id="bannertext" class="col-lg-9 col-lg-offset-2">
              <h1 class="fade-down gap">Alfe Caesar Lagas</h1>
              <h2 class="fade-up">Front-end Web Developer</h2>
              <div class="spacer"></div>			
            </div>
          </div>
        </div>
        <span class="headerwrap-btn-wrap">
          <a href="#content-wrapper" class="headerwrap-btn"><i class="fade-up fa fa-angle-down"></i></a>
        </span>	
      </div>
      </div>
    )
  }
}