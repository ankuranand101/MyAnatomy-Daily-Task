import React, { useState } from "react";
import { Card } from "./Card";

const FormHandler = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        image: ""
    });
    const [showCard, setShowCard] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowCard(true); // Show the card on submit
        console.log(formData);
    }

    return (
        <div>
            <h1 className="text-3xl font-bold underline text-center mt-5">Welcome to my Form Handling page</h1>
            <form className="flex flex-col gap-3 w-1/3 mx-auto mt-10">
                <input
                    type="text"
                    placeholder="Enter Name"
                    className="border-2 border-gray-300 p-2 rounded"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <input
                    type="email"
                    placeholder="Enter Email"
                    className="border-2 border-gray-300 p-2 rounded"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <input
                    type="password"
                    placeholder="Enter Password"
                    className="border-2 border-gray-300 p-2 rounded"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <input
                    type="file"
                    className="border-2 border-gray-300 p-2 rounded"
                    onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                            setFormData({ ...formData, image: URL.createObjectURL(file) });
                        }
                    }}
                />
                
                <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </form>
            {showCard && (
                <div>
                    <Card props={formData} />
                </div>
            )}
        </div>
    );
};

export default FormHandler;
