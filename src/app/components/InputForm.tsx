interface PLaceholderProps {
    PLaceholderProps : string
    type : string
    value : string
    name : string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputForm( { PLaceholderProps, type, name, value, onChange } : PLaceholderProps ){
    return(
        <div className="flex flex-col">
              <input name={name} onChange={onChange} value={value} className="bg-transparent pl-3 rounded-md h-12 w-[700px] border-2 outline-none" type={type} placeholder={ PLaceholderProps } />
        </div>
    )
}