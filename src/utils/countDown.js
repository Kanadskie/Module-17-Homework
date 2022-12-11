function countDown(n) {

    if(typeof(n) == 'number' && n >= 1) {

        for (let i = n; i >= 1; --i) {

            console.log(i);

        } 
      
    } else if(typeof(n) == 'string') {
      
      console.log('This counter can\'t countdown words')
      
    } else {
      
      console.log('Number is < 1')
      
    }
  
}

module.exports = countDown;