import * as React from 'react'
import axios from 'axios';

import styles from '../css/37cssInCss.css';

const Item = ({ item, onRemoveItem }) => (
    <li className={styles.item}>
        <span style={{ width: '40%' }}>
            <a href={item.url}>{item.title}</a>
        </span>
        <span style={{ width: '30%' }}>{item.author}</span>
        <span style={{ width: '10%' }}>{item.num_comments}</span>
        <span style={{ width: '10%' }}>{item.points}</span>
        <span style={{ width: '10%' }}>
        <button
                type='button'
                onClick={ () => onRemoveItem(item)}
                className={`${styles.button} ${styles.buttonSmall}`}
            >
                Dismiss
            </button>
        </span>
    </li>
)

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