import { useState, useEffect } from "react";

const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
    const [topMovies, setTopMovies] = useState([]);

        const getTopRatedMOvies = async (url) => {
	    const res = await fetch(url);
    	const data = await res.json();
	
	setTopMovies(data.results);
};

    useEffect(() => {
	const topRatedUrl = `${moviesUrl}top_rated?${apiKey}`;

        getTopRatedMOvies(topRatedUrl);
}, []);
    return(
        <div>{topMovies && topMovies.map((movie) => <p>{movie.title}</p>)}</div>
    );
     
};

export default Home