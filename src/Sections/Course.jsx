import React from 'react';

const Course = () => {
    const courses = [
        {
            title: 'Professional Graphic Design',
            reviews: '14,000 Reviews',
            students: '18,500 Students',
            fee: 'Course Fee 50,000 BDT',
            image: '/path/to/graphic-design-image.jpg',
        },
        {
            title: 'Motion Graphics',
            reviews: '4,210 Reviews',
            students: '2,500 Students',
            fee: 'Course Fee 50,000 BDT',
            image: '/path/to/motion-graphics-image.jpg',
        },
        {
            title: 'UX/UI Design',
            reviews: '2,980 Reviews',
            students: '3,500 Students',
            fee: 'Course Fee 50,000 BDT',
            image: '/path/to/ux-ui-design-image.jpg',
        },
    ];

    const cardClasses = "bg-card rounded-lg shadow-lg overflow-hidden";
    const buttonClasses = "mt-4 bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-2 rounded";

    return (
        <div className='bg-slate-300 shadow-lg rounded-lg'>
            <div className="p-6 bg-background">
                <div className='text-center '>
                    <h2 className="text-2xl font-bold text-foreground">Popular Courses</h2>
                    <p className="text-muted-foreground text-2xl py-10">
                        We have designed our courses with the most demanding professional skills. The knowledge, <br /> experience, and expertise gained through the program will ensure your desired job in the global market. <br /> From the list below you can enroll to any online or offline courses at any time.
                    </p>

                </div>
                <hr />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6  text-center ">
                    {courses.map((course, index) => (
                        <div key={index} className={cardClasses}>
                            <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">{course.title}</h3>
                                <p className="text-muted-foreground">{course.reviews}</p>
                                <p className="text-muted-foreground">{course.students}</p>
                                <div>
                                    <p className="text-muted-foreground">{course.fee}</p>
                                    <button className={buttonClasses}>
                                        Click for discount
                                    </button>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Course;