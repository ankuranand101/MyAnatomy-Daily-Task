import { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [names, setNames] = useState([]);
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!name.trim()) newErrors.name = 'Name is required';
        if (!email.trim()) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setNames([...names, name]);
        setName('');
        setEmail('');
        setErrors({});
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
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                {errors.name && <span style={{color: 'red'}}>{errors.name}</span>}
                <br />
                <label>
                    Email:
                    <input
                        type='email'
                        placeholder='Enter your email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                {errors.email && <span style={{color: 'red'}}>{errors.email}</span>}
                <br />
                <button type='submit'>Submit</button>
            </form>
            <h3>Your Names:</h3>
            <ul>
                {names.map((n, idx) => (
                    <li key={idx}>{n}</li>
                ))}
            </ul>
            <p>Enter your name and email, then click submit to see your name listed above.</p>
        </div>
    );
};

export default Contact;