class InputWithLabel extends React.Component {
    constructor(props) {
        super(props)

        this.inputRef = React.createRef()
    }

    componentDidMount() {
        if (this.props.isFocused) {
            this.inputRef.current.focus()
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

                <input
                    ref={this.inputRef}
                    id={id}
                    type={type}
                    value={value}
                    onChange={onInputChange}
                />
            </div>
        )
    }
}