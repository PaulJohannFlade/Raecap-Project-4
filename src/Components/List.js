export default function List({ activities, onDeleteActivity }) {
  return (
    <ul>
      {activities.map((activity) => (
        <li key={activity.id}>
          {activity.name}
          <button
            onClick={() => {
              onDeleteActivity(activity.id);
            }}
          >
            x
          </button>
        </li>
      ))}
    </ul>
  );
}
