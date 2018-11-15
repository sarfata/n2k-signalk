const chai = require('chai')
chai.Should()
const assert = require('assert')
const mapper = require('./testMapper')

describe('Timestamp processing', function () {
  it('converts date in UTC to something parse-able by `new Date()`', function () {
    var delta = mapper.toDelta(
      JSON.parse(
        '{"timestamp":"2013-10-08-16:04:06.044Z","prio":"3","src":"1","dst":"255","pgn":"999999","description":"System Time","fields":{"SID":"222","Date":"2013.10.08", "Time": "16:04:00"}}'
      )
    )
    assert.equal(new Date(delta.updates[0].timestamp).toISOString(), "2013-10-08T16:04:06.044Z")
  })

  it('assumes UTC if no timezone is provided', function () {
    var delta = mapper.toDelta(
      JSON.parse(
        '{"timestamp":"2013-10-08-16:04:06.044","prio":"3","src":"1","dst":"255","pgn":"999999","description":"System Time","fields":{"SID":"222","Date":"2013.10.08", "Time": "16:04:00"}}'
      )
    )
    assert.equal(new Date(delta.updates[0].timestamp).toISOString(), "2013-10-08T16:04:06.044Z")
  })
})

