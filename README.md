# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React applications involving the `useEffect` hook.  Specifically, it showcases an infinite loop caused by incorrectly using an empty dependency array. The `bug.js` file contains the buggy code, while `bugSolution.js` provides the corrected version.

The issue stems from the `useEffect` hook attempting to update state without specifying dependencies, leading to continuous state changes and an infinite render loop.