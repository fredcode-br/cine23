type Props = {
    id: number,
    cover: string,
    title: string,
    percentage?: number,
    style?: React.CSSProperties
}

const Card = ({ id, cover, title, percentage, style }: Props ) => {
    return (
        <li
            className="rounded-lg hover:scale-101 cursor-pointer ps-1 "
            style={style}
        >   <a href={`/title/${id}`}>
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