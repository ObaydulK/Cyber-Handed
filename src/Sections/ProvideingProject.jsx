import React from 'react';
const cardClasses = 'flex flex-col md:flex-row p-6 bg-card rounded-lg shadow-lg'
const imageClasses = 'w-full h-auto rounded-lg'
const titleClasses = 'text-2xl font-bold text-primary'
const textClasses = 'mt-4 text-muted-foreground'



const ProvideingProject = () => {
    return (
        <div className={cardClasses}>
            <div className="md:w-1/2">
                <img src="https://openui.fly.dev/openui/600x400.svg?text=Classroom+Image" alt="Classroom with students" className={imageClasses} />
            </div>
            <div className="md:w-1/2 md:pl-6">
                <h2 className={titleClasses}>Providing project-based classes is our specialty</h2>
                <p className={textClasses}>
                    We believe in skills gained through practical projects. A great number of people struggle to start their career in the tech field for only having conceptual knowledge. Creative IT makes sure
                    to provide hands-on training to prepare you for job markets. Our course module contains projects that are designed to track your progress. During the course, you will be able to make a
                    portfolio yourself to showcase your practical skills to the potential employers.
                </p>
            </div>
        </div>
    );
};

export default ProvideingProject;