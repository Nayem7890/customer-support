1. What is JSX, and why is it used?

=> JSX(Javascript XML) is syntax extension in which you can write HTML-like code directly into JavaScript.

The reason is, it keeps component structure readable and you can directly extract values from props in an efficient way to create your React elements.

2. What is the difference between State and Props?
=> State:-  Controlled within the component (private data). Can be changed (dynamic).

Props: - Passed from outside (that is parent child). Are read-only (immutable).

3. What is the useState hook, and how does it work?
=> A React hook that allows you to add state (a.k.a. dynamic data) to functional components.

It will return array: [currentStateValue, setstateFunction]. Invoking the setter function will set the given state and cause a React re-renering.

4. How can you share state between components in React?
=> The first technique is Lifting State Up: move state into the closest common ancestor and pass it down as props.

5. How is event handling done in React?
=> Handling events with the help of functions and updated state Event Handling in React can be done using functions passed down as props to JSX elements.