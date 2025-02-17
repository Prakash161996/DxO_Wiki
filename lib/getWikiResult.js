import React from 'react'

export default async function getWikiResult(search) {
    const apiUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=${encodeURIComponent(search)}`;
    const response = await fetch(apiUrl)
    const data = await response.json();
     return data;
}
