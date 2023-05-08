export default function Footer() {
    return <footer className="page-footer blue-grey lighten-2">
        <div className="footer-copyright transparent">
            <div className="container">
                {new Date().getFullYear()} @vse-natura1no
                <a href="https://github.com/vse-natura1no/react-movies" className="grey-text text-lighten-4 right">Repository</a>
            </div>
        </div>
    </footer>
}