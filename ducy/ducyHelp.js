ducy.help = function() {
  randucy.newLine('||========[ Ducy Help ]========||')
  for (let i = 0; i < ducy.data.help.length; i++) {
    randucy.newLine(ducy.data.help[i].name + ': ' + ducy.data.help[i].description + '[' + ducy.data.help[i].usage + ']')
  }
  randucy.newLine('||=============================||')
}
