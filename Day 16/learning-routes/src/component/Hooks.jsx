import {React,useState} from 'react'

const Hooks = () => {
  const [dark, setDark] = useState(false);

  return (
    <div
      style={{
        background: dark ? "black" : "white",
        color: dark ? "white" : "black",
        height: "100vh",
        textAlign: "center",
        paddingTop: "40px"
      }}
    >
      <h2>{dark ? "Dark Mode" : "Light Mode"}</h2>
      <button onClick={() => setDark(prev => !prev)}>
        Toggle Theme
      </button>
    </div>
  );
}

export default Hooks