const data = [
  {
    id: 12313,
    name: "adan",
    color: "yellow",
  },
  {
    id: 1234,
    name: "hehe",
    color: "red",
  },
];
console.log(data[1].id);
const idEdit = (data[1].id = 1110000000);
console.log(idEdit);
console.table(data);

const data2 = [...data]
console.table(data2);

