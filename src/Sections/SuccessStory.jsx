
// Shared Tailwind CSS classes
const cardClasses = 'bg-card rounded-lg shadow-lg overflow-hidden'
const buttonClasses = 'bg-gradient-to-r from-primary to-accent text-white dark:text-black py-3 px-6 rounded-lg shadow-md dark:shadow-lg hover:shadow-lg dark:hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent'
 
const SuccessStory = () => {
    const stories = [
        {
            image: 'https://placehold.co/300x200?text=Success+Story+1',
            video: 'https://www.youtube.com/embed/example1',
        },
        {
            image: 'https://placehold.co/300x200?text=Success+Story+2',
            video: 'https://www.youtube.com/embed/example2',
        },
        {
            image: 'https://placehold.co/300x200?text=Success+Story+3',
            video: 'https://www.youtube.com/embed/example3',
        },
        {
            image: 'https://placehold.co/300x200?text=Success+Story+4',
            video: 'https://www.youtube.com/embed/example4',
        },
    ]

    return (
        <div className="p-6 bg-background">
            <h2 className="text-2xl font-bold text-center mb-4">Success Stories</h2>
            <p className="text-center text-muted-foreground mb-8">
                The presence of our students in the ever expanding IT industry motivates us, drives us to guide more people towards a sustainable future.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {stories.map((story, index) => (
                    <StoryCard key={index} story={story} />
                ))}
            </div>
            <div className="text-center mt-6">
                <button className={buttonClasses}>See More</button>
            </div>
        </div>
    )
}

const StoryCard = ({ story }) => {
    return (
        <div className={cardClasses}>
            <iframe className="w-full h-48" src={story.video} title={story.name} frameBorder="0" allowFullScreen></iframe>
        </div>
    )
}

export default SuccessStory;