import React,{Component} from "react";
import {useNavigate } from "react-router-dom";
import './Header.css'
import bgVideo from "/Users/cshilin/Documents/Cheryl's Workspace/my-app/src/images/ecommerceVideo.mp4"

export class Header extends Component {
    render() {
        return (
            <div className="welcomePage">
                {/* play video overlay here */}
                <video src = {bgVideo} autoPlay muted loop class="video-bg"/>

                {/* Welcome Text (Header and Paragraph) */}
                <div className="welcomeText">
                        <h1>Digital Menace</h1>
                        <p> Welcome To A Web System That Allows You To </p>
                        <p>Upload Documents In Pre-defined Format And Parse It. </p>
                </div>

                {/* Upload Button */}
                <button className="uploadButton" onClick={() => useNavigate('form')}>
                    Upload 
                </button>
            </div>


        );
    }
}