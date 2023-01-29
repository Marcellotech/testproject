const AButton = ({onClick, children}) => {
    return (
        <button className="text-red-500 bg-yellow-400" onClick={onClick}>{children}</button>     
    );
}

export default AButton;