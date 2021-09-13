function numDuplicates(name, price, weight){
	let count = 0;
	
	while(name.length){
    let item = {
      name: name[0],
      price: price[0],
      weight: weight[0]
      }

    name.shift()
    price.shift()
    weight.shift()

    for(let i=0;i < name.length; i++){
      
      if(item.name == name[i] && item.price == price[i] &&item.weight == weight[i]){
        count++;
        name.splice(i,1)
        price.splice(i,1)
        weight.splice(i,1)
      }
    }
  }

  console.log(count)
  return count;
}

numDuplicates(["ball","bat","glove","glove","glove"],
[2,3,1,2,1],
[2,5,1,1,1])
