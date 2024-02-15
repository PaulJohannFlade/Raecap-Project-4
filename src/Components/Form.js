export default function Form() {
  return (
    <>
      <h1>Activity</h1>
      <form>
        <label htmlFor="activity"></label>
        <input name="activity" type="text" />
        <label htmlFor="GoodWeather">Good Weather Activity</label>
        <input name="GoodWeather" type="Checkbox" id="GoodWeather" />
      </form>
    </>
  );
}
