let args = process.argv.slice(2);

//argument array sorted in ascending order
const sortedArgs = args.sort(function(a,b) {
  return a - b;
})
  for (let arg of sortedArgs) {
    if(arg >= 0 && !isNaN(arg)) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, arg * 1000);
  }
}
  

