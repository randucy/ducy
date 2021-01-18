function runDucy() {
  let args = input.value.slice(5).trim().split(/ +/g);
  let command = args.shift().toLowerCase();
  console.log(command)

  switch(command) {
    case 'install':
      ducyInstall()
      break

    case 'help':
      ducyHelp()
      break
  }
}
