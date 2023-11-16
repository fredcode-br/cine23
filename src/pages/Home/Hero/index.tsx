import { Link } from "react-router-dom"

interface Props {
    id: number,
    imagePath: string,
    title: string,
    overview: string
}

const Hero = ({ id, imagePath, title, overview }: Props ) => {
    return (
        <section
            className="w-full h-60 bg-cover bg-fixed bg-center relative px-24 py-10 overflow-hidden"
            style={{ backgroundImage: `url('https://image.tmdb.org/t/p/w300_and_h450_bestv2/${imagePath}')` }}
        >
            <Link to={`/filmes/${id}`}>
                <h3>{title}</h3>
            </Link>
            <p>{overview}</p>
        </section>
    )
}

export default Hero