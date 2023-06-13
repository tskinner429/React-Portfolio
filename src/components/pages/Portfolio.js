import React from "react";
import projects from "../../projects.json";

export default function Portfolio() {
  return (
    <div>
      <h1>My Portfolio</h1>
      {projects.map((proj) => (
        <div className="card">
          <image src={proj.image} alt={proj.name}/>
          <h1>{proj.name}</h1>
          <button>
            <a href={proj.github}>Repo</a>
          </button>
          <button>
            <a href={proj.live}>Live</a>
          </button>
        </div>
      ))}
    </div>
  );
}
