import Movie from "./Movie"
import svg from "../images/no-results.svg"
import { MovieProps, MovieListProps } from "./MovieListProps"

export default function Movies({ movies }: MovieListProps) {
    return <div className="movies">
        {
            movies ?
                movies.map((movie: MovieProps) => <Movie key={movie.imdbID} {...movie} />) :
                <div className="no_results">
                    <img src={svg} alt="no results" />
                    <h4>No results found :(</h4>
                </div>
        }
    </div>
}