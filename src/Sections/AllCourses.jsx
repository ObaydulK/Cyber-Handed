
// Shared Tailwind CSS classes
const cardClasses = 'bg-card rounded-lg shadow-lg p-4';
const buttonClasses = 'mt-4 outline outline-2 hover:text-red hover:bg-[#ff7e31] px-4 py-2  rounded bg-rounded';

const CourseCard = ({ title, imageText, altText, reviewText, feeText }) => {
    return (
        <div className={cardClasses}>
            <img src={`https://openui.fly.dev/openui/300x200.svg?text=${imageText}`} alt={altText} className="rounded-t-lg" />
            <h3 className="font-semibold mt-2">{title}</h3>
            <p className="text-muted-foreground">{reviewText}</p>
            <p className="text-muted-foreground">{feeText}</p>
            <button className={buttonClasses}>Click for discount</button>
        </div>
    );
};

const CourseCategory = ({ title, courses }) => {
    return (
        <div className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">{title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course, index) => (
                    <CourseCard key={index} {...course} />
                ))}
            </div>

        </div>

    );
};

const coursesData = {
    'Graphic & Multimedia': [
        { title: 'Professional Graphic Design', imageText: 'Graphic+Design', altText: 'Graphic Design', reviewText: '18,000 Review', feeText: 'Course Fee 50,000 BDT' },
        { title: 'Motion Graphics', imageText: 'Motion+Graphics', altText: 'Motion Graphics', reviewText: '4,710 Review', feeText: 'Course Fee 50,000 BDT' },
        { title: 'UX/UI Design', imageText: 'UX+UI+Design', altText: 'UX UI Design', reviewText: '3,500 Review', feeText: 'Course Fee 50,000 BDT' }
    ],
    'Web & Software': [
        { title: 'MERN Stack Development', imageText: 'MERN+Stack', altText: 'MERN Stack Development', reviewText: '850 Review', feeText: 'Course Fee 95,000 BDT' },
        { title: 'App Development With Kotlin', imageText: 'App+Development', altText: 'App Development With Kotlin', reviewText: '2,240 Review', feeText: 'Course Fee 50,000 BDT' },
        { title: 'Python Django', imageText: 'Python+Django', altText: 'Python Django', reviewText: '320 Student', feeText: 'Course Fee 50,000 BDT' }
    ],
    'Digital Marketing': [
        { title: 'Digital Marketing Course', imageText: 'Digital+Marketing', altText: 'Digital Marketing Course', reviewText: '8,500 Review', feeText: 'Course Fee 50,000 BDT' },
        { title: 'Affiliate Marketing', imageText: 'Affiliate+Marketing', altText: 'Affiliate Marketing', reviewText: '210 Student', feeText: 'Course Fee 25,000 BDT' },
        { title: 'Google AdSense', imageText: 'Google+AdSense', altText: 'Google AdSense', reviewText: '12,700 Review', feeText: 'Course Fee 25,000 BDT' }
    ]
};

const AllCourses = () => {
    return (
        <div className="p-6 bg-background">
            {Object.entries(coursesData).map(([category, courses]) => (
                <CourseCategory key={category} title={category} courses={courses} />
            ))}

            <div className="text-center mt-8">
                <button className="bg-[#ff1e1e] text-primary-foreground hover:bg-primary/80 px-4 py-2 rounded-lg">All Courses </button>
            </div>

        </div>

    );
};

export default AllCourses;