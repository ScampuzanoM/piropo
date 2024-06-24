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
        '*LOCAL DE PERRAS!* 🌭🤘🏻',
        '',
        '¿De qué estás antojado hoy?',
        'Nuestros productos son artesanales e irresistibles. Nuestro producto estrella es ⭐️ *la Perra especial grande*',
        '',
        '🤤 Antójate aquí:',
        'https://acortar.link/eB2xs9',
        '',
        '😎 Abrimos todos los días a las 5pm',
        '📍 Sede Sabaneta y Envigado',
        '',
        '*QUÉ QUIERES HOY?*',
        '',
        'Solo debes responder con el número según lo que necesites:',
        '',
        '1. 🛵 Domicilio',
        '2. 🥡 Pedir y recoger en tienda (aplica para sede Sabaneta)',
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
