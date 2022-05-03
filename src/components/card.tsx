import { Status } from './cardStyle'

type Props = {
    data: {
        situation: string,
        bottomLimit: number,
        upperLimit: number,
        bgColor: string,
        bgImg: string,
    }
    isSelected: boolean
}

function Card ({data, isSelected}: Props) {
    return (
    <Status bgImg={data.bgImg} bgColor={data.bgColor} isSelected={isSelected}>
        <h2>{data.situation}</h2>
        <p>IMC está entre {data.bottomLimit} e {data.upperLimit}</p>
    </Status>
    )
}

export default Card