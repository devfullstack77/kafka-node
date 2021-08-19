
const util = require('util')
const { run } = require('../producer/index')
const { kafka } = require('../common/connection')
const exec = util.promisify(require('child_process').exec);

const producer = {}

describe('Producer', () => {

    test('instance kafka', async () => {
        producer.init = await kafka.producer()
    })

    test('connect server', async () => {
        await producer.init.connect()
    })

    test('send message', async () => {
        const queue = await run(`Send message test....${new Date().getTime().toString()}`)
        expect(queue.error).toBe(null);
    })

    test('disconnet server', async () => {
        await producer.init.disconnect()
    })

    test('console input', async () => {
        const { stderr } = await exec(`node ./src/producer/console.js ARGS_INPUT_TEST_${new Date().getTime().toString()}`)
        expect(stderr).toBe("");
    })

})

