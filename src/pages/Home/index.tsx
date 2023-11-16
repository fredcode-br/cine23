import { useEffect, useState } from "react";

import apiData from "../../apiData";

import Container from "../../components/Container";
import ITitles from "../../Types/ITitles";
import Card from "./Card";
import ITitle from "../../Types/ITitle";
import Hero from "./Hero";
import ContainerXL from "../../components/ContainerXL";

export default function Home() {
    const [titles, setTitles] = useState<ITitles>(); 
    const [hero, setHero] = useState<ITitle>(); 
    const [searchTerm, setSearchTerm] = useState<string>("")
    const [loading, setLoading] = useState(false)
 
    const getTitles = async (page: number, searchTerm: string ="") => {
        setLoading(true)
        const newTitles = await apiData.getTitles({page: page, searchTerm: searchTerm}) 
        setTitles(newTitles);
        setLoading(false)
        setHero(newTitles?.results[0])
    }

    useEffect(() => {
        getTitles(1, searchTerm)
    }, [searchTerm])


    const handlePagination = (titles: ITitles) => {
        getTitles(titles.page + 1)
    }
    
    return (
        <section 
            className="bg-background-200 flex flex-col items-center"
            style={{minHeight: 'calc(100vh - 272px)'}}
        >  
            <ContainerXL>
                <>
                    { hero &&
                        <Hero 
                            id={hero.id}
                            imagePath={hero.backdrop_path}
                            title={hero.title}
                            overview={hero.overview}                    
                        />
                    }
                </>
            </ContainerXL>
            <Container customClass="py-14 px-20">    
               <>
                    { !loading && titles 
                        ?   
                            <ul className="w-full flex justify-start gap-4 flex-wrap">
                                {titles.results.map((title) => 
                                    <Card 
                                        id={title.id}
                                        cover={title.backdrop_path}
                                        title={title.title}
                                        date={title.release_date}
                                        runtime={title.runtime}
                                        percentage={title.popularity}
                                    />     
                                )}
                            </ul>
                        : 
                            <div
                                className=""
                            >
                                Carregando
                            </div>
                    }
               </>
            </Container>
        </section>
    )
}