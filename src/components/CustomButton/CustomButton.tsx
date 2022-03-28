import React from 'react'
import { Link } from 'react-router-dom'
import "./CustomButton.scss"


type PropsType = {
    name: string
    route: string
}


const CustomButton = (props: PropsType) => {
    return (
        <>
            <div className="leftLine" ><hr /></div>
            <button>
                <Link to={props.route}>
                    {props.name}
                </Link>
            </button>
            <div className="rightLine" ><hr /></div>
        </>
    )
}

export default CustomButton