import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Helmet>
        <title>Best Photography Studio in Town</title>
        <meta name="description" content="We offer high-quality photography services for weddings, portraits, and more." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Best Photography Studio | YourStudio" />
        <meta property="og:description" content="Get premium photography services for all occasions." />
        <meta property="og:image" content="https://yourwebsite.com/preview.jpg" />
      </Helmet>
      <h1 className="text-4xl font-bold text-gray-900">Welcome to Our Studio 📷</h1>
      <p className="text-lg text-gray-600 mt-2">High-quality photography for weddings, portraits, and more.</p>
    </div>
  );
};

export default Home;
