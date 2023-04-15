/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
   function callBack(e){
      if(e.profession=="developer"){
        console.log(e)
      }
    }
    arr.map(callBack);
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  function callBack(e){
        if(e.profession=="developer"){
            console.log(e);
        }
    }
    arr.forEach(callBack)
}

function addData() {
  //Write your code here, just console.log
  let obj= {id:4,name:"susan",age:"20",profession:"intern"};
    arr.push(obj);
    console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  for(let i=0;i<arr.length;i++){
        if(arr[i].profession=="admin")
        {
           arr.splice(i,1);
        }
    }
    console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr1 = [
        { id: 4, name: "adam", age: "25", profession: "Designer" },
        { id: 5, name: "sins", age: "30", profession: "Engineer" },
        { id: 6, name: "kiran", age: "17", profession: "student" },
      ];
      let childArr=arr.concat(arr1);
      console.log(childArr);
}
