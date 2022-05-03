import Down from '../assets/down.png'
import Up from '../assets/up.png'

export const listStatus = [
    {
        situation: 'Magreza',
        bottomLimit: 0,
        upperLimit: 18.5,
        bgImg: Down,
        bgColor: 'rgba(152,152,152,1.0)',
        thisSituation: false
    },
    {
        situation: 'Normal',
        bottomLimit: 18.6,
        upperLimit: 25,
        bgImg: Up,
        bgColor: 'rgba(0,125,0,0.7)',
        thisSituation: false
    },
    {
        situation: 'Sobrepeso',
        bottomLimit: 25.1,
        upperLimit: 30,
        bgImg: Down,
        bgColor: 'rgba(180,160,0,0.7)',
        thisSituation: false
    },
    {
        situation: 'Obesidade',
        bottomLimit: 30.1,
        upperLimit: 99,
        bgImg: Down,
        bgColor: 'rgba(155,0,0,0.7)',
        thisSituation: false
    }
]