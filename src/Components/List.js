export default function List({ activities }) {
  return (
    <ul>
      {activities.map((activity) => (
        <li>{activity.name}</li>
      ))}
    </ul>
  );
}

/*
export default function List({ activities }) {
  return (
    <>
      <h2>Activities</h2>
      <ul>
        {activities.map(({ name, id }) => {
          return <li key={id}>{name}</li>;
        })}
      </ul>
    </>
  );
}
*/
