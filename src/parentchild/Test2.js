import { useState } from "react";
import AButton from "./AButton";

const Test2 = () => {
  const [showdata, setShowdata] = useState(false);

  console.log("&&&&&&&&&&&&&&&&");
  const fn = (data) => {
    console.log(data); console.log('Verified');
  }
  

  const testfn2=()=>{

  }

  let arrayData = [
    { name: "Ram" },
    { class: "A sec" },
    { name: "ASD" },
    { name: "ASD" },
  ];
  return (
    <>
      {showdata === true && (
        <AButton onClick={
            
            () => setShowdata(false)

        }>AAA</AButton>
      )}
      {showdata === false && (
        <AButton onClick={() => setShowdata(true)}>BBB</AButton>
      )}

      <div>div div</div>
      <div>
        <AButton onClick={() => fn("Hllo 1")}>1</AButton>
      </div>
      <div>
        <AButton onClick={() => fn("Hllo 2")}>2</AButton>
      </div>
      <div>
        <AButton onClick={() => fn("Hllo 3")}>3</AButton>
      </div>
      {arrayData &&
        arrayData.length > 0 &&
        arrayData.map((val, i) => (
          <div key={i}>
            {i + 1} - {val.name} {val.class}
          </div>
        ))}
      {arrayData && arrayData.length === 0 && <>No Data found</>}

      {/* <div>
        <button className="text-red-500 bg-gray-400" onClick={()=>fn('Welcom')}>btn</button>
        </div>
        <div>
        <button className="text-red-500 bg-gray-400" onClick={()=>fn('Welcom')}>bvb</button>

        </div>
        <button className="text-red-500 bg-gray-400" onClick={()=>fn('Welcom')}>a</button>
        <button className="text-red-500 bg-gray-400" onClick={()=>fn('Welcom')}>b</button> */}
      {/* <button className="text-red-500 bg-gray-400" onClick={()=>fn('Welcom')}>c</button> */}

      <input />
    </>
  );
};

export default Test2;
