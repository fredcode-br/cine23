type Props = {
    customClass?: string,
    children: JSX.Element,
};

function Container(props: Props) {
    return ( 
      <div className={`w-full max-w-screen-2xl px-20 py-0 ${props.customClass}`} > 
            {props.children} 
      </div>
    )
}

export default Container;