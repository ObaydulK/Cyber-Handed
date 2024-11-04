 
const seminarCardClasses = 'flex flex-col md:flex-row bg-card p-6 rounded-lg shadow-lg'
const dateClasses = 'font-semibold'
const joinButtonClasses = 'bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-2 rounded'
const textClasses = 'text-muted-foreground'

const JoinSeminars = () => {
    return (
        <div className={seminarCardClasses}>
            <div className="md:w-1/2">
                <h2 className="text-2xl font-bold mb-2">Join Our Free Seminars</h2>
                <p className={textClasses + ' mb-4'}>
                    Need guidelines to choose a suitable course? Join our free seminars to consult with our experts, they will guide you to pick the course that matches your interest and discuss the career
                    prospects.
                </p>
                <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                        <span className={dateClasses}>04 Nov, 24</span>
                        <a href="#" className={joinButtonClasses}>
                            Join
                        </a>
                    </div>
                    <span className={textClasses}>Video Editing</span>
                    <span className={textClasses}>Online, Time: 08:00 PM</span>
                </div>
                <div>
                    <div className="flex justify-between items-center mb-2">
                        <span className={dateClasses}>04 Nov, 24</span>
                        <a href="#" className={joinButtonClasses}>
                            Join
                        </a>
                    </div>
                    <span className={textClasses}>Interior Design</span>
                    <span className={textClasses}>Online, Time: 08:00 PM</span>
                </div>
                <a href="#" className="mt-4 inline-block text-primary underline">
                    Free Seminar Schedule
                </a>
            </div>
            <div className="md:w-1/2 md:pl-6 mt-4 md:mt-0">
                <img aria-hidden="true" alt="seminar participants" src="https://openui.fly.dev/openui/400x300.svg?text=Seminar+Participants" />
            </div>
        </div>

    );
};

export default JoinSeminars;