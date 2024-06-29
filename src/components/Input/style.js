import styled from 'styled-components';

export const InputContainer = styled.div`
    width:100%;
    background: #13192c;
    border: none;
    border-bottom: 1px solid gray;
    margin: .5rem 0;
    &&::before: {
       content: "" ; 
    }
`

export const IconContainer = styled.div`
    margin-right:10px;
`

export const InputText = styled.input`
    background-color: transparent;
    color: #FFF;
    flex: 1;
    border: 0;
    height: 100%;
    width: 100%
` 