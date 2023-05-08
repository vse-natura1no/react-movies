import { useState } from "react"
import { useEffect } from "react"

import Movies from "../components/Movies"
import Search from "../components/Search"
import Preloader from "../components/Preloader"

export default function Main() {
    const [movies, updateMovies] = useState([])
    const [loading, updateLoading] = useState(true)


    useEffect(() => {
        fetch('http://www.omdbapi.com/?&apikey=295554cc&s=matrix')
            .then((responce) => responce.json())
            .then((data) => {
                updateMovies(data.Search)
                updateLoading(false)
            })
    }, [])

    const searchMovies = (str: string, type: string = "all") => {
        console.log(`http://www.omdbapi.com/?&apikey=295554cc&s=${str === "" ? "matrix" : str}${type !== "all" ? `&type=${type}` : ""}`)
        updateLoading(true)
        fetch(`http://www.omdbapi.com/?&apikey=295554cc&s=${str === "" ? "matrix" : str}${type !== "all" ? `&type=${type}` : ""}`)
            .then((responce) => responce.json())
            .then((data) => {
                updateMovies(data.Search)
                updateLoading(false)
            })
    }


    return <main className="container content ">
        <Search searchMovies={searchMovies} />
        {
            loading ? <Preloader /> : <Movies movies={movies} />
        }
    </main>
}