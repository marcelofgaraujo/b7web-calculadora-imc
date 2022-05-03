import Down from '../assets/down.png'
import Up from '../assets/up.png'

export const listStatus = [
    {
        situation: 'Magreza',
        bottomLimit: 0,
        upperLimit: 18.5,
        bgImg: Down,
        bgColor: 'rgba(152,152,152,1.0)',
    },
    {
        situation: 'Normal',
        bottomLimit: 18.5,
        upperLimit: 25,
        bgImg: Up,
        bgColor: 'rgba(0,125,0,1.0)',
    },
    {
        situation: 'Sobrepeso',
        bottomLimit: 25,
        upperLimit: 30,
        bgImg: Down,
        bgColor: 'rgba(180,160,0,1.0)',
    },
    {
        situation: 'Obesidade',
        bottomLimit: 30,
        upperLimit: 99,
        bgImg: Down,
        bgColor: 'rgba(155,0,0,1.0)',
    }
]