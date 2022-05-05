import styled from 'styled-components'

type StatusProps = {
    bgColor: string;
    bgImg: string;
    isSelected: boolean,
    shouldHide: boolean
}

export const Status = styled.div<StatusProps>`
    display: ${props => props.shouldHide ? 'none' : 'flex'};
    flex-direction: column;
    align-items: center;
    background-image: url(${props => props.bgImg});
    background-color: ${props => props.bgColor};
    width: ${props => props.isSelected ? '100%' : '300px'};
    height: ${props => props.isSelected ? '100%' : '250px'};
    border-radius: 10px;
    color: white;
    background-repeat: no-repeat;
    background-position: center top 20%;
    position: relative;

    h2 {
        font-weight: 500;
        font-size: ${props => props.isSelected ? '50px' : '35px'};
        margin-top: ${props => props.isSelected ? '200px' : '145px'};
    }

    .result {
        font-size: 25px;
        margin-bottom: 50px;
    }

    svg {
        height: 70px;
        width: 70px;
        position: absolute;
        top: 50%;
        left: 0px;
        transform: translateY(-50%);
        cursor: pointer;
    }
`