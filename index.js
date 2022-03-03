const express = require("express")
const app = express()
const axios = require("axios")

app.use("/public", express.static(__dirname + "/public"))

app.get("/users", async function (req, res) {
    try {
        const ign = req.query.ign || 'Nigerian'
        const inocentMTCHATOMANN = await (await axios.get('https://api.mojang.com/users/profiles/minecraft/' + ign)).data
        const mtmtmtMTCHATOMANN = await (await axios.get('https://api.gapple.pw/status/' + inocentMTCHATOMANN.id)).data
        
        const skin = `https://crafatar.com/renders/body/${inocentMTCHATOMANN.id}`
        let migrada = (mtmtmtMTCHATOMANN.status.startsWith('migrated') || mtmtmtMTCHATOMANN.status.startsWith('msa')) ? 'Microsoft' : 'Mojang'

        res.render("index.ejs", { skin, name: inocentMTCHATOMANN.name, migrada })
    } catch (e) {
        res.redirect('/users')
    }
})


app.listen(process.env.PORT)
