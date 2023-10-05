import * as React from 'react'
import axios from 'axios';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

const getSumComments = (stories) => {
    console.log('C')

    return stories.data.reduce(
        (result, value) => result + value.num_comments,
        0
    )
}

const useStorageState = (key, initialState) => {
    const isMounted = React.useRef(false)
    const [value, setValue] = React.useState(
        localStorage.getItem(key) || initialState
    )

    React.useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true
        } else {
            console.log('A')
            localStorage.setItem(key, value)
        }
    }, [value, key])
}

const List = React.memo(
    ({ list, onRemoveItem }) => 
    console.log('B:List') || (
    <ul>
        {list.map((item) => (
            <item
                key={item.objectID}
                item={item}
                onRemoveItem={onRemoveItem}
            />
        ))}
    </ul>
))

const App = () => {
    console.log('B:App')

    const sumComments = getSumComments(stories)

    React.useEffect(() => {
        console.log('How Many TImes Do I Log')
        handleFetchStories();
    }, [handleFetchStories])
    
    const handleRemoveStory = React.useCallback((item) => {
        dispatchStories({
            type: 'REMOVE_STORY',
            payload: item,
        })
    }, [])

    return (
        <div>
            <h1>My Hacker Stories with { sumComments } comments.</h1>
        </div>
    )
}