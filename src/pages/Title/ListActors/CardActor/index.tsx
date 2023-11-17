type Props = {
    key: number,
    id: number,
    image: string, 
    name: string,
    character: string,
};

export default function CardActor ({ key, id, image, name, character }: Props) {
    return (
        <div
            className="border w-48  h-72 flex flex-col justify-between cursor-pointer bg-background-300 hover:bg-background-200 text-white text-center border-gray-300 p-2"
            key={key}
        >
            <div className="w-full h-48">
                <img
                    src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${image}`}
                    alt="imagem do ator(a)"
                    className="w-full h-full"
                />
            </div>
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-wrap text-sm">
                {character}
            </p>
        </div>
    )
}