export interface MovieProps {
    Title: string,
    Year: string,
    imdbID: string,
    Type: string,
    Poster: string
}

export interface MovieListProps {
    movies: MovieProps[]
}
