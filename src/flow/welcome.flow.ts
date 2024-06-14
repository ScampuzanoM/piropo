import { addKeyword, EVENTS } from '@builderbot/bot';
import { MemoryDB as Database } from '@builderbot/bot'
import { BaileysProvider as Provider } from '@builderbot/provider-baileys'
import { clienteActualFlow } from './cliente.actual.flow';
import { reset, start } from '../idle-custom'



export const welcomeFlow = addKeyword<Provider, Database>(['hola', 'hoola', 'ole', 'alo', 'buenas', 'menu', 'holi', 'hol', 'oe', 'buenos'])
.addAnswer(`🤟🏻 ¡Bienvenido a LOCAL DE PERRAS! 🌭🍔🍟
Las perras más irresistibles del planeta. Somos diferentes, te lo aseguro:
🥓 No somos tocineta, somos cerdo ahumado hecho con mucho cuidado para que valga la pena el pecao´
🍞 Nuestro pan es casero y artesanal, nada tradicional
🍅 Salsas especiales, hechas a mano, nada industriales

🤤 Menú: https://www.instagram.com/stories/highlights/18020276515790871/

📍 Ubicaciones
• Sabaneta: Después del hospital Venancio Diaz
• Envigado: Barrio Alcalá
*En esta sede también puedes pedir opciones mexicanas: https://www.instagram.com/stories/highlights/18323790559134119/

😎 Abrimos todos los días
Domingo a jueves: 5pm-11pm
Viernes y sábado: 5pm-12am`, { delay: 4000 })
    .addAction(async (ctx, { gotoFlow }) => start(ctx, gotoFlow, Number(process.env.TIEMPOINACTIVIDAD) ))
    .addAnswer(
        [
            'La experiencia para perriar con nosotros es muy fácil. Solo debes responder con el número según lo que necesites:',
            '',
            '1. 🛵 Quiero pedir un domicilio',
            '2. 🥡 Quiero pedir y recoger en tienda',
            '3. 🗣️ Quiero hablar con alguien del equipo'
        ].join('\n'),
        {capture: true},
        async (ctx, { gotoFlow, fallBack}) => {
                reset(ctx, gotoFlow, Number(process.env.TIEMPOINACTIVIDAD));
                const opcion = ctx.body
                switch (opcion) {
                    case '1': {
                        return gotoFlow(clienteActualFlow)
                    }
                    case '2': {
                        return gotoFlow(clienteActualFlow)
                    }

                    default: {
                        return fallBack('🌟 ¡por favor ingresa una opcion valida! 🌟..')
                    }
                }
            },
        []
    )

