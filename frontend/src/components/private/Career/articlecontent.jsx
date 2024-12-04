import React from 'react';

const ArticleContent = () => {
  return (
    <div className="bg-gray-100">
      <div id="root"></div>
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <img src="https://placehold.co/1200x400" alt="Hands working on a resume" className="w-full" />
          <div className="p-8">
            <h1 className="text-3xl font-bold mb-4 text-left">5 Resume Mistakes You Should Avoid to Land Your Dream Job</h1>
            <p className="text-gray-600 mb-6 text-left">Tips to fix common resume mistakes to make it more professional.</p>
            <div className="flex items-center mb-6">
              <img src="https://placehold.co/50x50" alt="Author's profile picture" className="rounded-full w-12 h-12 mr-4" />
              <div>
                <div className="font-bold text-left">Mishela Audry</div>
                <div className="text-gray-500 text-left">Nov 9, 2024</div>
              </div>
            </div>
            <div className="space-y-6 text-left">
              <div>
                <h2 className="text-xl font-bold mb-2">Mistake #1: Using a Generic Template</h2>
                <p className="text-gray-700 mb-2"><strong>Why it Matters:</strong> Although sifting through hundreds of resumes daily, a generic template not only fails to capture the reader's eye but also gives the impression that you haven't put effort into presenting yourself professionally.</p>
                <p className="text-gray-700 mb-2"><strong>What to do Instead:</strong></p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Customize for the Role: Use a resume layout that fits your industry. For creative roles, consider using unique designs; for corporate roles, stick to clean, classic designs.</li>
                  <li>Highlight Key Achievements: Ensure your key achievements are prominent.</li>
                  <li>Leverage Tools: Platforms like Canva, Zety, or Figma offer customizable templates to make your resume visually appealing while keeping it professional.</li>
                  <li>Pro Tip: Tailor your resume's content and format to match the tone of the company. A tech startup might appreciate creativity, while a financial firm may prefer simplicity.</li>
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2">Mistake #2: Oversharing Irrelevant Information</h2>
                <p className="text-gray-700 mb-2"><strong>Why it Matters:</strong> Recruiters spend an average of 6-8 seconds scanning a resume. Including irrelevant details can distract them from your qualifications and dilute your overall impact.</p>
                <p className="text-gray-700 mb-2"><strong>What to do Instead:</strong></p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Spot & Focus: Only list experiences, skills, and achievements relevant to the job you're applying for.</li>
                  <li>Customize for Each Job: Avoid sending the same resume to every application. Tailor it to reflect the job description and company requirements.</li>
                  <li>Leave Out Personal Details: Basic information such as marital status, hobbies (unless relevant), and outdated achievements can clutter your resume.</li>
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2">Mistake #3: Ignoring the Power of Action Verbs</h2>
                <p className="text-gray-700 mb-2"><strong>Why it Matters:</strong> Recruiters want to see impact, not responsibilities. Phrases like "responsible for" make your achievements sound passive and fail to convey a sense of accomplishment.</p>
                <p className="text-gray-700 mb-2"><strong>What to do Instead:</strong></p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Use Action Verbs: Start each bullet point with dynamic words such as "led", "designed", "improved", or "optimized".</li>
                  <li>Be Impactful: Use keywords to demonstrate how your contributions benefited the team or company.</li>
                  <li>Be Specific: Replace general phrases like "helped improve sales" with "spearheaded a marketing campaign that increased sales by 20%".</li>
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2">Mistake #4: Failing to Quantify Achievements</h2>
                <p className="text-gray-700 mb-2"><strong>Why it Matters:</strong> Numbers and metrics provide concrete evidence of your accomplishments. Without them, your resume may lack the impact needed to stand out.</p>
                <p className="text-gray-700 mb-2"><strong>What to do Instead:</strong></p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Add Metrics: Use data to quantify your achievements. For example, "Increased sales by 15%" or "Managed a team of 10".</li>
                  <li>Be Specific: Replace vague statements with specific numbers and percentages.</li>
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2">Mistake #5: Neglecting Proofreading</h2>
                <p className="text-gray-700 mb-2"><strong>Why it Matters:</strong> Typos and grammatical errors can make you seem careless, even if your skills are top-notch. Many recruiters immediately reject resumes with avoidable mistakes.</p>
                <p className="text-gray-700 mb-2"><strong>What to do Instead:</strong></p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Use Tools: Platforms like Grammarly and Hemingway App can catch errors and suggest improvements.</li>
                  <li>Double-Check: Be meticulous; ensure your contact information is correct, especially your email and phone number.</li>
                  <li>Get a Second Opinion: Ask a trusted friend, mentor, or career coach to review your resume with fresh eyes.</li>
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2">Bonus Tip: Keep It Concise</h2>
                <p className="text-gray-700 mb-2">While it's important to include relevant information, your resume should ideally be one to two pages long. Recruiters don't have time to read lengthy resumes, so focus on what truly matters.</p>
              </div>
              <div className="mt-8">
                <img src="https://placehold.co/1200x400" alt="Sample resume layout" className="w-full" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-left">
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
      </main>
    </div>
  );
};

export default ArticleContent;
