let myPromise = new Promise((resolve, reject) =>{
    let vegtablesList = ["WaterMalon" , "Apple" , "Peach" , "Strawbery" , "Grapes" , "Banana" , "Apricot"];

    setTimeout(() => {
        resolve(vegtablesList);
        reject("Some Thing Went Wrong.");
    }, 3000);
});


async function print(){
    let vegtables = await myPromise;
    
    vegtables.forEach((veg) => {
        let board = document.createElement("div");
        document.body.appendChild(board);
        board.innerText += veg;
    }); 
};

print();