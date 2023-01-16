import styled from 'styled-components';

export const NumberItem = styled.div`
    display: inline-flex;
    width: 50px;
    height: 50px;
    border-radius: 4px;
    border: 2px solid #ddd;
    justify-content: center;
    align-items: center;
`

export const HiddenInput = styled.input`
    position: absolute;
    width: 0;
    height: 0;
    border: none;
    outline: none;
`

export const PinWrapper = styled.label`
    display: flex;
    justify-content: center;
    * + * {
        margin-left: 10px;
    }
`

export const PinInputWrapper = styled.div`
    &:focus-within .number-item {
        border-color: #aaa;
        &.active {
            border-color: #5c00ff63;
        }
    }
`