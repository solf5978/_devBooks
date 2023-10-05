import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

const useStorageState = (
    key: string,
    initialState: string
): [string, (newValue: string) => void] => {
    const [value, setValue] = React.useState(
        localStorage.getItem(key) || initialState
    )

    React.useEffect(() => {
        localStorage.setItem(key, value)
    }, [value, key])
    return [value, setValue]
}

// const Item = ({
//     item,
//     onRemoveItem,
// }: {
//     item: {
//         objectID: string
//         url: string
//         title: string
//         author: string
//         num_comments: number
//         points: number
//     }
//     onRemoveItem: (item: {
//         objectID: string
//         url: string
//         title: string
//         author: string
//         num_comments: number
//         points: number
//     }) => void
// }) => (
//     <li>
        
//     </li>
// )

type Story = {
    objectID: string
    url: string
    title: string
    author: string
    num_comments: number
    points: number
}


// const Item = ({
//     item,
//     onRemoveItem,
// }: {
//     item: Story
//     onRemoveItem: (item: Story) => void
// }) => (
//     <li>

//     </li>
// )
// })

type ItemProps = {
    item: Story
    onRemoveItem: (item: Story) => void
}

// const Item = ({
//     item, 
//     onRemoveItem }: ItemProps) => (
//         <li>

//         </li>
//     )

const Item: React.FC<ItemProps> = ({ 
    item, 
    onRemoveItem 
}): JSX.Element => (
    <li>

    </li>
)