import { addKeyword, EVENTS } from '@builderbot/bot';
import { MemoryDB as Database } from '@builderbot/bot'
import { BaileysProvider as Provider } from '@builderbot/provider-baileys'
import { reset } from '../idle-custom'

export const clienteActualFlow = addKeyword<Provider, Database>('USUARIOS_REGISTRADOS')
.addAnswer(`Voy a compartir una imagen del menú contigo.`,)
.addAnswer([' '],
{ media: 'https://firebasestorage.googleapis.com/v0/b/flikflka.appspot.com/o/elite-pagos%2FM%20LOCAL.jpg?alt=media&token=8f2d6ba5-24ad-44d7-ba35-112470282aa2' })
.addAnswer(
    [
        'Para agilizar tu pedido, envíame:',
        '',
        '*🍴 Qué productos quieres*',
        '*👤 Nombre completo*',
        '*📲 Celular*',
        '*🌃 Dirección completa*',
        '*🤑 Pago*',
        '    - En efectivo (necesitas devuelta?)',
        '    - Para transferencia: Bancolombia ahorros XX'
    ].join('\n'),
    { delay: 800, capture: true }
)