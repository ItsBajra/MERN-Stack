// Question no. 1
star = '';
for (i = 1; i<=5; i++) {
    star += '*';
    console.log(star);
}

// Question no.2 
for (let i = 1; i<=5; i++){
    star='';
    for (let j = 1; j<=7; j++){
        star += '*';
    }
    console.log(star);
}

// Question no. 3
for (i=5; i>=1; i--) {
    star='';
    for(j=1; j<=i; j++) {
        star +='*';
    }
    console.log(star);
}

// Question no. 4
for (let i = 1; i <= 5; i++){
    star = '';
    for (let j = 5 - i; j >= 1; j--){
        star += ' ';
    }
    for (let k = 1; k <= 2 * i - 1; k++){
        star += '*' ;       
    }
    console.log(star);
}

// Question no. 5
for (let i = 1; i <=5; i++){
    star = '';
    for (let k = 1; k < i; k++){
        star += ' ';
    }
    for (let j = 1; j <= 2*(5-i)+1; j++){
        star += '*';
    }
    console.log(star);
}

// Question no. 6
for (let i = 1; i <= 5; i++){
    star = '';
    for (let j = 1; j <= 7; j++){
        if (i == 1 || i == 5 || j == 1 || j == 7){
            star += '*';
        }
        else{
            star += ' ';
        }
    }
    console.log(star);
}

// Question no. 7
for (let i = 1; i <= 5; i++){
    star = '';
    for (let j = 1; j <=5; j++){
        if(i == j || j == 5 - i + 1){
            star += '*';
        }
        else {
            star += ' ';
        }
    }
    console.log(star);
}

// Question no. 8
for (let i = 1; i <=5; i++){
    star = '';
    for(let j = 1; j <= 5; j++){
        if (j == i || j == 5 - i + 1){
            star += '*';
        }
        else {
            star += ' ';
        }
    }
    console.log(star);
}

// Question no. 9
for(let i = 1; i <= 5; i ++){
    a = 1;
    star = '';
    for (let j = 1; j <=i; j++){
        star += a;
        a += 1;
    }
    console.log(star)
}

// Question no. 10
for (let i = 1; i <=5; i++){
    star = '';
    for( let j = 1; j <= i; j++){
        star += i;
    }
    console.log(star);
}

// Question no. 11
for (let i = 1; i <=5; i++){
    star = '';
    p = 1;
    for(let j = 5; j >= i; j--){
        star += p;
        p += 1;
    }
    console.log(star);
}

// Question no. 12
for (let i = 1; i <=5; i++){
    star = '';
    for (let j = 5; j >= 1; j--){
        star += j;
    }
    console.log(star);
}

// Question no. 13
for (let i = 1; i <= 5; i++){
    star = '';
    for (let j = 1; j <= 5 - i; j++){
        star += ' ';
    }
    for (let k = 1; k <= i; k++){
        star += '*';
    }
    console.log(star);
}

// Question no. 14
for (let i = 1; i <=5; i++){
    star = '';
    for (let j = 1; j <= 5 - i + 1; j++){
        star += j;
    }
    console.log(star);
}

// Question no. 15
letter = ['A', 'B', 'C', 'D', 'E'];
for (let i = 1; i <=5; i++){
    star = '';
    for (let j = 0; j < i ; j++){
        star += letter[j];
    }
    console.log(star);
}