import "./App.css";
import Form from "./Components/Form";
import { uid } from "uid";
import List from "./Components/List";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [activities, setActivities] = useLocalStorageState("Activities", {
    defaultValue: [],
  });

  const isGoodWeather = true;

  function handleAddActivity(data) {
    const newActivity = {
      ...data,
      id: uid(),
      isForGoodWeather: data.isForGoodWeather === "on" ? true : false,
    };
    setActivities([...activities, newActivity]);
  }

  // function filterWeather() {
  //   if (isGoodWeather === true) {
  //     activities.filter((activity) => {
  //       const weather = activity.isForGoodWeather === true;
  //       return weather;
  //     });
  //   }

  //   filterWeather();

  function filterWeather(boolean) {
    const WeatherActivities = activities.filter((activity) => {
      return activity.isForGoodWeather === boolean;
    });
    return WeatherActivities;
  }
  console.log("Weather:", isGoodWeather);

  filterWeather(isGoodWeather);

  // console.log(WeatherActivities);

  return (
    <>
      <List activities={activities} />
      <Form onAddActivity={handleAddActivity} isGoodWeather={isGoodWeather} />
    </>
  );
}

export default App;
