import 'dotenv/config'
const getConfig = () => {
    return {
        name: process.env.NAME || 'Devi',
        session: process.env.SESSION || 'Devi',
        prefix: process.env.PREFIX || '#',
        port: process.env.PORT || 3000,
        imgbb: process.env.IMGBB,
        chatboturi: process.env.BRAINSHOP || 'http://api.brainshop.ai/get?bid=165801&key=1ftAuFL7Fhj21Fyp&uid=[uid]&msg=[msg]',
        mongo: process.env.MONGO || 'mongodb+srv://chey:K77iYsuTRyJ4TgXf@cluster0.wtlbba3.mongodb.net/?retryWrites=true&w=majority',
        mods: process.env.MODS
            ? process.env.MODS.split(',').map((id) => {
                  if (id.endsWith('@s.whatsapp.net')) return id
                  return id.replace('+', '').concat('@s.whatsapp.net')
              })
            : []
    }
}

export default getConfig
