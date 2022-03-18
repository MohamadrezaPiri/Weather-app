import React from 'react'

function SearchBox({ query, setQuery, search }) {
    return (
        <div className="search-box">
            <input
                placeholder="Search..."
                type="text"
                className="search-bar"
                onChange={e => setQuery(e.target.value)}
                value={query}
                onKeyPress={search}
            />
        </div>
    )
}

export default SearchBox