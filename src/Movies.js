import React, { useState, useEffect } from "react";
import { apiURL } from "./util/api";

const Movies = () => {
     const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");


 const getAllMovies = async () => {
    try {
      const res = await fetch(`${apiURL}/Top250Movies/k_g3qpj7q4`);

      if (!res.ok) throw new Error("Something went wrong!");

      const data = await res.json();

      console.log(data);

      setMovies(data);

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };



   useEffect(() => {
    getAllMovies();
  }, []);

    
  

  return (
    <div>
         {isLoading && !error && <h4>Loading........</h4>}
        {error && !isLoading && <h4>{error}</h4>}

        {movies?.map((movie)=>
        (
            <div> 
                <img src={movie.image.jpg} />
                </div>
        ))

        }
    </div>
  )
}

export default Movies