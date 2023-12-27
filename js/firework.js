import { Fireworks } from 'fireworks-js'


const container = document.querySelector('#firework')
const fireworks = new Fireworks(container, { /* options */ })
fireworks.start()
