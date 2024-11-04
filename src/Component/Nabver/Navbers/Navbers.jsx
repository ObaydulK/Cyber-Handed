import Course from "../../../Sections/Course"
import Types from "../../../Sections/Types"
import SuccessStory from "../../../Sections/SuccessStory"
import CareerSolution from "../../../Sections/CareerSolution"
import Banner from "../../../Sections/Banner"
import AllCourses from "../../../Sections/AllCourses"
import JoinSeminars from "../../../Sections/JoinSeminars" 
import ProvideingProject from "../../../Sections/ProvideingProject"
import WorldOrganization from "../../../Sections/WorldOrganization"
import StudentCount from "../../../Sections/StudentCount"
import CompanyComponent from "../../../Sections/CompanyComponent"
 


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
      <WorldOrganization/>
      <StudentCount/>
      <CompanyComponent/>
    </div>
  );
}

export default Navbers;