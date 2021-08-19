const args = process.argv
const readline = require('readline')
const { run } = require('.')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.output
})

/**
 *Message on Kafka Using Console Input
 * @param  {} input  min 3 character 
 */

rl.on('line', async (input) => {
  if (input.trim().length >= 1)
    run(input.trim()).then((status) => {
      console.log(`[ QUEUED ] : ${JSON.stringify(status)}`)
    })
})

/**
 *! When given argument execute and terminate
 */
if (args.length >= 3) {
  rl.emit('line', args[2])
  rl.close()
}

