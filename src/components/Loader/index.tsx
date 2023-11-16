import loading from '../../assets/icons/loading.svg'


const Loader = () => {
    return (
        <div className=" h-full w-full flex justify-center items-center">
            <img 
                className="w-14 animate-spin" 
                src={loading} 
                alt="Loading" 
            />
        </div>
    )
}

export default Loader