import { addKeyword, EVENTS } from '@builderbot/bot';
import { MemoryDB as Database } from '@builderbot/bot';
import { BaileysProvider as Provider } from '@builderbot/provider-baileys';
import { domicilioFlow } from './domicilio.flow';
import { recogerFlow } from './recoger.flow';
import { reset, start } from '../idle-custom';



export const welcomeFlow = addKeyword<Provider, Database>(['hola', 'hoola', 'ole', 'alo', 'buenas', 'menu', 'holi', 'hol', 'oe', 'buenos'])
.addAnswer(
    [
        'Llegaste a perriar a',
        'LOCAL DE PERRAS! 🌭',
        '',
        '¿De qué estás antojado hoy?',
        'Todos nuestros productos son artesanales e irresistibles. Nuestro producto estrella es ⭐️ la Perra especial grande.',
        '',
        '🤤 Antójate haciendo click aquí: [enlace a story en redes actualizada] - pendiente valen @~Vale',
        '',
        '😎 Abrimos todos los días a las 5pm',
        '📍 Sede Sabaneta y Envigado',
        '',
        'QUÉ QUIERES HOY?',
        '',
        'La experiencia para perriar con nosotros es muy fácil. Solo debes responder con el número según lo que necesites:',
        '',
        '1. 🛵 Domicilio',
        '2. 🥡 Pedir y recoger en tienda',
        '3. 🗣️ Hablar con alguien'
    ].join('\n'),
        {capture: true},
        async (ctx, { gotoFlow, fallBack}) => {
                reset(ctx, gotoFlow, Number(process.env.TIEMPOINACTIVIDAD));
                const opcion = ctx.body
                switch (opcion) {
                    case '1': {
                        return gotoFlow(domicilioFlow)
                    }
                    case '2': {
                        return gotoFlow(recogerFlow)
                    }

                    default: {
                        return fallBack('🌟 ¡por favor ingresa una opcion valida! 🌟..')
                    }
                }
            },
        []
    )
