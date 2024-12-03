import Navbar from '../../../components/private/shared/Navbar';
import CompletedCourses from '../../../components/private/mycourses/completed';
import Footer from '../../../components/public/shared/Footer';

const Completed = () => {
  return (
    <div>
      <Navbar />
      <CompletedCourses />
      <Footer />
    </div>
  );
};

export default Completed;