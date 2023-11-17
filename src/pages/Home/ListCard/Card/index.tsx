import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

type Props = {
    id: number,
    cover: string,
    title: string,
    percentage?: number,
    type: string
    style?: React.CSSProperties
}

const Card = ({ id, cover, title, percentage, type, style }: Props ) => {
    return (
        <li
            className="rounded-lg hover:scale-101 cursor-pointer ps-1 "
            style={style}
        >   <a href={`/${type}/${id}`}>
                <div
                    className="rounded-lg overflow-hidden relative"
                    style={{
                        boxShadow: '0px 0px 3.4px 0px #FFF'
                    }}
                >
                    <img
                        className="w-full h-full"
                        src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${cover}`}
                        alt="capa do filme"
                    />
                    { percentage && percentage>0  
                        ? 
                            <CircularProgressbar
                                strokeWidth={12}
                                className="w-12 h-12 absolute bottom-3 right-3 bg-cine23-100 rounded-full p-1"
                                value={percentage} 
                                text={`${percentage}%`}
                                styles={{
                                    path: {
                                    stroke: `rgba(255, 0, 199, ${percentage / 100})`
                                    },
                                    trail: {
                                    stroke: '#FFF'
                                    },
                                    text: {
                                    fill: '#FFF',
                                    fontSize: '30px',
                                    }
                                }}
                                
                            />
                        : <></>
                    }
                </div>

                <div
                    className="flex flex-col bg-background-300 rounded-lg p-2 mt-2 gap-2 h-14 w-full"
                    style={{
                        boxShadow: '0px 0px 3.4px 0px #FFF'

                    }}
                >
                    <h4
                        className="uppercase font-bold text-white pb-1 text-wrap text-ellipsis overflow-hidden  "
                        style={{ fontSize: '.8rem' }}
                    >
                        {title}
                    </h4>
                </div>
            </a>
        </li>
    )
}

export default Card