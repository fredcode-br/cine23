import { useEffect, useState } from "react";

import apiData from "../../apiData";

import ITitle from "../../Types/ITitle";
import ITitles from "../../Types/ITitles";

import Container from "../../components/Container";
import Hero from "./Hero";
import Search from "./Search";
import ListCard from "./ListCard";
import Pagination from "./Pagination";
import Loader from "../../components/Loader";

export default function Home() {
    const [titles, setTitles] = useState<ITitles>(); 
    const [hero, setHero] = useState<ITitle>(); 
    const [searchTerm, setSearchTerm] = useState<string>("")
    const [ page, setPage ] = useState<number>(1);
    const [loading, setLoading] = useState(false)
 
    const getTitles = async (page: number, searchTerm: string ="") => {
        setLoading(true)
        const newTitles = await apiData.getTitles({page: page, searchTerm: searchTerm}) 
        setTitles(newTitles);
        setLoading(false)
        setHero(newTitles?.results[0])
    }

    useEffect(() => {
        getTitles(page, searchTerm)
    }, [searchTerm])


    const handlePagination = (page: number) => {
        setPage(page);
        getTitles(page, searchTerm);
    }
    
    return (
        <section 
            className="bg-background-200 flex flex-col items-center"
            style={{minHeight: 'calc(100vh - 272px)'}}
        >          
            { hero &&
                <Hero 
                    id={hero.id}
                    imagePath={hero.backdrop_path}
                    title={hero.title}
                    overview={hero.overview}                    
                />
            }
            <Search setTerm={setSearchTerm} />
            <Container customClass="py-14">    
               <>
                    { !loading && titles 
                        ?   
                            <ListCard titles={titles.results} />
                        : 
                            <Loader />
                    }
                    {  titles &&
                        <Pagination 
                            currentPage={page} 
                            totalPages={titles?.total_pages} 
                            onPageChange={handlePagination}
                        />
                    }
               </>
            </Container>
        </section>
    )
}