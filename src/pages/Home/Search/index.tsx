import { useState } from 'react'
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"
import Container from '../../../components/Container'

export default function Search({setTerm}: { setTerm:  React.Dispatch<React.SetStateAction<string>> }) {
    const [ searchTerm, setSearchTerm ] = useState<string>("");

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setTerm(searchTerm)
        }
      };

  return (
    <Container customClass="mt-3">
        <div className="w-full ">
            <div 
                className="w-full h-10 bg-background-300 rounded-full relative"
                style={{
                   boxShadow: '0px 0px 3.4px 0px #FFF'
                }}
            >
                <button 
                    className="border-none bg-transparent"
                    onClick={() => setTerm(searchTerm)}
                >
                    <MagnifyingGlassIcon 
                        className="absolute top-1/2 left-2 w-7 h-7 text-white -translate-y-1/2" 
                    />
                </button>
                <input
                    id="search"
                    className="h-full w-full bg-transparent rounded-full text-white py-4 px-11"
                    type="text"
                    placeholder="Digite um filme, série ou novela para buscar..."
                    value={searchTerm} 
                    onChange={e => setSearchTerm(e.target.value)}
                    onKeyDown={handleKeyPress}
                    required
                />
            </div>
        </div>
    </Container>
  )
}