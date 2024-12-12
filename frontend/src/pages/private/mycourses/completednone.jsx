import Navbar from '../../../components/private/shared/Navbar';
import CompletedCoursesNone from '../../../components/private/mycourses/completednone';
import Footer from '../../../components/public/shared/Footer';

const CompletedNone = () => {
    return (
      <div>
        <Navbar />
        <CompletedCoursesNone />
        <Footer />
      </div>
    )
  }
  
  export default CompletedNone