import { useState } from 'react';

const Contact = () => {
    const [data, setData] = useState('');
    const [names, setName] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`your name is : ${data}`);
        setName([...names, data]); // Add the new name to the list
        setData(''); // Reset the input field after submission
    };

    return (
        <div>
            <h1>This is Contact Page</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type='text'
                        placeholder='Enter your name'
                        value={data}
                        onChange={(e) => setData(e.target.value)}
                    />
                </label>
                <button type='submit'>submit</button>
                <h3>Your Name is :</h3>
                <ul>
                    {names.map((name, idx) => (
                        <li key={idx}>{name}</li>
                    ))}
                </ul>
                <p>Enter your name and click submit to see it listed above.</p>
            </form>
        </div>
    );
};

export default Contact;