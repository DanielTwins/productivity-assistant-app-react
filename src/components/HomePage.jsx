import React from "react";
import { Link } from "react-router-dom";

function HomePage({ habits }) {
  const topReps = habits
    .sort((a, b) => b.repetitions - a.repetitions)
    .slice(0, 3);

  return (
    <>
      <h1>Home Page</h1>
      <h2>Top Repetitions</h2>
      <ul>
        {topReps.map((habit) => (
          <li key={habit.id}>
            {habit.title} - {habit.repetitions}
          </li>
        ))}
      </ul>
      <Link to="/habits">All Habits</Link>
    </>
  );
}

export default HomePage;
