let num = 0;


fuck:
for (let i = 0;i < 10;i++){
    setTimeout(console.log(i),1000);
    for(let j = 0;j < 10; j++) {
        if (i === 5 && j === 5) {
            break fuck;
        }
        num++;
    }
}
