import * as React from "react";

interface NaviProps {
    menu: { label: string; url: string; }[]
}

export const Navi:React.FC<NaviProps> = props => {


    return (
        <div className="navigation">
        {props.menu.map((item, index) => (
            <div key={index}>
                <a href={item.url}>{item.label}</a>
            </div>
        ))}
        </div>
    )
}