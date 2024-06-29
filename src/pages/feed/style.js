import styled from "styled-components"


export const Container = styled.div`
    widht:100%;
    height:100%;
    display: flex;
    justify-content: space-around;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: left;
    margin: 1rem 2px 0 0 ;
    max-width: 100%
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: left;
    margin: 2.5rem auto;
    max-width: 500px;
    background: gray;
    padding: 10px;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-items: left;
`
export const Img = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 100%;
    border 3 px solid white;
    margin: 10px ;
`

