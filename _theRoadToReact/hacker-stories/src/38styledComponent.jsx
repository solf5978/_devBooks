import * as React from 'react'
import axios from 'axios'
import styled from 'styled-components'

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