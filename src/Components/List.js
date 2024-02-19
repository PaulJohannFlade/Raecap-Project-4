import "./List.css";

export default function List({ activities, onDeleteActivity }) {
  return (
    <ul>
      {activities.map((activity) => (
        <li className="activity__item" key={activity.id}>
          {activity.name}
          <button
            className="remove__item"
            onClick={() => {
              onDeleteActivity(activity.id);
            }}
          >
            ⓧ
          </button>
        </li>
      ))}
    </ul>
  );
}
