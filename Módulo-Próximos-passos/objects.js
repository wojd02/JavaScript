friend = {name: 'josé', width_f: 85, add_width(w){return a = friend.width_f += w}}
console.log(`${friend.name}, ${friend.width_f}`)
new_width = friend.add_width(10)
console.log(new_width)