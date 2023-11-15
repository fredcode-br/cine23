import { NavLink } from 'react-router-dom';

import logo from "../../assets/icons/logo.svg"
import gitHub from "../../assets/icons/github.svg"
import tmdb from "../../assets/icons/TMDB.svg"

import Container from '../Container';

function Header() {
   
    return (
        
        <header className="flex bg-background-100 items-center justify-center py-4 px-16">
            <Container>
                <div className="flex w-full justify-between items-center">
                    <NavLink to="/">
                        <img src={logo} alt="logo" />
                    </NavLink>
                    <div className='flex gap-4'>
                        <NavLink to="https://github.com/fredcode-br/cine23">
                            <img src={gitHub} alt="github" />
                        </NavLink>
                        <NavLink to="https://www.themoviedb.org/">
                            <img src={tmdb} alt="tmdb" />
                        </NavLink>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header;