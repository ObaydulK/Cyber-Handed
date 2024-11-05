import React from 'react';

const cardClasses = 'bg-card p-6 rounded-lg shadow-lg'
const textClasses = 'text-muted-foreground'
const iconClasses = 'h-8 w-8'

const CareerSolution = () => {
    return (
        <div className="max-w-6xl mx-auto p-6">
            <h2 className="text-3xl font-bold text-center mb-4">Exclusive Solutions that Set Us Apart</h2>
            <p className="text-center text-muted-foreground mb-8">
                Our aim is to make your learning experience the best possible by providing you with additional facilities that will help you to grow without bounds.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card
                    iconUrl="https://openui.fly.dev/openui/24x24.svg?text=❤️"
                    title="Lifetime Support"
                    content="Creative IT and its students share a lifetime bond. We strengthen our bond with you by providing lifelong support that helps you overcome any problem in your career path even after completing your course. Our expert support ensures 24-hour service to all of our students. The personalized feedback that we provide for you helps you grow, every day!"
                />
                <Card
                    iconUrl="https://openui.fly.dev/openui/24x24.svg?text=💼"
                    title="Career Placement Support"
                    content="Our career placement department is ready to help you find a lucrative job. We ensure that your resume gets into the hands of the right hiring manager. So far, this department has helped more than 1500 students to find competitive global platforms. Promising a better future, we have successfully raised the job placement rate to 66% in 2023."
                />
                <Card
                    iconUrl="https://openui.fly.dev/openui/24x24.svg?text=🎥"
                    title="Class Videos"
                    content="No need to worry if you miss a topic in the class. We record most of our classes so that students who miss a session can still get the information they need. They can watch the videos again and again to reinforce their learning and gradually improve your competence."
                />
            </div>
            <div className="text-center mt-8">
                <button className="bg-gradient-to-r from-primary to-accent text-white dark:text-black py-3 px-6 rounded-lg shadow-md dark:shadow-lg hover:shadow-lg dark:hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent">Our Facility</button>
            </div>
        </div>
    )

};

const Card = ({ iconUrl, title, content }) => {
    return (
        <div className={cardClasses}>
            <div className="flex items-center mb-4">
                <img aria-hidden="true" alt="icon" src={iconUrl} className={iconClasses} />
                <h3 className="text-xl font-semibold ml-2">{title}</h3>
            </div>
            <p className={textClasses}>{content}</p>
        </div>
    )
}
export default CareerSolution;