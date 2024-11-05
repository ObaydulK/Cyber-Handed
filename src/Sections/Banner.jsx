'use client'

import Sliders from "../Component/Slick_Slider/SlickSlide"

const cardClass = 'bg-background p-6 rounded-lg shadow-lg flex flex-col md:flex-row'
const titleClass = 'text-2xl font-bold text-primary'
const subtitleClass = 'text-xl font-semibold text-secondary'
const spanClass = 'text-red-500'
const textClass = 'text-muted-foreground'
const buttonClass = 'bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-2 rounded-lg mr-2'
const buttonPrimaryClass = 'bg-primary text-primary-foreground hover:bg-primary/80 px-4 py-2 rounded-lg'
const smallTextClass = 'text-sm text-muted-foreground'

export default function Banner() {


    return (
        <div className={cardClass}>
            <div className="flex-1 mb-4 md:mb-0">
                <h1 className={titleClass}>Unleash Your Potential</h1>
                <h2 className={subtitleClass}>
                    Become an IT Pro & Rule the <span className={spanClass}>Digital World</span>
                </h2>
                <p className={textClass + ' mt-2'}>
                    With a vision to turn manpower into assets, Creative IT Institute is ready to enhance your learning experience with skilled mentors and updated curriculum. Pick your desired course from more
                    than 30 trendy options.
                </p>
                <div className="mt-4">
                    <button className={buttonClass}>Browse Course</button>
                    <button className={buttonPrimaryClass}>Join the Seminar</button>
                </div>
                <p className={smallTextClass + ' mt-4'}>One of the best ISO certified IT Training Institutes in Bangladesh</p>
            </div>
            <div className="flex-1 flex justify-center items-center">
                <img src="https://openui.fly.dev/openui/300x200.svg?text=15+Years+of+Innovation" alt="15 Years of Innovation" className="rounded-lg shadow-lg" />
            </div>
        </div>
    )
}
