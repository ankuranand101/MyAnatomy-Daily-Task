import React, { useState } from 'react'

const Form = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function handleForm(e) {
    e.preventDefault();
    if (!form.name || !form.email) {
      alert("Name and Email are required!");
      return;
    }
    setSubmitted(form);
    setForm({ name: '', email: '', message: '' });
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 text-blue-700">Form Page</h1>
      <form className="space-y-4" onSubmit={handleForm}>
        <div>
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">Name:</label>
          <input
            className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-500"
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">Email:</label>
          <input
            className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-500"
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">Message:</label>
          <textarea
            className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-500"
            id="message"
            name="message"
            rows="4"
            value={form.message}
            onChange={handleChange}
          />
        </div>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          type="submit"
        >
          Submit
        </button>
      </form>

      {submitted && (
        <div>
          <h2 className="text-2xl font-bold mt-6 mb-4 text-green-700">Submitted Data:</h2>
          <p><strong>Name:</strong> {submitted.name}</p>
          <p><strong>Email:</strong> {submitted.email}</p>
          <p><strong>Message:</strong> {submitted.message}</p>
        </div>
      )}
    </div>
  )
}

export default Form;
