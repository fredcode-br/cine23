type Props = {
    customClass?: string,
    children: JSX.Element,
};

function ContainerXL(props: Props) {
    return ( 
      <div className={`w-full max-w-screen-2xl p-0 ${props.customClass}`}> 
            {props.children} 
      </div>
    )
}

export default ContainerXL;