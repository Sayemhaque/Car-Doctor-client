import Person from "../../assets/images/about_us/person.jpg"
import Parts from "../../assets/images/about_us/parts.jpg"
const About = () => {
    return (
        <div className="hero py-16  bg-base-200">
  <div className="hero-content flex-col gap-12 lg:flex-row md:max-w-5xl mx-auto">
   <div className="lg:w-1/2 relative">
   <img src={Person} className="w-3/4 rounded-lg shadow-2xl" />
   <img src={Parts} className="w-1/2 border-8 border-white rounded-lg shadow-2xl absolute right-0 top-1/2" />
   </div>
    <div className="lg:w-1/2 mt-12 md:mt-0">
        <h3 className="text-2xl text-amber-500">About us</h3>
      <h1 className="text-4xl font-bold">We are qualified & of experience in this field.</h1>
      <p className="py-6 text-sm">Car Doctor is a professional car servicing website that offers a wide range of services to ensure your vehicle is always in top condition.</p>
      <button className="btn btn-warning">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default About;