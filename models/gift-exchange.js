const { BadRequestError } = require("../utils/errors")

class GiftExchange {
    static pairs(names) {
        let namesCopy = [...names]
        let pairedNames = []
        if(names.length%2 == 1 || names.length < 1){
            throw new BadRequestError
        }
        while(namesCopy.length > 1){
            let randomIndex1 = Math.floor(Math.random()*namesCopy.length)
            let firstName = namesCopy[randomIndex1] +""
            namesCopy.splice(randomIndex1,1)
            let randomIndex2 = Math.floor(Math.random()*namesCopy.length)
            let secondName = namesCopy[randomIndex2] + "" 
            namesCopy.splice(randomIndex2, 1)
            let pairedArray = [firstName, secondName]
            pairedNames.push(pairedArray)  
        }
        return pairedNames;
    }
    static traditional(names) {
        let namesCopy = [...names]
        let randomIndex = Math.floor(Math.random()*namesCopy.length)
        let copyFirstName = namesCopy[randomIndex]
        let firstName = namesCopy[randomIndex]
        namesCopy.splice(randomIndex,1)
        let pairedNames = []
        let namesAsString = ""
        let newName = ""
        while(namesCopy.length > 0){
            randomIndex = Math.floor(Math.random()*namesCopy.length)
            newName = namesCopy[randomIndex]
            namesAsString = firstName + " is giving a gift to " + newName
            pairedNames.push(namesAsString)
            firstName = newName
            namesCopy.splice(randomIndex,1)
        }
        namesAsString = firstName + " is giving a gift to " + copyFirstName
        pairedNames.push(namesAsString)
        return pairedNames
    }
}
module.exports = GiftExchange