import * as React from 'react'
import axios from 'axios';

import styles from '../css/37cssInCss.css';

const App = () => {

    return (
        <div className={styles.container}>
            <h1 className={styles.headlinePrimary}>My Hacker Stories</h1>

            <SearchForm
                searchTerm={searchTerm}
                onSearchInput={handleSearchInput}
                onSearchSubmit={handleSearchSubmit}
            />

            {stories.isError && <p>Something went wrong...</p>}
            {stories.isLoading ? (
                <p>Loading...</p>
            ) : (
                <List list={stories.data} onRemoveItem={handleRemoveStory}/>
            )}
        </div>
    )
}