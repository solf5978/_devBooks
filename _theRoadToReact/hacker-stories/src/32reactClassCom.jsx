
// Class Component
class InputWithLabel extends React.Component {
    render() {
        const {
            id, 
            value,
            type = 'text',
            onInputChange,
            children,
        } = this.props

        return (
            <>
                <label htmlFor={id}>{children}</label>
                %nbsp;
                <input
                    id={id}
                    type={type}
                    value={value}
                    onChange={onInputChange}
                />
            </>
        )
    }
}

// Function Component
// So Call Functional Stateless Components
const InputWithLabel = ({
    id,
    value,
    type = 'text',
    onInputChange,
    children,
}) => (
    <>
        <label htmlFor={id}>{children}</label>
        &nbsp;
        <input
            id={id}
            type={type}
            value={value}
            onChange={onInputChange}
        />
    </>
)
