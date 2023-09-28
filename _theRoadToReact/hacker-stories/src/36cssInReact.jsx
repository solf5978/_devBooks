import * as React from 'react'

import '../css/36cssInReact.css'

const App = () => {

    const handleSearchInput = () => {

    }

    const handleRemoveStory = (story, action) => {

    }

    const handleSearchSubmit = () => {

    }

    return (
        <div className="container">
            <h1 className="headline-primary">
                My Hacker Stories
            </h1>

        <SearchFrom
            searchTerm={searchTerm}
            onSearchInput={handleSearchInput}
            onSearchSubmit={handleSearchSubmit}
        />

        {stories.isError && <p>Something went wrong...</p>}
        {stories.isLoading ? (
            <p>Loading... </p>
        ) : (
            <List list={stories.data} onRemoveItem={handleRemoveStory} />
        )}
        </div>
    )
}