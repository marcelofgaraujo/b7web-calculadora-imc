import styled from "styled-components";
import powered from './assets/powered.png'

export const Body = styled.div`
    width: 100vw;
    height: auto;
`
export const Header = styled.header`
    background-image: url(${powered});
    height: 50px;
    width: auto;
    margin-left: 10vw;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center left 9.4%;
    margin-top: 100px;
    display: flex;
`
export const Main = styled.main`
    display: flex;
    gap: 100px;
    width: 100vw;
    justify-content: center;
    margin-top: 50px;
`
export const Left = styled.aside`
    display: flex;
    flex-direction: column;
    width: 29vw;
    gap: 60px;
`
export const Info = styled.div`
    width: 100%;
    height: auto;

    h1 {
        font-weight: 500;
        font-size: 70px;
    }

    p {
        font-weight: 400;
        font-size: 20px;
        margin-top: 30px;
    }
`
export const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;

    input {
        height: 40px;
        border: transparent;
        border-bottom: 1.3px solid gray;
        outline: none;
        font-size: 20px;
        text-indent: 5px;
    }

    button {
        height: 60px;
        border-radius: 15px;
        border: none;
        cursor: pointer;
        background-color:rgba(0,0,255,0.6);
        color: white;
        font-size: 23px;
        font-weight: 300;
        margin-top: 70px;
    }
`
export const Right = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    width: 620px;
    height: 520px;
`