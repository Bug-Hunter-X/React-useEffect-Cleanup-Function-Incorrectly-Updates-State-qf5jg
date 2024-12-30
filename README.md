# React useEffect Cleanup Function Incorrectly Updates State

This example demonstrates a common error in React's `useEffect` hook: attempting to update state within the cleanup function.  The cleanup function's purpose is to perform side effects necessary before the component unmounts or when the effect changes (such as cleanup of event listeners or timers).  It should not modify the component's state.

The `bug.js` file shows the incorrect implementation. The solution, `bugSolution.js`, demonstrates the proper approach, showing how to perform cleanup operations without modifying the state.