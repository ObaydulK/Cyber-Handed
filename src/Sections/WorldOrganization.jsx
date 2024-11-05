
const cardClasses = 'flex flex-col md:flex-row bg-white dark:bg-card rounded-lg shadow-lg p-6'
const titleClasses = 'text-xl font-bold text-primary'
const subtitleClasses = 'text-3xl font-extrabold text-primary'
const textClasses = 'mt-4 text-muted-foreground'
const buttonClasses = 'px-4 py-2 rounded-lg'
const primaryButtonClasses = 'bg-primary text-primary-foreground hover:bg-primary/80'
const secondaryButtonClasses = 'bg-secondary text-secondary-foreground hover:bg-secondary/80'

const WorldOrganization = () => {
    return (
        <div className={cardClasses}>
            <div className="md:w-1/2">
                <div className="text-center">

                    <h2 className={titleClasses}>Successfully 15 Year’s</h2>
                    <h1 className={subtitleClasses}>World-Renowned IT Expert Making Organization</h1>
                    <p className={textClasses}>
                        Creative IT has been working with a vision to create IT experts for the past 15 years. In a fast-paced world, where every sector relies on technology, you need to develop IT skills to secure
                        a better future. With the utmost dedication, we have been able to make more than 70,000 IT experts who are currently working in different sectors.
                    </p>
                </div>
                <div className="mt-6 space-x-4 text-end">
                    <button className={`${buttonClasses} ${secondaryButtonClasses}`}>Browse Course</button>
                    <button className={`${buttonClasses} ${primaryButtonClasses}`}>Learn More</button>
                </div>

            </div>
            <div className="md:w-1/2 mt-6 md:mt-0">
                <img aria-hidden="true" alt="IT training session" src="https://openui.fly.dev/openui/400x300.svg?text=IT+Training" className="rounded-lg shadow-md" />
            </div>
        </div>
    );
};

export default WorldOrganization;