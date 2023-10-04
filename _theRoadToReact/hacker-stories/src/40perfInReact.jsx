import * as React from 'react'
import axios from 'axios';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

const App = () => {
    React.useEffect(() => {
        console.log('How Many TImes Do I Log')
        handleFetchStories();
    }, [handleFetchStories])
}