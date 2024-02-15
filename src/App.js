import "./App.css";
import Form from "./Components/Form";
import { useState } from "react";
import { uid } from "uid";
import List from "./Components/List";

function App() {
  const [activities, setActivities] = useState("");

  function handleAddActivity(data) {
    setActivities([{ ...data, id: uid() }]);
  }

  console.log(activities);

  return (
    <>
      <List activities={activities} />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
