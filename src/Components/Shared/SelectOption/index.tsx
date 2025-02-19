import './selectOption.css';

interface ISelectOption {
    heading: string;
    values: number[];
    onClick: (e:number)=>void;
}

const SelectOption = ({heading,values,onClick}:ISelectOption) => {
    return (
        <div className="select-option-container" >
            <div>{heading}</div>
            <div className='select-option-buttons-container' >
                {values.map((num,index)=>(
                    <button key={index} onClick={()=>onClick(num)} >{num}</button>
                ))}
            </div>
        </div>
    )
}

export default SelectOption;