import React from 'react'

const HomePage = () => {
    const name = ['Ankur', 'Singh', 'Yadav', 'Kumar', 'Ravi', 'Sharma', 'Verma', 'Gupta'];
    const [likes, setLikes] = React.useState(0);
    function handleClick() {
        setLikes(likes + 1);
    }
    return (
        <div className="bg-blue-50 rounded-xl p-6 shadow-md mt-8">
            <h1 className="text-3xl font-bold mb-4 text-blue-700">Home Page</h1>
            <ul className="list-disc pl-6 space-y-2">
                {
                    name.map((name) => (
                        <li
                            key={name}
                            className="text-lg text-gray-700 font-semibold hover:text-blue-500 transition-colors cursor-pointer"
                        >
                            {name}
                        </li>
                    ))
                }
            </ul>
            <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors bg-blue-50" onClick={handleClick}>like{likes}</button>
        </div>
    )
}

export default HomePage;