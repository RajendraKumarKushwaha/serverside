import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Helmet>
        <title>About Us - Your Studio</title>
        <meta name="description" content="Learn more about our photography studio and services." />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <h1 className="text-4xl font-bold text-gray-900">About Us</h1>
      <p className="text-lg text-gray-600 mt-2">We are passionate photographers capturing beautiful moments.</p>
    </div>
  );
};

export default About;
