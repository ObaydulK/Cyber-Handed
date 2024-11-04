

const Types = () => {

    // Shared TailwindCSS classes
    const cardClasses = "bg-card rounded-lg shadow-lg p-6 w-64";
    const titleClasses = "text-3xl font-bold text-primary ";
    const subtitleClasses = "text-muted-foreground font-bold ";
    const descriptionClasses = "text-secondary-foreground";

    const StatsCard = ({ title, subtitle, description }) => {
        return (
            <div className={cardClasses}>
                <h2 className={titleClasses}>{title}</h2>
                <p className={subtitleClasses}>{subtitle}</p>
                <p className={descriptionClasses}>{description}</p>
            </div>
        );

    };
    return (
        <div className="flex justify-center space-x-4 p-8">
            <StatsCard
                title="20000+"
                subtitle="Got Career Placement."
                description="Our job placement department has helped more than 20,000 skilled students find jobs in competitive global markets. Promising a better future, we have successfully raised the job placement rate to 87% by providing continuous career support to the learners."
            />
            <StatsCard
                title="91%"
                subtitle="Success Ratio"
                description="Excelling at work needs hands-on experience. The practical approach towards problems puts our students ahead of any other competitors in global job markets. All the courses are structured considering the job prospects to make you well prepared for a bright career."
            />
            <StatsCard
                title="30000+"
                subtitle="Works As Expert Freelancer"
                description="After course completion, a significant number of our students find jobs in multiple sectors. Many of the devoted students start working in the IT domain before completing the courses. Earning dollars from the global marketplace, they become self-reliant and contribute to the progress of our country."
            />
        </div>
    );
};

export default Types;