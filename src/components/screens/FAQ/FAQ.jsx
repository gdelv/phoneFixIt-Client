import React from 'react'
import { questionsAnswers } from '../../../data'
import DropDown from './DropDown'
import FAQtitle from './FAQtitle'


export const FAQ = (props) => {
    return (
        <section style={{ paddingBottom: 150 }}class="hero section is-small">
            <FAQtitle
                title="Frequently asked Questions"
            />
            {questionsAnswers.map(qA => {
                return (
                    <>
                        <DropDown
                            question={qA.question}
                            answer={qA.answer}
                        />
                    </>
                )
            })}
        </section>
    )
}