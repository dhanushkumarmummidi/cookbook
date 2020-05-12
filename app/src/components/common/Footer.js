
import React from "react";
import "./footer.css";
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    render() {
        return (

            <div className="Parent_error_class">
        
        
                    <footer className="new_footer_area bg_color">
                       
                        <div className="footer_bottom">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-6 col-sm-7">
                                        <p className="mb-0 f_400">© ISI Inc.. 2020 All rights reserved.</p>
                                    </div>
                                    <div className="col-lg-6 col-sm-5 text-right">
                                        <p>Made <i className="icon_heart"></i> by <a href="#">Team RED-COOKBOOK</a></p>
                                    </div>
                                    <div className="col-lg-6 col-sm-5 text-right">
                                        <p><Link to="/"><a href="" class="loginhere-link">LOGOUT</a></Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>

                );
              }
            }
            export default Footer;
