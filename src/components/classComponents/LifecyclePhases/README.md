# Lifecycle Phase

In React, components have a lifecycle that consists of different phases.
Each phase has a set of lifecycle methods that are called at specific points in the component's lifecycle.
These methods allow you to control the component's behavior and perform specific actions at different stages of its lifecycle.
A component's lifecycle has three main phases: the Mounting Phase, the Updating Phase, and the Unmounting Phase. 

## Component Mounting Phase

The mounting phase refers to the period when a component is being created and inserted into the DOM.
#### constructor()
#### render()
#### getDerivedStateFromProps()

## Component Updating Phase

This phase occurs when a component's props or state changes, and the component needs to be updated in the DOM.

#### shouldComponentUpdate()
#### componentWillUpdate()
#### componentDidUpdate()
#### getSnapshotBeforeUpdate()

## Component Unmounting Phase
The unmounting phase refers to the lifecycle stage when a component is being removed from the DOM (Document Object Model) and is no longer rendered or accessible.
#### componentWillUnmount()