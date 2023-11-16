import { Link } from "react-router-dom";

import Container from "../Container";

import instagram from "../../assets/icons/instagram.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import github from "../../assets/icons/github.svg";

export default function Footer() {
    return (
        <footer className="flex bg-background-100 items-center justify-center h-48 ">
            <Container>
                <div className="flex flex-col items-center">
                    <div className="flex text-center text-white p-3">
                           <p>Este site foi construído utilizando a API de </p>  
                            <Link 
                                to="https://www.themoviedb.org/"
                            >
                               &nbsp;themoviedb.org
                            </Link>
                        </div>
                    <ul className="flex gap-3 list-unstyled p-0 pt-5">
                        <li className="flex justify-center items-center w-8 h-8">
                            <Link 
                                className="w-full h-full"
                                to="https://www.instagram.com/fred_drufino/"
                            >
                                <img src={instagram} alt="instagram" />
                            </Link>
                        </li>
                        <li className="flex justify-center items-center w-8 h-8">
                            <Link 
                                className="w-full h-full"
                                to="https://www.linkedin.com/in/frederico-rufino/"
                            >
                                <img src={linkedin} alt="linkedin" />
                            </Link>
                        </li>
                        <li className="flex justify-center items-center w-8 h-8">
                            <Link 
                                className="w-full h-full"
                                to="https://github.com/fredcode-br"
                            >
                                <img src={github} alt="github" />
                            </Link>
                        </li>
                    </ul>
                    <div className="text-center text-white p-3">
                        &copy; 2023 - &nbsp;   
                        <Link 
                            to="https://github.com/fredcode-br"
                        >
                            fredcode.com.br
                        </Link>
                    </div>
                </div>
            </Container>
        </footer>
    )
  }