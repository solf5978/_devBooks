import * as React from 'react'

import '../css/36cssInReact.css'

// Inline Style Approach
const Item = ({ item, onRemoveItem }) => (
    <li className="item">
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
                className='button button_small'
            >
                Dismiss
            </button>
        </span>
    </li>
)

const InputWithLabel = ({ }) => {

    return (
        <>
            <label htmlFor={id} className='label'>
                {children}
            </label>
            &nbsp;
            <input
            ref={inputRef}
            id={id}
            type={type}
            value={value}
            onChange={onInputChange}
            className='input'
            />
        </>
    )
}

const SearchForm = ({}) => (
    <form onSubmit={onSearchSubmit} className='search-form'>
        <InputWithLabel>
            <strong>Search: </strong>
        </InputWithLabel>

        <button
            type="submit"
            disabled={!searchTerm}
            className='button button_large'>
            Submit
        </button>
    </form>
)

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