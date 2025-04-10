import React from 'react'
import styles from "./heading.module.css"

const Heading = (props) => {
    return (
        <div className={`${styles.Heading} text-center my-1`}>
            <h1>{props.headOne} <span>{props.headTwo}</span></h1>
            <p>{props.headingParagraph}</p>
        </div>
    )
}

export default Heading