import styled from 'styled-components'
import arrow from '../assets/leftarrow.png'

type StatusProps = {
    bgColor: string;
    bgImg: string;
    isSelected: boolean
}

export const Status = styled.div<StatusProps>`
    display: flex;
    position: ${props => props.isSelected ? 'absolute' : 'static'};
    z-index: ${props=> props.isSelected ? '1' : '0'};
    flex-direction: column;
    align-items: center;
    background-image: url(${props => props.bgImg});
    background-color: ${props => props.bgColor};
    width: ${props => props.isSelected ? '620px' : '300px'};
    height: ${props => props.isSelected ? '520px' : '250px'};
    border-radius: 10px;
    color: white;
    background-repeat: no-repeat;
    background-position: center top 20%;

    h2 {
        font-weight: 500;
        font-size: ${props => props.isSelected ? '50px' : '35px'};
        margin-top: ${props => props.isSelected ? '200px' : '145px'};
    }

    .result {
        font-size: 25px;
        margin-bottom: 50px;
    }

    .arrow {
        background-image: ${arrow};
        height: 70px;
        width: 70px;
    }
`