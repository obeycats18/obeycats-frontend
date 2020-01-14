export const generateNumber = () => {
    let number = Math.ceil(Math.random() * 100);

    if(number !== Math.ceil(Math.random() * 100)){
        return number
    } else{
        number = Math.ceil(Math.random() * 100)
        return number 
    }    
}