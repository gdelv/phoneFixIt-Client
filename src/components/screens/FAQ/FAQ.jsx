import React from 'react'
import  {questionsAnswers} from '../../../data'
import DropDown from './DropDown'


export const FAQ = (props) => {
    return (
        <>
        {questionsAnswers.map(qA => {
            return (
                <DropDown
                question={qA.question}
                answer={qA.answer}
                />
            )
        })}
        </>
    )
}