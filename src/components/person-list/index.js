import React from "react";

import "./person-list.css";
import Person from "../person";
import presenters from "./people";

export default function PersonList() {
  return (
    <div className="person-list">
      {presenters.map(person => (
        <Person
          avatar={person.avatar}
          name={person.name}
          twitter={person.twitter}
          title={person.title}
          key={person.name}
        />
      ))}
    </div>
  );
}
