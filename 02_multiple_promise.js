let cleanRoom = function() {
  return new Promise(function(resolve, reject) {
    resolve('Cleaned The Room');
  });
};

let removeGarbage = function(message) {
  return new Promise(function(resolve, reject) {
    resolve(message + ' remove Garbage');
  });
};

let winIcecream = function(message) {
  return new Promise(function(resolve, reject) {
    resolve( message + ' won Icecream');
  });
};

cleanRoom().then(function(result){
	return removeGarbage(result);
}).then(function(result){
	return winIcecream(result);
}).then(function(result){
	console.log('finished ' + result);
})
 
/***
 * give a result when all the promises is resolved
 */
Promise.all([cleanRoom, removeGarbage, winIcecream]).then(()=>{
  console.log('all the process is finished...');
})

/***
 * give a result when one of the  promise is complete
 */
Promise.race([cleanRoom, removeGarbage, winIcecream]).then(()=>{
  console.log('one of the process is finished...');
})
