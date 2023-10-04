export async function getMovies() {
    // fetch data from our API
    const res = await fetch('http://localhost:8080/v1/movies')   
              
    // Recommendation: handle errors
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
   
export default async function MoviesList(){
    //get movies
    const movies = await getMovies();

    return (
        <main> 
            <h1 >Movies List</h1> 
            <div>
                <ul> 
                    {movies.map((movie:any) => (
                        <li key={movie.id}>{movie.title} ({movie.released})</li>
                    ))}
                </ul> 
            </div>
        </main>
        );
}