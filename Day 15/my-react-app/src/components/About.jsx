import {useState} from 'react'


const About = () => {
    const [count, setCount] = useState(0);
    function add(){
        setCount(count + 1);
    }
    function subtract(){
        setCount(count - 1);
    }
    function reset(){
        setCount(0);
    }
  return (
    <div>
        <h2>I am about page</h2>
        <h3>The count value : {count}</h3>
        <button onClick={add}> + </button>
        <button onClick={subtract}> - </button>
        <button onClick={reset}> Reset </button>
        <p>Click the buttons to change the count value.</p>
    </div>
  )
}

export default About