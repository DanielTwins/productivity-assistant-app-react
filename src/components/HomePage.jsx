import { Link } from "react-router-dom";

function HomePage({ todos, habits, events }) {
  const recentTodos = todos.filter((t) => !t.complete).slice(0, 3);

  const topReps = habits
    .sort((a, b) => b.repititions - a.repititions)
    .slice(0, 3);

  const nextDate = events.sort((a, b) => {
    let d1 = newDate(a);
    let d2 = newDate(b);
    d1 > d2 ? 1 : -1;
  });

  return (
    <>
      <h1>Home Page</h1>
      <h2>Uncompleted tasks</h2>
      <ul>
        {recentTodos.map((todo) => (
          <li key={todos.id}>{todo.titel}</li>
        ))}
      </ul>
      <Link to="/todos">All Todos</Link>
      <h2>Top repititions</h2>
      <ul>
        {topReps.map((habit) => (
          <li key={habits.id}>
            {habit.title} - {habit.repititions}
          </li>
        ))}
      </ul>
      <Link to="/habits">All Habits</Link>
      <h2>upcoming events</h2>
      <ul>
        {nextDate.map((event) => (
          <li key={events.id}>
            {event.name} - {event.start}
          </li>
        ))}
      </ul>
      <Link to="/event">All Events</Link>
    </>
  );
}

export default HomePage;
