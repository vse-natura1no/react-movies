import { useEffect, useState } from "react";

interface SearchProp {
    searchMovies: (str: string, type: string) => void
}

export default function Search({ searchMovies }: SearchProp) {
    const [search, updateSearch] = useState("")
    const [type, updateType] = useState("all")

    const handleFilter = (event: any) => {
        console.log(event.target.value)
        updateType(event.target.value)
        console.log(type)
    }

    useEffect(() => {
        searchMovies(search, type)
    }, [type])


    return <div className="row">
        <div className="col s12">
            <div className="input-field">
                <input type="search"
                    className="validate"
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => updateSearch(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") searchMovies(search, type)
                    }} />

                <button className="btn search-btn teal lighten-1" onClick={() => searchMovies(search, type)}>search</button>
            </div>

            <div>

                <label>
                    <input className="with-gap"
                        type="radio"
                        name="type"
                        value="all"
                        checked={type === "all"}
                        onChange={handleFilter} />
                    <span>All</span>
                </label>

                <label>
                    <input className="with-gap"
                        type="radio"
                        name="type"
                        value="movie"
                        checked={type === "movie"}
                        onChange={handleFilter} />
                    <span>Movies only</span>
                </label>

                <label>
                    <input className="with-gap"
                        type="radio"
                        name="type"
                        value="series"
                        checked={type === "series"}
                        onChange={handleFilter} />
                    <span>Series only</span>
                </label>

            </div>
        </div>
    </div>
}