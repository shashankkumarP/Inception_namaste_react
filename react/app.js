const code = React.createElement("h1",{id:"heading",xyz:"abc"},"Hello from react");
    const root = ReactDOM.createRoot(document.getElementById("rt"));

    console.log(code) // object , This  is object it is react element, we are creating react h1 element.
    root.render(code);
