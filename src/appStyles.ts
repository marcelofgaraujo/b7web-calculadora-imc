import styled from "styled-components";
import powered from './assets/powered.png'

export const Body = styled.div`
    width: 100vw;
    height: auto;
    overflow-x: hidden;
`
export const Header = styled.header`
    background-image: url(${powered});
    height: 50px;
    width: auto;
    margin-left: 9.5vw;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center left 9.4%;
    margin-top: 100px;
    display: flex;

    @media (max-width: 900px) {
        width: 100vw;
        height: 35px;
        margin: 20px 0 0 5px;
    }
`
export const Main = styled.main`
    display: flex;
    gap: 100px;
    width: 100vw;
    justify-content: center;
    margin-top: 50px;

    @media (max-width: 900px) {
        flex-direction: column;
        align-items: center;
        margin-top: 25px;
        gap: 50px;
        height: auto;
    }
`
export const Left = styled.aside`
    display: flex;
    flex-direction: column;
    width: 29vw;
    gap: 60px;

    @media (max-width: 900px) {
        width: 80%;
        gap: 30px;
    }
`
export const Info = styled.div`
    width: 100%;
    height: auto;

    h1 {
        font-weight: 500;
        font-size: 70px;
        text-align: center;
    }

    p {
        font-weight: 400;
        font-size: 20px;
        margin-top: 30px;
    }

    @media (max-width: 900px) {
        h1 {
            font-size: 40px;
        }

        p {
            margin: 15px 0 0 0;
            font-size: 17px;
            text-align: justify;
        }
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
        width: 100%;
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

    @media (max-width: 900px) {
        gap: 15px;
        align-items: center;
        
        input {
            height: 25px;
            font-size: 17px;
            width: 100%;
        }

        button {
            height: 40px;
            font-size: 19px;
            width: 100%;
            margin-top: 20px;
        }
    }
`
export const Right = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    width: 620px;
    height: 520px;

    @media (max-width: 900px) {
        width: 350px;
        justify-content: center;
        gap: 10px;
        height: 310px;
        margin-bottom: 30px;
    }
`