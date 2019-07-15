import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div>

      <div id="footerwrap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <h4 class="widget-title">Global Coverage</h4>
                        <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                    </div>
                    <div class="col-lg-4">
                        <h4 class="widget-title">Find Me</h4>
                        <p> Misamis Occidental, Philippines<br/>
                        P: <a href="tel:639153767972">+63 915 376 7972</a><br/>
                        E: <a href="mailto:alfecaesar@gmail.com">alfecaesar@gmail.com</a>
                        </p>
                    </div>
                </div>
            </div>
            <div id="footer-copyright">
                <div class="container">
                    © Alfe Caesar Lagas 2018
                </div>
            </div>
	    </div>
	
	<a id="gototop" class="gototop no-display" href="#"><i class="fa fa-angle-up"></i></a>

      </div>
    )
  }
}