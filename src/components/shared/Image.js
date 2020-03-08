import React from 'react'
import './styles/image.css'
export const Image = ({ src, className, alt, height, width }) => {
    return (
        <img
            className={className}
            src={src}
            alt={alt}
            height={height}
            width={width}
        />
    )
}