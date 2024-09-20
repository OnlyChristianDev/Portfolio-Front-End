interface IconsProp {
    IconProps : React.ElementType;
}

export default function Contacts({IconProps} : IconsProp){
    return(
        <>
            <div className="">
                <IconProps />
            </div>
        </>
    )
}