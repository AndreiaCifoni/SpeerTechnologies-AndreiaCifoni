import React from "react";
import "./css/body.css";
import ActivityArchive from "./components/ActivityArchive";
import ActivityList from "./components/ActivityList";

const HomePage = ({ isArchivePage }) => {
  return <div>{isArchivePage ? <ActivityArchive /> : <ActivityList />}</div>;
};

export default HomePage;
