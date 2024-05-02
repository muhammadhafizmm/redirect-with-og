import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Helmet } from "react-helmet";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="Your page description." />
          <meta property="og:title" content="Your Open Graph Title" />
          <meta
            property="og:description"
            content="Your Open Graph Description"
          />
          <meta property="og:image" content="url-to-your-image" />
        </Helmet>
      </div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
