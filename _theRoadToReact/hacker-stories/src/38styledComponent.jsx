import * as React from 'react'
import axios from 'axios'
import styled from 'styled-components'

// HTMl Elements
const Item = ({ item, onRemoveItem }) => (
    <StyledItem>
        <StyledColumn width="40%">
            <a href={item.url}>{item.title}</a>
        </StyledColumn>
        <StyledColumn width="30%">{item.author}</StyledColumn>
        <StyledColumn width="10%">{item.num_comments}</StyledColumn>
        <StyledColumn width="10%">{item.points}</StyledColumn>
        <StyledColumn width="10%">
            <StyledButtonSmall
                type="button"
                onClick={() => onRemoveItem(item)}
            > Dismiss
            </StyledButtonSmall>
        </StyledColumn>
    </StyledItem>
    )

 const SearchForm = ({}) => (
    <StyledSearchForm onSubmit={onSearchSubmit}>
        <InputWithLabel
        id="search"
        value={searchTerm}
        isFocused
        onInputChange={onSearchInput}>
        <strong>Search:</strong>
        </InputWithLabel>

        <StyledButtonLarge type="submit" disabled={!searchTerm}>
            Submit
        </StyledButtonLarge>
    </StyledSearchForm>
 )

 const InputWithLabel = ({}) => {
    return (
        <>
            <StyledLabel htmlFor={id}>{children}</StyledLabel>
            &nbsp;
            <StyledInput
                ref={inputRef}
                id={id}
                type={type}
                value={value}
                onChange={onInputChange} />
        </>
    )
 }

// Styled Components
const StyledContainer = styled.div`
    height: 100vw;
    padding: 20px;
    
    background: #83A4D4;
    background: linear-gradient(to left, #b6fbff, #83A4D4);
    
    color: #171212;
    `;

const StyledHeadlinePrimary = styled.h1`
    font-size: 2rem;
    font-weight: 300;
    letter-spacing: 2px;
    `;

const StyledItem = styled.li`
    display: flex;
    align-items: center;
    padding-bottom: 5px;
`
const StyledColumn = styled.span`
    padding: 0 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    a {
        color: inherit;
    }

    width: ${(props) => props.width};
`

const StyledButton = styled.button`
    background: transparent;
    border: 1px solid #171212;
    padding: 15px;
    cursor: pointer;

    transition: all 0.1 ease-in;

    &:hover {
        background: #171212;
        color: #FFFFFF;
    }
`

const StyledButtonSmall = styled(StyledButton)`
    padding: 5px;
`

const StyledButtonLarge = styled(StyledButton)`
    padding: 10px;
`

const StyledSearchForm = styled.form`
    padding: 10px 0 20px 0;
    display: flex;
    align-items: baseline;
`

const StyledLabel = styled.label`
    border-top: 1px solid #171212;
    border-left: 1px solid #171212;
    padding-left: 5px;
    font-size: 1.5rem;
`

const StyledInput = styled.input`
    border: none;
    border-bottom: 1px solid #171212;
    background-color: transparent;

    font-size: 1.5rem;
`

const App = () => {
    return (
        <StyledContainer>
            <StyledHeadlinePrimary>My Hacker Stories</StyledHeadlinePrimary>
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
        </StyledContainer>
    )
}