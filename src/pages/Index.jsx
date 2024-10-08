import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import SocialMediaSlider from '../components/SocialMediaSlider';

const Index = () => {
  const socialMediaPosts = [
    { platform: 'LinkedIn', content: 'Join our upcoming networking event!', link: 'https://linkedin.com/post1' },
    { platform: 'Instagram', content: 'Check out our latest workshop highlights', link: 'https://instagram.com/post1' },
    { platform: 'LinkedIn', content: 'CEF members share their success stories', link: 'https://linkedin.com/post2' },
    { platform: 'Instagram', content: 'Entrepreneurship tips from our mentors', link: 'https://instagram.com/post2' },
  ];

  return (
    <div className="min-h-screen bg-primary flex flex-col items-center justify-center text-white px-4 py-8">
      <div className="max-w-6xl mx-auto text-center">
        <img src="public\Logo.png" alt="CEF Logo" className="w-32 h-32 mx-auto mb-8" />
        <h1 className="text-3xl md:text-5xl font-bold mb-6">Welcome to Chennamangallur Entrepreneurs Forum</h1>
        <p className="text-lg md:text-xl mb-8">
          Join our thriving community of entrepreneurs. Connect, collaborate, and grow together!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-20 p-6 rounded-lg">
            <img src="https://via.placeholder.com/300x200.png?text=Diverse+Expertise" alt="Diverse Expertise" className="w-full h-40 object-cover rounded-lg mb-4" />
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Diverse Expertise</h2>
            <p>Our members come from various industries and backgrounds.</p>
          </div>
          <div className="bg-white bg-opacity-20 p-6 rounded-lg">
            <img src="/networking.jpg" alt="Networking Opportunities" className="w-full h-40 object-cover rounded-lg mb-4" />
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Networking Opportunities</h2>
            <p>Connect with fellow entrepreneurs and expand your network.</p>
          </div>
          <div className="bg-white bg-opacity-20 p-6 rounded-lg">
            <img src="https://via.placeholder.com/300x200.png?text=Business+Growth" alt="Business Growth" className="w-full h-40 object-cover rounded-lg mb-4" />
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Business Growth</h2>
            <p>Access resources and support to help your business thrive.</p>
          </div>
        </div>
        <Link to="/contacts">
          <Button className="bg-white text-primary hover:bg-blue-100 transition-colors text-lg px-8 py-3 mb-12">
            Explore Our Community
          </Button>
        </Link>
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">Latest Social Media Updates</h2>
          <SocialMediaSlider posts={socialMediaPosts} />
        </div>
      </div>
    </div>
  );
};

export default Index;
