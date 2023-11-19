function MoviesList() {
    const movies = [
      {
        title: "The Shawshank Redemption",
        year: 1994,
        synopsis: "Two imprisoned men find redemption.",
      },
      {
        title: "The Dark Knight",
        year: 2008,
        synopsis: "Batman fights the menace known as the Joker.",
      },
      {
        title: "Interstellar",
        year: 2014,
        synopsis: "Explorers travel through a wormhole in space.",
      },
    ];
    
    return (
      <div className="MoviesList componentBox">
        <ul>
          {movies.map(movie => (
            <li key={movie.title}>
              <h3>{movie.title} ({movie.year})</h3>
              <p>{movie.synopsis}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default MoviesList;
  