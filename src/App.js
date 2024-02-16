import "./App.css";
import Form from "./Components/Form";
import { uid } from "uid";
import List from "./Components/List";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [activities, setActivities] = useLocalStorageState("Activities", {
    defaultValue: [],
  });

  const isGoodWeather = false;

  function handleAddActivity(data) {
    const newActivity = {
      ...data,
      id: uid(),
      isForGoodWeather: data.isForGoodWeather === "on" ? true : false,
    };
    setActivities([...activities, newActivity]);
  }

  const filterActivities = activities.filter(
    (activity) => activity.isForGoodWeather === isGoodWeather
  );

  console.log(filterActivities);

  return (
    <>
      <h1>
        {isGoodWeather
          ? "Activities for Good Weather"
          : "Activities for Bad Weather"}
      </h1>
      <List activities={filterActivities} />
      <Form onAddActivity={handleAddActivity} isGoodWeather={isGoodWeather} />
    </>
  );
}

export default App;
