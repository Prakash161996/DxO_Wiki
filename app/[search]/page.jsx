import getWikiResult from '@/lib/getWikiResult';
import React from 'react';

export default async function Page({ params }) {
  console.log(params);
  const wikiData = getWikiResult(params.search);
  const data = await wikiData;

  const results = data?.query?.search || [];
  console.log(results);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Search Title */}
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
        Search Results for: <span className="text-blue-400">{params.search}</span>
      </h2>
      
      {/* Search Results Box */}
      <div className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg">
        {results.length === 0 ? (
          <p className="text-gray-400 text-center">No results found.</p>
        ) : (
          <ul className="space-y-6">
            {results.map((item) => (
              <li 
                key={item.pageid} 
                className="w-full p-4 border border-gray-700 rounded-lg bg-gray-900 hover:bg-gray-700 transition duration-300"
              >
                <a
                  href={`https://en.wikipedia.org/?curid=${item.pageid}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 text-lg font-semibold hover:underline"
                >
                  {item.title}
                </a>
                <p
                  dangerouslySetInnerHTML={{ __html: item.snippet }}
                  className="text-gray-300 mt-2 text-sm sm:text-base"
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
