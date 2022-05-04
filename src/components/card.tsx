import { Status } from './cardStyle'

type Props = {
    data: {
        situation: string,
        bottomLimit: number,
        upperLimit: number,
        bgColor: string,
        bgImg: string,
    }
    isSelected: boolean,
    IMC: number
}

function Card({ data, isSelected, IMC }: Props) {
    return (
        <Status bgImg={data.bgImg} bgColor={data.bgColor} isSelected={isSelected}>
            <h2>{data.situation}</h2>
            {isSelected && <>
            <div className='arrow'></div>
            <p className='result'>Seu IMC é de {IMC.toFixed(2)} kg/m²</p></>}
            <p> IMC está entre {data.bottomLimit} e {data.upperLimit}</p>
        </Status>
    )
}

export default Card