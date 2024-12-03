// Correct version:
import React, { useState, useEffect } from 'react';
import './style.css';

function JokeApp2() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState({
        id: '',
        type: '',
        setup: '',
        punchline: '',
    });


    // Fetch a random joke
    const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch('https://official-joke-api.appspot.com/random_joke');
            //res is ok or not
            if (!res.ok) {
                throw new Error('Failed to fetch joke');
            }
            //parse the response as json
            const dataRes = await res.json();
            setData({
                id: dataRes.id,
                type: dataRes.type,
                setup: dataRes.setup,
                punchline: dataRes.punchline,
            });
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const generateHandler = (e) => {
        e.preventDefault();
        fetchData();
    };

    return (
        <div className="box-joke">
            <h1 style={{ color: 'black', textTransform: 'uppercase' }}>Random Joke Generator</h1>
            <div className='joke-display'>
                {loading ? (<p>Loading...</p>) :
                    error ? (<p style={{ color: 'red' }}>{error}</p>) : (
                        <>
                            <h1 style={{ color: 'black' }}>Setup</h1>
                            <h1 className='setup'>{data.setup}</h1>
                            <h1 style={{ color: 'black' }}>Punchline</h1>
                            <h1 className='punch'>{data.punchline}</h1>
                        </>
                    )}
            </div>
            <button onClick={generateHandler} disabled={loading}>
                {loading ? 'Generating...' : 'Generate Joke'}
            </button>
        </div>
    );
}

export default JokeApp2;