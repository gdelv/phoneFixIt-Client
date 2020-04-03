import React from 'react' 



const FAQtitle = (props) => {
    return (
        <section class="hero is-medium">
        <div class="hero-body">
        <div class="container has-text-centered">
            <h1 class="title is-1 is-primary is-size-4-mobile">{props.title}</h1>
        </div>
        </div>
    </section>
    )
}
export default FAQtitle