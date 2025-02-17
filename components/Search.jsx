// Search.tsx
'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    setSearch('');
    router.push(`/${search}/`);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row w-full sm:w-auto">
      <input
        type="text"
        placeholder="Search..."
        className="p-2 border rounded-xl text-black w-full sm:w-80"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="p-2 border rounded-xl bg-blue-500 text-white mt-2 sm:mt-0 sm:ml-2 w-full sm:w-auto"> {/* Added margin and width control */}
        Search
      </button>
    </form>
  );
}
