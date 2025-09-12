import React, { useEffect, useState } from "react";

function JokeFetcher() {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchJoke = () => {
    setLoading(true);

    // updated url (no contains/idRange, added timestamp)
    const url = `https://jokeapi-v2.p.rapidapi.com/joke/Any?format=json&blacklistFlags=nsfw,racist&timestamp=${Date.now()}`;

    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "97f3417eccmshec28116fe946f9dp172e95jsn5e578f7e7967",
        "x-rapidapi-host": "jokeapi-v2.p.rapidapi.com",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        if (data.type === "single") {
          setJoke(data.joke);
        } else {
          setJoke(`${data.setup} - ${data.delivery}`);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error:", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-4">
      <h2 className="text-3xl font-bold mb-6">😂 Random Joke Generator</h2>

      <div className="bg-gray-800 rounded-2xl shadow-lg p-6 w-full max-w-xl text-center">
        {loading ? (
          <p className="text-gray-400 animate-pulse">Fetching a new joke...</p>
        ) : (
          <p className="text-lg">{joke || "Loading joke..."}</p>
        )}

        <button
          onClick={fetchJoke}
          className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-xl text-lg font-medium shadow-md transition-all"
        >
          Get New Joke
        </button>
      </div>
    </div>
  );
}

export default JokeFetcher;
