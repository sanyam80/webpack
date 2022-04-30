import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
function sum(a,b){
    return a+b;
}
console.log(sum(2,3))
console.log(sum(5,8));

// var h1 = React.createElement("p",{},"hello react");
// var img = React.createElement("img",{width:"300px",height:"400px",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCnz8arwBJVsd5YnvgALW2f4Dr5my6usiWMA&usqp=CAU"});
// var toshow = true;
// var p = React.createElement("p",{id:"redtext",class:"border"},h1,h1,toshow ? img:null)

ReactDOM.render(
<div>
    <h1>Hello world</h1> <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCnz8arwBJVsd5YnvgALW2f4Dr5my6usiWMA&usqp=CAU"
    height="400px" width="500px"/>
    <table border = "1">
        <tr>
            <td>1</td>
            <td>sanyam</td>
        </tr>
    </table>
</div>,//what
document.getElementById("root") //where
)


