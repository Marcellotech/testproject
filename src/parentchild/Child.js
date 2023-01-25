const Child = ({data, val,val2, sendDataxy, children}) => {
    return (
        <>Child com {data} {val} {val2}
        <button onClick={()=> sendDataxy('1234')}>Click to send data from child to parent</button>
        {children}
        </>
    );
}

export default Child;