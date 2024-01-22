import React, { useEffect, useState } from "react";

const Child = () => {

  useEffect(() => {

    return () => {
      alert('cleaned up child');
    };
  }, [])

  return <div>
    Hello Child
  </div>
}

export const FunLifecycle = () => {

  const [counter, setCounter] = useState(0);
  const [status, setStatus] = useState('');
  const [mountState, setMountState] = useState();
  const [showChild, setShowClild] = useState(true);

  //component did mount
  useEffect(() => {
    setMountState(counter)
  }, [])

  //component will mount
  useEffect(() => {
    setStatus(`counter is updated ${counter}`)
  }, [counter])


  return (<div>

    <h3>DidMount:  {mountState}</h3>

    <button onClick={() => setCounter(counter + 1)}>increment</button>
    <h3>Didupdate:</h3>
    {status}

    <h3>UnMount:</h3>
    <button onClick={() => setShowClild(false)}>hide</button>
    <button onClick={() => setShowClild(true)}>show</button>
    {showChild && <Child />}
  </div>)

}