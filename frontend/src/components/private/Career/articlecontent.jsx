import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ArticleContent = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await fetch('/api/articlecontent'); // Replace with your API endpoint
                if (!response.ok) {
                    throw new Error('Failed to fetch articles');
                }
                const data = await response.json();
                // Sort articles by date in descending order
                const sortedArticles = data.sort((a, b) => new Date(b.date) - new Date(a.date));
                setArticles(sortedArticles);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching articles:', error);
                setError(error.message);
                setLoading(false);
            }
        };

        fetchArticles();
    }, []);

    if (loading) {
        return <div>Loading articles...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const latestArticle = articles[0]; // The most recent article
    const otherArticles = articles.slice(1); // Remaining articles

    return (
        <div className="bg-gray-50">
            <main className="container mx-auto px-4 py-8">
            <Link 
            to="/dashboard/workshop" 
            className="inline-flex items-center bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300 px-4 py-2 text-[14px] mb-6">
            <i className="fas fa-arrow-left mr-2"></i>Workshop
            </Link>

                {/* Latest Article Section */}
                {latestArticle && (
                    <section className="mb-8">
                        <div className="relative">
                            <img
                                src={latestArticle.author_image_url}
                                alt={latestArticle.title}
                                className="w-full h-64 object-cover"
                            />
                            <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg">
                                <button className="bg-blue-600 text-white px-4 py-2 rounded">
                                    {latestArticle.category}
                                </button>
                                <span className="text-gray-500 ml-4">
                                    {new Date(latestArticle.date).toLocaleDateString()}
                                </span>
                                <h2 className="text-2xl font-bold mt-2">{latestArticle.title}</h2>
                                <p className="text-gray-700 mt-2">{latestArticle.description}</p>
                                <Link
                                    to={`/dashboard/workshop/article/${latestArticle.id}`}
                                    className="text-blue-600 mt-4 inline-block"
                                >
                                    Read more <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </section>
                )}

                {/* Other Articles Section */}
                <section>
                    <h2 className="text-2xl font-bold text-blue-600 mb-4">Latest Articles</h2>
                    <div className="flex space-x-8">
                        <aside className="w-1/4">
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="text-blue-600">
                                        All
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-700 hover:text-blue-600">
                                        Resume Writing
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-700 hover:text-blue-600">
                                        Interview Preparation
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-700 hover:text-blue-600">
                                        Portfolio Building
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-700 hover:text-blue-600">
                                        Personal Branding
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-700 hover:text-blue-600">
                                        Job Search Strategies
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-700 hover:text-blue-600">
                                        Workplace Skills
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-700 hover:text-blue-600">
                                        Career Growth
                                    </a>
                                </li>
                            </ul>
                        </aside>

                        <div className="w-3/4 space-y-8">
                            {otherArticles.map((article) => (
                                <div key={article.id} className="border-b pb-4">
                                    <span className="text-gray-500">
                                        {article.category} &mdash; {new Date(article.date).toLocaleDateString()}
                                    </span>
                                    <h3 className="text-xl font-semibold mt-2">
                                        <Link
                                            to={`/dashboard/workshop/article/${article.id}`}
                                            className="text-blue-600 hover:underline"
                                        >
                                            {article.title}
                                        </Link>
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ArticleContent;
