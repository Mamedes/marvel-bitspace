import React from 'react'
import './styles.css'

const HeroCard = () => {
    return (
        <div className="heroCard">
            <div className="heroCardWrapper">
                <div className="heroImage">
                    <img src={"https://terrigen-cdn-dev.marvel.com/content/prod/1x/011blw_ons_crd_03.jpg"} alt={"hero"} />

                </div>
                <div className="heroName">
                    Mamedes
                </div>
            </div>

        </div>
    )
}
export default HeroCard