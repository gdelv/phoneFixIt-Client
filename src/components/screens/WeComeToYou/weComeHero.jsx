import React from 'react'




const WeComeHero = (props) => {
        return (
            <section class="hero is-medium">
            <div class="hero-body">
            <div class="container has-text-centered">
                <h1 class="title is-1 is-primary is-size-4-mobile">{props.title}</h1>
                <h1 class="subtitle is-4 is-size-6-mobile">{props.description}</h1>
                <h1 class='subtitle is-5 is-size-7-mobile'>{props.book}</h1>
            </div>
            </div>
        </section>
        )
}

export default WeComeHero