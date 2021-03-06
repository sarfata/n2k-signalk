module.exports = [
  {
    source: 'COG',
    node: 'navigation.courseOverGroundTrue',
    filter: function (n2k) {
      return n2k.fields['COG Reference'] === 'True'
    }
  },
  {
    source: 'SOG',
    node: 'navigation.speedOverGround',
    filter: function (n2k) {
      return n2k.fields['SOG']
    }
  },
  {
    node: 'environment.current',
    filter: function (n2k) {
      return n2k.fields['Drift'] && n2k.fields['Set']
    },
    value: function (n2k) {
      if (n2k.fields['COG Reference'] === 'True') {
        return {
          setTrue: Number(n2k.fields.Set),
          drift: Number(n2k.fields['Drift'])
        }
      } else if (n2k.fields['Set Reference'] === 'Magnetic') {
        // speculative, I don't have a real world sample showing 'Magnetic'
        return {
          setTrue: Number(n2k.fields.Set),
          drift: Number(n2k.fields['Drift'])
        }
      }
    }
  }
]
