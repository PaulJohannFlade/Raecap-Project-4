import "./App.css";
import Form from "./Components/Form";
import { uid } from "uid";
import List from "./Components/List";
import useLocalStorageState from "use-local-storage-state";
import { useEffect, useState } from "react";

function App() {
  const [activities, setActivities] = useLocalStorageState("Activities", {
    defaultValue: [],
  });

  const [weatherData, setWeatherData] = useState({});

  async function fetchWeatherApi() {
    try {
      const url = "https://example-apis.vercel.app/api/weather";

      const response = await fetch(url);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchWeatherApi();
    const intervall = setInterval(() => {
      fetchWeatherApi();
    }, 5000);
    return () => clearInterval(intervall);
  }, []);

  console.log(weatherData);

  // const isGoodWeather = true;

  function handleAddActivity(data) {
    const newActivity = {
      ...data,
      id: uid(),
      isForGoodWeather: data.isForGoodWeather === "on" ? true : false,
    };
    setActivities([...activities, newActivity]);
  }

  const filterActivities = activities.filter(
    (activity) => activity.isForGoodWeather === weatherData.isGoodWeather
  );

  function handleDeleteActivity(id) {
    const arrayAfterDeleteActivity = activities.filter(
      (activity) => activity.id !== id
    );
    setActivities(arrayAfterDeleteActivity);
  }

  return (
    <>
      <h1>
        {" "}
        {weatherData.condition}
        {weatherData.temperature}°C
      </h1>
      <h2>
        {weatherData.isGoodWeather
          ? "Activities for Good Weather"
          : "Activities for Bad Weather"}{" "}
      </h2>
      <List
        activities={filterActivities}
        onDeleteActivity={handleDeleteActivity}
      />
      <Form
        onAddActivity={handleAddActivity}
        isGoodWeather={weatherData.isGoodWeather}
      />
    </>
  );
}

export default App;
