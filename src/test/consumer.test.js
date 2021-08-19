
const util = require('util')
const { kafka, config } = require('../common/connection')

// const exec = util.promisify(require('child_process').exec);
// const { run } = require('../consumer/index')
// const { spawn } = require('child_process');

const consumer = {}

describe('Consumer', () => {

    test('instance kafka', async () => {
        consumer.init = await kafka.consumer({ groupId: config.groupId })
    })

    test('connect server', async () => {
        await consumer.init.connect()
    })

    test('disconnect server', async () => {
        await consumer.init.disconnect()
    })

    //TODO: Create test
    // test('subscribe up', async () => {
    // })


})

