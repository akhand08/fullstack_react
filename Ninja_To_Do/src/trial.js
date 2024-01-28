

const data = [
    {
        taskname: "Rund 30 Minute",
        deadline: "10 October",
        id: 1
    },
];

console.log(data);
data.push( {
    taskname: "Having Dinner",
    deadline: "14 November",
    key: data.length + 1,
});


// data = [... {
//     taskname: "Having Dinner",
//     deadline: "14 November",
//     key: data.length + 1,
// }];

console.log(data);