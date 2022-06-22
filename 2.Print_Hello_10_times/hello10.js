function hello10(){
    console.log("Hello, Spaceack!\n".repeat(2))
    for (let i = 0; i < 3; i++) {
        console.log("Hello, Spaceack!");
      }
    [...Array(2)].forEach(() => console.log('Hello, Spaceack!'))
    let count = 0;
    while (count < 3) {
    count++; 
    console.log('Hello, Spaceack!');
    };
}

hello10()