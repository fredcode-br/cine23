import { useParams } from "react-router-dom";
import apiData from "../../apiData";
import Container from "../../components/Container";
import { useState, useEffect } from "react";
import ITitle from "../../Types/ITitle";
import Loader from "../../components/Loader";
import IActors from "../../Types/IActors";
import ListActors from "./ListActors";


export default function Title() {
    const { type, id } = useParams();
    const [ title, setTitle ] = useState<ITitle>()
    const [ actors, setActors ] = useState<IActors>()
    const [loading, setLoading] = useState(true)
    
    const getTitle = async (id: number, type: string = "") => {
        const newTitle = await apiData.getTitle({id: id, type: type}) 
        if(newTitle){
            setTitle(newTitle);
            setLoading(false)
        }
    }

    const getActors = async (id: number, type: string = "") => {
        const listActors = await apiData.getActors({id: id, type: type}) 
        setActors(listActors);
    }
  
    const convertDate = (date: String) => {
        const elementosData = date.split('-');
        const dateFormatted = `${elementosData[1]}/${elementosData[2]}/${elementosData[0]}`;
        return dateFormatted;
    }

    const convertTime = (time: number) => {
        const hours = Math.floor(time / 60);
        const minutesRemaining = time % 60;
        return `${hours}h ${minutesRemaining}min`;
    }

    getTitle(Number(id), type)
    useEffect(() => {		
		
        getActors(Number(id), type)
	}, [id, type])
    
  

    return (
        <section 
            className="bg-background-200 flex justify-center items-center"
            style={{minHeight: 'calc(100vh - 272px)'}}
        >  
            <Container customClass="px-28 flex flex-col h-full">
                <>
                    { !loading && title
                        ?
                            <>
                                <div 
                                    className=" flex gap-8 w-full mt-20"
                                    style={{
                                        height: '450px'
                                    }}
                                >
                                    <div
                                        className="w-96 bg-background-300 h-full"
                                        style={{ boxShadow: '0px 0px 3.4px 0px #FFF' }}
                                    >
                                        <img
                                            src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${title.backdrop_path}`}
                                            alt="capa do filme"
                                            className="w-full h-full"
                                        />
                                    </div>
                                    <div
                                        className="bg-background-300 rouded-lg w-full p-8"
                                        style={{ boxShadow: '0px 0px 3.4px 0px #FFF' }}
                                    >
                                        <h3 className="text-white font-bold text-3xl">{title.title}</h3>
                                        <div className="w-full text-white font-semibold">
                                            <ul className="flex gap-2 py-2 ">
                                                {
                                                    title.genres.map((g, index) =>
                                                        <li key={index} className="p-1 bg-background-200 border border-b-gray-200">
                                                            <p>{g.name}</p>
                                                        </li>
                                                    )
                                                }
                                            </ul>
                                            <p>{convertDate(title.release_date)}</p>
                                            <p className="py-2">{convertTime(Number(title.runtime))}</p>
                                        </div>
                                        {<p className="pt-4 text-white font-semibold">{title.overview}</p>}
                                    </div>
                                </div> 
                                {
                                    actors && <ListActors actors={actors.cast}/>
                                }
                            </>
                        :
                            <Loader />
                    }
                </>
            </Container>
        </section>
    )
}