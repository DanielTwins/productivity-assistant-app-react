import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../Styles/habits.css";

function Habits({ habits, setHabits }) {
  const [newHabit, setNewHabit] = useState("");
  const [priority, setPriority] = useState("Low");
  const [filter, setFilter] = useState("All");
  const [sortOption, setSortOption] = useState("Repetitions");

  const handleAddHabit = () => {
    if (newHabit.trim() !== "") {
      setHabits([
        ...habits,
        { id: uuidv4(), title: newHabit, repetitions: 0, priority: priority },
      ]);
      setNewHabit("");
    }
  };

  const handleDeleteHabit = (id) => {
    setHabits(habits.filter((habit) => habit.id !== id));
  };

  const incrementReps = (id) => {
    setHabits(
      habits.map((habit) =>
        habit.id === id
          ? { ...habit, repetitions: habit.repetitions + 1 }
          : habit
      )
    );
  };

  const decrementReps = (id) => {
    setHabits(
      habits.map((habit) =>
        habit.id === id && habit.repetitions > 0
          ? { ...habit, repetitions: habit.repetitions - 1 }
          : habit
      )
    );
  };

  const handleSort = (habits) => {
    return habits.sort((a, b) => {
      if (sortOption === "Repetitions") {
        return a.repetitions - b.repetitions;
      } else if (sortOption === "Priority") {
        const priorityOrder = { Low: 1, Medium: 2, High: 3 };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      }
    });
  };

  const handleFilter = (habits) => {
    if (filter === "All") return habits;
    return habits.filter((habit) => habit.priority === filter);
  };

  const filteredHabits = handleFilter(habits);
  const sortedHabits = handleSort(filteredHabits);

  const reset = () => {
    setHabits(
      habits.map((habit) => ({
        ...habit,
        repetitions: 0,
      }))
    );
  };

  return (
    <div>
      <h1>Habits</h1>
      <input
        type="text"
        value={newHabit}
        onChange={(e) => setNewHabit(e.target.value)}
        className="habit-input"
        placeholder="Enter a habit"
      />
      <select
        onChange={(e) => setPriority(e.target.value)}
        value={priority}
        className="priority-select"
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button onClick={handleAddHabit} className="add-button">
        Add Habit
      </button>

      <div className="filter-sort-container">
        <label>Filter:</label>
        <select
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
          className="filter-select"
        >
          <option value="All">All</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <label>Sort by:</label>
        <select
          onChange={(e) => setSortOption(e.target.value)}
          value={sortOption}
          className="sort-select"
        >
          <option value="Repetitions">Repetitions</option>
          <option value="Priority">Priority</option>
        </select>
      </div>

      <ol className="list-container">
        {sortedHabits.map((habit) => (
          <li key={habit.id} className="habit-list">
            <span className="habit-text">{habit.title}</span>
            <span className="reps-text"> {habit.repetitions} </span>
            <span className="priority-text"> - {habit.priority} priority</span>
            <button
              onClick={() => incrementReps(habit.id)}
              className="increment-button"
            >
              +
            </button>
            <button
              onClick={() => decrementReps(habit.id)}
              className="decrement-button"
            >
              -
            </button>
            <button onClick={reset}>↻</button>
            <button
              onClick={() => handleDeleteHabit(habit.id)}
              className="delete-button"
            >
              Delete
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Habits;
