import fs from "fs"

const conf = JSON.parse(fs.readFileSync('config.json', 'utf-8'))

export default conf