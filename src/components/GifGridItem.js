import React from 'react'

const GifGridItem = ({id, title, url}) => {
    // console.log(id, title, url);
    return (
        <div className="card animate__animated animate__bounce">
            <img src={url} alt={title} />  {/* se le pone el alt por buena practica */}
            <p> {title} </p>
        </div>
    )
}

export default GifGridItem