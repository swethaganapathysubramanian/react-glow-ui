import React from "react";
import { Input } from "./components/Input";

const App = () => (
  <div style={{ width: 640, margin: "15px auto" }}>
    <h1>Hello React</h1>
    <Input label="Email Address" placeholder="name@example.com" />
  </div>
);

export default App;
