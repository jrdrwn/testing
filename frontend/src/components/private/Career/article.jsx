import React from 'react';
import { Link } from 'react-router-dom';

const Article = () => {
  return (
    <div className="bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        <section className="mb-8">
          <div className="relative">
            <img src="https://placehold.co/1200x400" alt="Man reading a document" className="w-full h-64 object-cover" />
            <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg">
              <button className="bg-blue-600 text-white px-4 py-2 rounded">Resume Writing</button>
              <span className="text-gray-500 ml-4">Nov 21, 2024</span>
              <h2 className="text-2xl font-bold mt-2">How to Create a Winning Resume</h2>
              <p className="text-gray-700 mt-2">Tips and steps to create a resume that catches the recruiter's attention.</p>
              <Link to="/dashboard/workshop/articlecontents" className="text-blue-600 mt-4 inline-block">Read more <i className="fas fa-arrow-right"></i></Link>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Latest articles</h2>
          <div className="flex space-x-8">
            <aside className="w-1/4">
              <ul className="space-y-2">
                <li><a href="#" className="text-blue-600">All</a></li>
                <li><a href="#" className="text-gray-700 hover:text-blue-600">Resume Writing</a></li>
                <li><a href="#" className="text-gray-700 hover:text-blue-600">Interview Preparation</a></li>
                <li><a href="#" className="text-gray-700 hover:text-blue-600">Portfolio Building</a></li>
                <li><a href="#" className="text-gray-700 hover:text-blue-600">Personal Branding</a></li>
                <li><a href="#" className="text-gray-700 hover:text-blue-600">Job Search Strategies</a></li>
                <li><a href="#" className="text-gray-700 hover:text-blue-600">Workplace Skills</a></li>
                <li><a href="#" className="text-gray-700 hover:text-blue-600">Career Growth</a></li>
              </ul>
            </aside>

            <div className="w-3/4 space-y-8">
              {[{ category: "Interview Preparation", date: "Nov 20, 2024", title: "Interview Preparation 101" },
                { category: "Personal Branding", date: "Nov 19, 2024", title: "Mastering LinkedIn Optimization" },
                { category: "Resume Writing", date: "Nov 18, 2024", title: "5 Resume Mistakes You Should Avoid to Land Your Dream Job" },
                { category: "Resume Writing", date: "Nov 17, 2024", title: "Crafting a Winning Resume for Fresh Graduates" },
                { category: "Interview Preparation", date: "Nov 16, 2024", title: "The Top 10 Behavioral Questions and How to Answer Them" },
                { category: "Interview Preparation", date: "Nov 15, 2024", title: "Ace Your Next Job Interview with These Body Language Tips" },
                { category: "Portfolio Building", date: "Nov 14, 2024", title: "Designing a Standout Portfolio for Creative Professionals" },
                { category: "Portfolio Building", date: "Nov 13, 2024", title: "Why Every Data Scientist Needs a GitHub Portfolio" },
                { category: "Personal Branding", date: "Nov 12, 2024", title: "How to Build a Professional LinkedIn Profile in 5 Easy Steps" },
                { category: "Personal Branding", date: "Nov 11, 202en 4", title: "The Art of Personal Branding for Freelancers" },
                { category: "Job Search Strategies", date: "Nov 10, 2024", title: "Mastering Job Boards: Finding Hidden Opportunities Online" },
                { category: "Workplace Skills", date: "Nov 9, 2024", title: "Time Management Tips for Young Professionals" }
              ].map((article, index) => (
                <div key={index} className="border-b pb-4">
                  <span className="text-gray-500">{article.category} &mdash; {article.date}</span>
                  <h3 className="text-xl font-semibold mt-2">{article.title}</h3>
                  <a href="#" className="text-blue-600 mt-2 inline-block">Read more <i className="fas fa-arrow-right"></i></a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Article
