import React, { Component, useState } from "react";

export default class SidePanel extends Component {
  
  render() {
    
    return (
      <div className="sidePanel">
        <div className="editor-title">File Explorer</div>
        <div className="list" onClick={() => this.props.togglePages("Html")}>
          index.html
        </div>
        <div className="list" onClick={() => this.props.togglePages("Css")}>
          index.css
        </div>
        <div className="list" onClick={() => this.props.togglePages("Js")}>
          index.js
        </div>
      </div>
    );
  }
}
