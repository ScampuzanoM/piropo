import { addKeyword, EVENTS } from '@builderbot/bot';
import { MemoryDB as Database } from '@builderbot/bot'
import { BaileysProvider as Provider } from '@builderbot/provider-baileys'
import { reset } from '../idle-custom'

export const alguienFlow = addKeyword<Provider, Database>('algiuien')
//.addAnswer(`📲 Vas a querer comerte todas estas delicias. Recuerda que puedes engallar GRATIS tu pedido con queso costeño, puerro crocante, relish de pepinillos, cebollas encurtidas y nuestras salsas artesanales ⬇️😏`, { delay: 4000 })
.addAnswer(
    [
        'Te voy a comunicar con alguien del equipo de *Local de Perras* de Sabaneta 🌭',
        '',
        'Mientras te respondemos te dejo el menú para que te vayas antojando de nuestras delicias 🤤⬇️'
    ]
)
.addAnswer(
    [
        ' '
    ],
{ media: 'https://firebasestorage.googleapis.com/v0/b/flikflka.appspot.com/o/elite-pagos%2Fmenu.jpeg?alt=media&token=56041095-4a11-48f2-aeba-eb0b1a9d969f' })
