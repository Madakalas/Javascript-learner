let ids = [1,2,3,4,5,6]
let new_list = []

for(id in ids){
    new_list.push(id)

}
console.log(new_list)
new_list[2] = 61
console.log(ids)
console.log(new_list)