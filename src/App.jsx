import content from "./db/content.js";

const App = () => {
  return (
    <div className="App">
      <h1>The Nature of Code</h1>
      <p>Projects taken from or inspired by the book from Daniel Shiffman</p>

      <ul>
        {content.map((project, index) => (
          <li key={index}>
            <a href={project.link} target="_blank">
              {project.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
