
import calendar from "../../../assets/icons/calendar.svg"
import clock from "../../../assets/icons/clock.svg"

interface Props {
    id: number
    cover: string,
    title: string,
    date: string,
    runtime: number,
    percentage?: number | undefined
}

const Card = ({ id, cover, title, date, runtime, percentage }: Props ) => {
    const convertDate = (date: String) => {
        const dateFormatted = date
        // const elementosData = date.split('-');
        // console.log(elementosData)
        // const dateFormatted = `${elementosData[0]}/${elementosData[2]}/${elementosData[1]}`;
        return dateFormatted;
    }

    const convertTime = (time: number) => {
        const hours = Math.floor(time / 60);
        const minutesRemaining = time % 60;
        return `${hours}h ${minutesRemaining}min`;
    }

    return (
        <li
            className="rounded-lg hover:scale-101 cursor-pointer ps-1 "
        >   <a href={`/filmes/${id}`}>
                <div
                    className="rounded-lg overflow-hidden relative"
                    style={{
                        width: '180px',
                        height: '222px',
                        boxShadow: '0px 0px 3.4px 0px #FFF'
                    }}
                >
                    <img
                        className="w-full h-full"
                        src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${cover}`}
                        alt="capa do filme"
                    />
                    {percentage &&
                        <div className="grid place-items-center bg-cine23-100 w-12 h-12 absolute bottom-3 right-3 rounded-full">
                            <div className="rounded-full w-11 h-11 border-4  border-ligth-200">

                            </div>

                            <div
                                className="grid place-items-center absolute rounded-full w-11 h-11 border-4  border-cine23-300"
                                data-deg={`${percentage}`}
                            >
                                <p className="text-ligth-100 text-sm font-semibold">
                                    {percentage + "%"}
                                </p>
                            </div>
                        </div>
                    }
                </div>

                <div
                    className="flex flex-col bg-background-300 rounded-lg p-2 mt-2 gap-2"
                    style={{
                        maxWidth: '180px',
                        boxShadow: '0px 0px 3.4px 0px #FFF'

                    }}
                >
                    <h4
                        className="uppercase font-bold text-white pb-1 leading-none overflow-hidden whitespace-nowrap text-ellipsis"
                        style={{ fontSize: '.8rem' }}
                    >
                        {title}
                    </h4>
                    <div className="flex justify-between">
                        <div className="flex gap-1">
                            <img src={calendar} alt="data de estreia" />
                            <p
                                className="text-white text-xs"
                            >
                                {convertDate(date)}
                            </p>
                        </div>
                        <div className="flex gap-1">
                            <img src={clock} alt="tempo" />
                            <p
                                className="text-white text-xs"
                            >
                                {convertTime(runtime)}
                            </p>
                        </div>
                    </div>
                </div>
            </a>
        </li>
    )
}

export default Card