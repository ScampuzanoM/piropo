import { addKeyword, EVENTS } from '@builderbot/bot';
import { MemoryDB as Database } from '@builderbot/bot'
import { BaileysProvider as Provider } from '@builderbot/provider-baileys'
import { reset } from '../idle-custom'

export const domicilioFlow = addKeyword<Provider, Database>('USUARIOS_REGISTRADOS')
//.addAnswer(`📲 Vas a querer comerte todas estas delicias. Recuerda que puedes engallar GRATIS tu pedido con queso costeño, puerro crocante, relish de pepinillos, cebollas encurtidas y nuestras salsas artesanales ⬇️😏`, { delay: 4000 })
.addAnswer([' '],
{ media: 'https://firebasestorage.googleapis.com/v0/b/flikflka.appspot.com/o/elite-pagos%2FM%20LOCAL.jpg?alt=media&token=8f2d6ba5-24ad-44d7-ba35-112470282aa2' })
.addAnswer(
    [
        '✍🏻 Para agilizarte tu pedido, envíame:',
        '',
        '*🌭 Qué productos quieres?*',
        '*👤 Nombre completo*',
        '*📲 Celular*',
        '*🌃 Dirección completa/Barrio*',
        '',
        'Recuerda que en *LOCAL DE PERRAS* puedes engallar *GRATIS* tu pedido con queso costeño, puerro crocante, relish de pepinillos, cebollas encurtidas y nuestras salsas artesanales. Al elegir tu producto, cuéntame ahí mismo con qué te lo engallamos!'
    ].join('\n'),
    { delay: 800, capture: true }
)