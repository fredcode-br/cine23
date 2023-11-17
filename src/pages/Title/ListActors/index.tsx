import Slider from "react-slick";
import IActor from '../../../Types/IActor';
import CardActor from './CardActor';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type Props = {
  actors: Array<IActor>,
};

export default function ListActors({ actors }: Props) {
    const settings = {
        dots: false,
        infinite: false,
        speed: 400,
        slidesToShow: 5,
        slidesToScroll: 4,
        centerMode: false,
        centerPadding: "0"
    };

    return (
        <div className="flex justify-center">

        <Slider 
            {...settings} 
            className="my-8 w-full px-5" 
        >
            {actors &&
                actors.map((actor, index) => (
                        <CardActor
                            key={index}
                            id={actor.id}
                            image={actor.profile_path}
                            name={actor.name}
                            character={actor.character}
                        />
                    )
                )
            }
        </Slider>
        </div>
    );
}
