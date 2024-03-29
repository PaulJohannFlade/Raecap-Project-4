import "./Form.css";

export default function Form({ onAddActivity }) {
  function handleSubmitEvent(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const formObject = {
      name: data.activity,
      isForGoodWeather: data.GoodWeather,
    };

    // console.log(formObject);

    event.target.reset();
    event.target.activity.focus();

    onAddActivity(formObject);
  }

  return (
    <>
      <h2>Add Activities:</h2>
      <form className="form" onSubmit={handleSubmitEvent}>
        <label htmlFor="activity"></label>
        <input name="activity" id="activity" type="text" />
        <div className="check__input">
          <label htmlFor="GoodWeather">Good Weather Activity</label>
          <input name="GoodWeather" type="Checkbox" id="GoodWeather" />
        </div>
        <button type="submit">Submit Form</button>
      </form>
    </>
  );
}
