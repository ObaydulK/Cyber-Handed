import Course from "../../../Sections/Course"
import Types from "../../../Sections/Types"
import SuccessStory from "../../../Sections/SuccessStory"
import CareerSolution from "../../../Sections/CareerSolution"
import Banner from "../../../Sections/Banner"
import AllCourses from "../../../Sections/AllCourses"
import JoinSeminars from "../../../Sections/JoinSeminars" 
import ProvideingProject from "../../../Sections/ProvideingProject"
 


const Navbers = () => {
  return (
    <div>  
      <Banner />
      <Course />
      <Types />
      <SuccessStory />
      <CareerSolution />
      <AllCourses />
      <JoinSeminars /> 
      <ProvideingProject/>
    </div>
  );
}

export default Navbers;