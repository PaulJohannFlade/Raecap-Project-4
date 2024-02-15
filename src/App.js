import "./App.css";
import Form from "./Components/Form";
import { useState } from "react";
import { uid } from "uid";

function App() {
  const [activities, setActivities] = useState("");

  function handleAddActivity(data) {
    setActivities({ ...data, id: uid() });
  }

  console.log(activities);

  return <Form onAddActivity={handleAddActivity} />;
}

export default App;
