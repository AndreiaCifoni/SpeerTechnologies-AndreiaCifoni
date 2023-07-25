import React from "react";
import ReactDOM from "react-dom";

import Header from "./Header.jsx";
import ActivityList from "./components/ActivityList.js";

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="container-view">
        <ActivityList />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
