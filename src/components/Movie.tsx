import { MovieProps } from "./MovieListProps"

export default function Movie({ Title, Year, imdbID, Type, Poster }: MovieProps) {
    return <div id={imdbID} className="movie card">
        <div className="card-image waves-effect waves-block waves-light">
            {Poster === 'N/A' ?
                <img src={`https://via.placeholder.com/300x400?text=${Title}`} alt={Title} className="poster" /> :
                <img src={Poster} alt={Title} className="poster" />
            }
        </div>

        <div className="card-content">
            <span className="card-title grey-text text-darken-4">{Title}</span>

            <p>{Year} <span className="right">{Type}</span></p>
        </div>
    </div>
}