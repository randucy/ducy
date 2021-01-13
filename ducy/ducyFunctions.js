function runDucy() {
  let args = input.value.slice(5).trim().split(/ +/g);
  let command = args.shift().toLowerCase();

  switch(command) {
    case 'install':
      ducyInstall()
      break

    case 'help':
      ducyHelp()
      break
  }
  console.log('outi')
}
