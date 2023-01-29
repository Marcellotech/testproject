import { useState } from "react";

const Todo = () => {
  const [work, setWork] = useState("");
  const [workArray, setWorkArray] = useState([]);
  const onChangeWork = (e) => {
    setWork(e.target.value);
  };
  const addWork = () => {
    // let val = workArray;
    // console.log(val);
    // val.push(work);
    // console.log('after push',val);
    setWorkArray([...workArray, work]);
  };

  const onDeleteWork = (index) => {
    console.log(index);
    workArray.splice(index,1);
    setWorkArray([...workArray])
  };
  const onUpdateWork=(index)=>{
    console.log(index);
    workArray[index]='123';
    setWorkArray([...workArray])
  }
  return (
    <>
      <input
        className="p-1 bg-gray-400 "
        name="work"
        value={work}
        onChange={onChangeWork}
      />
      <button onClick={addWork}>add</button>
      {work}
      <div>
        {workArray.map((val, i) => (
          <>
            <div key={i}>{val}</div> <button className="m-3 bg-green-400 " onClick={()=>onDeleteWork(i)}>del</button>
            <button className="m-3 bg-green-400" onClick={()=>onUpdateWork(i)}>Update</button>

          </>
        ))}
      </div>
      {JSON.stringify(workArray)}
    </>
  );
};

export default Todo;
