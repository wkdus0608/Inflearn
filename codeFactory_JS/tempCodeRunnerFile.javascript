
let H = 23;
let M = 40;


if (M > 45) {
    console.log(`${H} ${M-45}`);
} else if (M < 45) {
    if (H == 0) {
        console.log(`23 ${60 + M - 45}`);
    } else {
        console.log(`${H-1} ${60 + M - 45}`);  
    }
}

