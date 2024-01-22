import React, { Component } from "react";
import ConstructorRender from "./ConstructorRender";
import { DidMountDerivedStateProps } from "./DidMountDerivedStateProps";
import DidUpdate from "./DidUpdate";
import { ShouldUpdate } from "./ShouldUpdate";
import { Snapshoot } from "./SnapShoot";
import { WillUnmount } from "./WillUnmount";
import { WillUpdate } from "./WillUpdate";

export default class LifecycleMethods extends Component {

  render() {
    const styles = { border: "1px solid black", padding: "10px", margin: "10px", width: "50%" }

    return (<div>

      <h1>React Lifecycle Phase</h1>
      <h3>Component Mounting Phase</h3>
      <div style={{ display: "flex" }}>
        <div style={styles}>
          <h5>Constructor() & Render() </h5> <ConstructorRender />
        </div>
        <div style={styles}>
          <h5>getDerivedStateFromProps()</h5> <DidMountDerivedStateProps favfod={"hello"} />
        </div>
      </div>

      <h3>Component Updating Phase</h3>
      <div style={{ display: "flex" }}>
        <div style={styles}>
          <h5>shouldComponentUpdate()</h5> <ShouldUpdate />
        </div>
        <div style={styles}>
          <h5>componentWillUpdate()</h5><WillUpdate />
        </div>
        <div style={styles}>
          <h5>componentDidUpdate()</h5><DidUpdate />
        </div>
        <div style={styles}>
          <h5>getSnapshotBeforeUpdate()</h5><Snapshoot />
        </div>
      </div>

      <h3>Component Unmount Phase</h3>
      <div style={{ ...styles, width: "100%" }}>
        <h5>componentWillUnmount()</h5> <WillUnmount />
      </div>
    </div>
    )
  }
}