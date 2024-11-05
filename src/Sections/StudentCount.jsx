const cardClasses = 'bg-white dark:bg-card p-4 rounded-lg shadow-md text-center border border-border'
const titleClasses = 'text-3xl font-bold text-primary'
const textClasses = 'text-muted-foreground'

const StudentCount = () => {
    const data = [
        { number: '63700+', description: 'Successful Students' },
        { number: '30000+', description: 'Expert Freelancers' },
        { number: '20000+', description: 'Skilled Job Holders' },
        { number: '600+', description: 'Industry Expert' },
        { number: '91%', description: 'Success Ratio' },
        { number: '700+', description: 'Companies' },
    ]

    const StudentCard = ({ number, description }) => {
        return (
            <div className={cardClasses}>
                <h2 className={titleClasses}>{number}</h2>
                <p className={textClasses}>{description}</p>
            </div>
        )
    }

    return (
        <div className="flex flex-wrap justify-center space-x-4 py-10">
            {data.map((student, index) => (
                <StudentCard key={index} number={student.number} description={student.description} />
            ))}
        </div>
    );
};

export default StudentCount;