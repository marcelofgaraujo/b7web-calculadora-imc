import styled from 'styled-components'

type StatusProps = {
    bgColor: string;
    bgImg: string;
    isSelected: boolean
}

export const Status = styled.div<StatusProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(${props => props.bgImg});
    background-color: ${props => props.bgColor};
    width: ${props =>  props.isSelected ? '100%' : '300px'};
    height: ${props =>  props.isSelected ? '100%' : '250px'};
    border-radius: 10px;
    color: white;
    background-repeat: no-repeat;
    background-position: center top 20%;

    h2 {
        font-weight: 500;
        font-size: 35px;
        margin-top: 145px;
    }
`