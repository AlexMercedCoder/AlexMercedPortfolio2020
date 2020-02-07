import * as React from "react";

interface TitleProps {
    
}

export const Title:React.FC<TitleProps> = props => {


    return (
        <>
        <hr/>
        <h1 className="title"><span>Alex</span> Merced</h1>
        <h1 className="subtitle"> Dev<span>eloper</span></h1>
        </>
        
    )
}