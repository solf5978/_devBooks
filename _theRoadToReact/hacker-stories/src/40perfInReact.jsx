import * as React from 'react'
import axios from 'axios';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

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

const App = () => {
    React.useEffect(() => {
        console.log('How Many TImes Do I Log')
        handleFetchStories();
    }, [handleFetchStories])
}