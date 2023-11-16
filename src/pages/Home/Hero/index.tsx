import { Link } from "react-router-dom"
import ContainerXL from "../../../components/ContainerXL"

interface Props {
    id: number,
    imagePath: string,
    title: string,
    overview: string
}

const Hero = ({ id, imagePath, title, overview }: Props ) => {
    return (
        <section
            className="w-full h-72 relative overflow-hidden"
        >
            <div
                className="w-full h-full bg-cover bg-fixed bg-center blur-md"
                style={{ backgroundImage: `url('https://image.tmdb.org/t/p/w300_and_h450_bestv2/${imagePath}')`}}
            ></div>
            <div className="absolute top-0 right-0 w-full h-full flex justify-center bg-gradient-to-t from-background-200 to-transparent px-24 py-10">
                <ContainerXL customClass="h-full w-full">
                    <>
                        <Link to={`title/${id}`}>
                            <h3 className=" text-ligth-100 text-4xl font-bold pb-2">{title}</h3>
                        </Link>
                        <p className="text-ligth-100 text-lg font-semibold">{overview}</p>
                    </>
                </ContainerXL>
            </div>
        </section>
    )
}

export default Hero