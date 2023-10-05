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

type Stories = Story[];

type ListProps = {
    list: Stories
    onRemoveItem: (item: Story ) => void
}

const List: React.FC<ListProps> = ({
    list,
    onRemoveItem
}) => (
    <ul>

    </ul>
)

const App = () => {

    const handleRemoveStory = (item: Story) => {
        dispatchStories({
            type: 'REMOVE_STORY',
            payload: item,
        })
    }
}

type StoriesState = {
    data: Stories
    isLoading: boolean
    isError: boolean
}

// type StoriesAction = {
//     type: string
//     payload: any
// }

const storiesReducer = (
    state: StoriesState,
    action: StoriesAction,
) => {

}

type StoriesFetchInitAction = {
    type: 'STORIES_FETCH_INIT'
}

type StoriesFetchSuccessAction = {
    type: 'STORIES_FETCH_SUCCESS'
    payload: Stories
}

type StoriesFetchFailureAction = {
    type: 'STORIES_FETCH_FAILURE'
}

type StoriesRemoveAction = {
    type: 'REMOVE_STORY'
    payload: Story
}

type StoriesAction = 
    StoriesFetchInitAction
    | StoriesFetchSuccessAction
    | StoriesFetchFailureAction
    | StoriesRemoveAction

const storiesReducer = (
    state: StoriesState,
    action: StoriesAction
) => {

}

type SearchFormProps = {
    searchTerm: string
    onSearchInput: (event: React.ChangeEvent<HTMLInputElement>) => void
    onSearchSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

const SearchForm: React.FC<SearchFormProps> = ({
    searchTerm,
    onSearchInput,
    onSearchSubmit,
}) => (
    <p></p>
)

