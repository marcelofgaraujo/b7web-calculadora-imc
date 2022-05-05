import { Status } from './cardStyle';
import { FiArrowLeft } from "react-icons/fi";

type Props = {
    data: {
        situation: string,
        bottomLimit: number,
        upperLimit: number,
        bgColor: string,
        bgImg: string,
    }
    isSelected: boolean,
    IMC: number,
    handleClearCallBack: () => void,
    shouldHide: boolean
}

function Card({ data, isSelected, IMC, handleClearCallBack, shouldHide }: Props) {
    return (
        <Status bgImg={data.bgImg} bgColor={data.bgColor} isSelected={isSelected} shouldHide={shouldHide}>
            <h2>{data.situation}</h2>
            {isSelected && <>
            <FiArrowLeft onClick={handleClearCallBack}/>
            <p className='result'>Seu IMC é de {IMC.toFixed(2)} kg/m²</p></>}
            <p>IMC está entre {data.bottomLimit} e {data.upperLimit}</p>
        </Status>
    )
}

export default Card