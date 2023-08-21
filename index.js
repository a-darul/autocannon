const fs = require('fs');
const autocannon = require('autocannon');

const baseUrl = 'http://localhost:3003';
const requests = require('./requests');

function startBench() {
  const instance = autocannon({
    url: baseUrl,
    connections: 100,
    duration: 10,
    requests
  }, finishedBench)

  autocannon.track(instance)

  process.once('SIGINT', () => {
    instance.stop()
  })

  function finishedBench(err, res) {
    console.log('finished benchmarking')
    if (err) {
      console.error('some errors happen ', err)
    } else {
      autocannon.printResult(res)
    }
  }
}

startBench();
