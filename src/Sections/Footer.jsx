
const buttonClass = 'px-4 py-2 rounded-lg';
const primaryButtonClass = 'bg-primary text-primary-foreground hover:bg-primary/80';
const secondaryButtonClass = 'bg-secondary text-secondary-foreground hover:bg-secondary/80';

const ContactInfo = () => (
    <div>
        <h2 className="font-bold mb-2">Contact</h2>
        <ul className="list-none pl-5">
            <li>Head Office: Momtaz Plaza (4th Floor)</li>
            <li>House # 07, Road # 04</li>
            <li>Dhanmondi, Dhaka-1205</li>
            <li>+880 1770388777</li>
            <li>+880 1624486444</li>
            <li>+880 1865787744</li>
            <li>+880 1865784444</li>
            <li>+880 1927799600</li>
        </ul>
    </div>
);

const QuickLinks = () => (
    <div>
        <h2 className="font-bold mb-2">Quick Links</h2>
        <ul className="list-none pl-5">
            <li>Free Seminar Schedule</li>
            <li>Mentors</li>
            <li>Success Story</li>
            <li>Our Gallery</li>
            <li>FAQ</li>
            <li>Blog</li>
            <li>Privacy Policy</li>
        </ul>
    </div>
);

const PopularCourses = () => (
    <div>
        <h2 className="font-bold mb-2">Popular Courses</h2>
        <ul className="list-none pl-5">
            <li>Web Development</li>
            <li>Professional Graphic Design</li>
            <li>Digital Marketing</li>
            <li>Mern Stack Development</li>
            <li>Motion Graphics</li>
            <li>Professional 3D Animation</li>
            <li>Content Writing</li>
        </ul>
    </div>
);

const Others = () => (
    <div>
        <h2 className="font-bold mb-2">Others</h2>
        <ul className="list-none pl-5">
            <li>About Us</li>
            <li>Our Facility</li>
            <li>Our Achievement</li>
            <li>Career Placement</li>
            <li>Freelancing</li>
            <li>Students Feedback</li>
            <li>Contact</li>
        </ul>
    </div>
);
const Footer = () => {
    return (
        <div>
            <div className="bg-background text-foreground p-8 text-center">
                <h1 className="text-2xl font-bold mb-4">Admission Is Going on</h1>
                <p className="mb-6">Enroll to any online or offline course now, take one step ahead towards a competent career</p>
                <div className="mb-8">
                    <button className={`${secondaryButtonClass} ${buttonClass} mr-4`}>Join Free Seminar</button>
                    <button className={`${primaryButtonClass} ${buttonClass}`}>Browse Course</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">
                    <ContactInfo />
                    <QuickLinks />
                    <PopularCourses />
                    <Others />
                </div>

                <p className="mt-4 text-center">info@creativeinstitute.com</p>
            </div>
        </div>
    );
};

export default Footer;
