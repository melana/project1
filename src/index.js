var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

function newstring(){
    var line = "";
    while (line.length < 6) {
        line += chars[Math.floor(Math.random() * chars.length)];
    }
    
    isPalindrom = false;
    allNumbers = false;
    hasZero = false;

// Checking if line is palindrom

    if (line  === line.split('').reverse().join('')){
        isPalindrom = true}
 
      
// Checking if all symbols in line are numbers

    var checkline = Array.from(line);
     
    for (let i = 0; checkline.length;  i++) { 
        if (!isNaN(parseInt(checkline[i],10))){
            allNumbers = true 
        } else {
            allNumbers = false;
            break;
        }
    }
   
// Checking if line has zero

    if (checkline.includes['0']){
        hasZero = true;
    }

    var str = document.createElement('p');

    if (isPalindrom) {
        str.innerHTML = `${line}`
        str.style.color = 'red';
        document.querySelector('#lines').appendChild(str); 
    } else if (allNumbers) {
        str.innerHTML = `${line}`
        str.style.color = 'blue';
        document.querySelector('#lines').appendChild(str);
    } else if (!hasZero) {
        str.innerHTML = `${line}`
        document.querySelector('#lines').appendChild(str);
    } else {
        str.innerHTML = `${line}`
        document.querySelector('#lines').appendChild(str);
        
    }

}

const stream$ = interval(3000)
    .pipe(
        newstring(),
        take(5)
	)
   
stream$.subscribe()