class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            searchTerm: 'React',
        }
    }

    render() {
        const { searchTerm } = this.state

        return (
            <div>
                <h1>My Hacker Stories</h1>
                <SearchForm
                    searchTerm={searchTerm}
                    onSearchInput={() => this.setState({
                        searchTerm: event.target.value
                    })}
                />
            </div>
        )
    }
}