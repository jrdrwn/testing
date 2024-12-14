import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Article = () => {
    const { id } = useParams(); // Retrieve the dynamic ID from the URL
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const response = await fetch(`/api/article-authors/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch article details');
                }
                const data = await response.json();
                setArticle(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching article:', error);
                setError(error.message);
                setLoading(false);
            }
        };

        fetchArticle();
    }, [id]);

    if (loading) {
        return <div className="text-center py-8"><p className="text-lg text-gray-600">Loading article...</p></div>;
    }

    if (error) {
        return <div className="text-center py-8"><p className="text-lg text-red-600">Error: {error}</p></div>;
    }

    return (
        <div>
            <Link to="/dashboard/workshop" className="flex items-center bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300 px-4 py-2 text-[14px] w-20 mb-6">
            <i className="fas fa-arrow-left mr-2"></i>Back
          </Link>
            <div className="container mx-auto px-4 py-8">
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <img src={article.author_image_url} alt={article.title} className="w-full h-64 object-cover rounded-lg mb-6" />
                    <div className="flex items-center">
                        <img src={article.author_image_url} alt={article.author_name} className="w-12 h-12 rounded-full mr-4" />
                        <span className="text-gray-700 font-semibold">{article.author_name}</span>
                    </div>
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">{article.title}</h1>
                    <p className="text-gray-600 mb-4">{article.description_new}</p>
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">{article.title}</h1>
                    <p className="text-gray-600 mb-4">{article.description_new}</p>
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">{article.title}</h1>
                    <p className="text-gray-600 mb-4">{article.description_new}</p>
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">{article.title}</h1>
                    <p className="text-gray-600 mb-4">{article.description_new}</p>
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">{article.title}</h1>
                    <p className="text-gray-600 mb-4">{article.description_new}</p>
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">{article.title}</h1>
                    <p className="text-gray-600 mb-4">{article.description_new}</p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <div className="bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4">Comments (3)</h2>
                <div className="space-y-6">
                    <div className="bg-white shadow rounded-lg p-4">
                        <div className="flex items-center mb-4">
                            <img src="https://placehold.co/50x50" alt="Commenter's profile picture" className="rounded-full w-12 h-12 mr-4" />
                            <div>
                                <div className="font-bold">Sarah Tan</div>
                                <div className="text-gray-500">18:32, 2 days ago</div>
                            </div>
                        </div>
                        <p className="text-gray-700 mb-4">This article is a game-changer! I realized I was guilty of at least three of these mistakes. After tweaking my resume using these tips, I landed an interview within a week. Thank you for such practical advice!</p>
                        <div className="flex items-center space-x-4">
                            <div className="text-blue-600"><i className="fas fa-thumbs-up"></i> 67</div>
                            <div className="text-blue-600"><i className="fas fa-comment"></i> 2</div>
                        </div>
                    </div>
                    <div className="bg-white shadow rounded-lg p-4">
                        <div className="flex items-center mb-4">
                            <img src="https://placehold.co/50x50" alt="Commenter's profile picture" className="rounded-full w-12 h-12 mr-4" />
                            <div>
                                <div className="font-bold">Muhammad Yusuf</div>
                                <div className="text-gray-500">17:45, 3 days ago</div>
                            </div>
                        </div>
                        <p className="text-gray-700 mb-4">Great article with actionable tips! I especially liked the advice about quantifying achievements. However, it would be helpful to see a sample resume that incorporates all these tips.</p>
                        <div className="flex items-center space-x-4">
                            <div className="text-blue-600"><i className="fas fa-thumbs-up"></i> 25</div>
                            <div className="text-blue-600"><i className="fas fa-comment"></i> 0</div>
                        </div>
                    </div>
                    <div className="bg-white shadow rounded-lg p-4">
                        <div className="flex items-center mb-4">
                            <img src="https://placehold.co/50x50" alt="Commenter's profile picture" className="rounded-full w-12 h-12 mr-4" />
                            <div>
                                <div className="font-bold">Clara Wijaya</div>
                                <div className="text-gray-500">14:07, 4 days ago</div>
                            </div>
                        </div>
                        <p className="text-gray-700 mb-4">As someone who's been reviewing resumes for years, I can confirm these are some of the most common mistakes people make. Excellent insights, especially about using action verbs. Highly recommended!</p>
                        <div className="flex items-center space-x-4">
                            <div className="text-blue-600"><i className="fas fa-thumbs-up"></i> 34</div>
                            <div className="text-blue-600"><i className="fas fa-comment"></i> 0</div>
                        </div>
                    </div>
                </div>
                <div className="mt-6">
                    <textarea className="w-full border rounded-lg p-4" rows="4" placeholder="Join the discussion and share your thoughts or experiences"></textarea>
                    <button className="bg-blue-600 text-white rounded-lg px-4 py-2 mt-4">Add Comment</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Article;
