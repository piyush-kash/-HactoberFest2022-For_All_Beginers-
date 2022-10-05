console.log("Hello World!!");
// let turn="X";
let k=1;
let w=0;
let idx_bot;
const arr_idx = [0,];
const arr_idx_x = [0,];
const arr_idx_o = [];
const boxes = document.getElementsByClassName("box");
function Bot_turn(){
    if(arr_idx_o.length==1){
        if(arr_idx_o[0]%2==1){
            return 4;
        }
        else{
            if(arr_idx_o[0]==2){
                return 6;
            }
            else if(arr_idx_o[0]==6 || arr_idx_o[0]==8){
                return 2;
            }
            else{
                return 8;
            }
        }
    }
    else if(arr_idx_o.length==2){
        if(arr_idx_o[0]%2==1){
            if(arr_idx_o[1]!=8){
                return 8;
            }
            else if(arr_idx_o[0]==7 || arr_idx_o[0]==1){
                return 6;
            }
            else{
                return 2;
            }
        }
        else{
            if(arr_idx_o[0]==2){
                if(arr_idx_o[1]!=3){
                    return 3;
                }
                else{
                    return 8;
                }
            }
            else if(arr_idx_o[0]==6){
                if(arr_idx_o[1]!=1){
                    return 1;
                }
                else{
                    return 8;
                }
            }
            else if(arr_idx_o[0]==8){
                if(arr_idx_o[1]!=1){
                    return 1;
                }
                else{
                    return 6;
                }
            }
            else{
                if(arr_idx_o[1]==2){
                    return 6;
                }
                else if(arr_idx_o[1]==6){
                    return 2;
                }
                else if(arr_idx_o[1]==1){
                    return 7;
                }
                else if(arr_idx_o[1]==3){
                    return 5;
                }
                else if(arr_idx_o[1]==5){
                    return 3;
                }
                else if(arr_idx_o[1]==7){
                    return 1;
                }
            }
        }
    }
    else if(arr_idx_o.length==3){
        if(arr_idx_o[0]%2==1){
            if(arr_idx_o[0]==7 || arr_idx_o[0]==1){
                if(arr_idx_o[2]!=3){
                    return 3;
                }
                else{
                    return 2;
                }
            }
            else{
                if(arr_idx_o[2]!=1){
                    return 1;
                }
                else{
                    return 6;
                }
            }
        }
        else{
            if(arr_idx_o[0]==2){
                if(arr_idx_o[2]!=4){
                    return 4;
                }
                else{
                    return 7;
                }
            }
            else if(arr_idx_o[0]==6){
                if(arr_idx_o[2]!=4){
                    return 4;
                }
                else{
                    return 5;
                }
            }
            else if(arr_idx_o[0]==8){
                if(arr_idx_o[2]!=4){
                    return 4;
                }
                else{
                    return 3;
                }
            }
            else{
                if(arr_idx_o[1]==2){
                    if(arr_idx_o[2]!=3){
                        return 3;
                    }
                    else{
                        return 7;
                    }
                }
                else if(arr_idx_o[1]==6){
                    if(arr_idx_o[2]!=1){
                        return 1;
                    }
                    else{
                        return 5;
                    }
                }
                else if(arr_idx_o[1]==1){
                    if(arr_idx_o[2]!=6){
                        return 6;
                    }
                    else{
                        return 1;
                    }
                }
                else if(arr_idx_o[1]==3){
                    if(arr_idx_o[2]!=2){
                        return 2;
                    }
                    else{
                        return 6;
                    }
                }
                else if(arr_idx_o[1]==5){
                    if(arr_idx_o[2]!=6){
                        return 6;
                    }
                    else{
                        return 2;
                    }
                }
                else if(arr_idx_o[1]==7){
                    if(arr_idx_o[2]!=2){
                        return 2;
                    }
                    else{
                        return 6;
                    }
                }
            }
        }
    }
    else{
        if(arr_idx_o[3]==1){
            return 7;
        }
        else if(arr_idx_o[3]==7){
            return 1;
        }
        else if(arr_idx_o[3]==5){
            return 3;
        }
        else if(arr_idx_o[3]==3){
            return 5;
        }
    }
}
function find(arr,value){
    for(let j=0;j<arr.length;j++){
        if(arr[j]==value){
            return true;
        }
    }
    return false;
}
function check_win(){
    if(arr_idx.length>=5){        
        if(find(arr_idx_x,0)){            
            if(find(arr_idx_x,1)){                
                if(find(arr_idx_x,2)){
                    document.getElementById("box_0").style.backgroundColor="yellow";
                    document.getElementById("box_1").style.backgroundColor="yellow";
                    document.getElementById("box_2").style.backgroundColor="yellow";
                    // document.getElementById("win").innerHTML="&nbspWin!!";
                    document.getElementById("info").innerHTML="You Lose!!";
                    document.getElementById("info").style.color="blue";
                    w++;
                    boxes.onclick=none;
                    return 0;
                }
            }            
            if(find(arr_idx_x,3)){                
                if(find(arr_idx_x,6)){
                    document.getElementById("box_0").style.backgroundColor="yellow";
                    document.getElementById("box_3").style.backgroundColor="yellow";
                    document.getElementById("box_6").style.backgroundColor="yellow";
                    // document.getElementById("win").innerHTML="&nbspWin!!";
                    document.getElementById("info").innerHTML="You Lose!!";
                    document.getElementById("info").style.color="blue";
                    w++;
                    boxes.onclick=none;
                    return 0;
                }
            }            
            if(find(arr_idx_x,4)){                
                if(find(arr_idx_x,8)){
                    document.getElementById("box_0").style.backgroundColor="yellow";
                    document.getElementById("box_4").style.backgroundColor="yellow";
                    document.getElementById("box_8").style.backgroundColor="yellow";
                    // document.getElementById("win").innerHTML="&nbspWin!!";
                    document.getElementById("info").innerHTML="You Lose!!";
                    document.getElementById("info").style.color="blue";
                    w++;
                    boxes.onclick=none;
                    return 0;
                }
            }
        }        
        if(find(arr_idx_x,1)){            
            if(find(arr_idx_x,4)){                
                if(find(arr_idx_x,7)){
                    document.getElementById("box_1").style.backgroundColor="yellow";
                    document.getElementById("box_4").style.backgroundColor="yellow";
                    document.getElementById("box_7").style.backgroundColor="yellow";
                    // document.getElementById("win").innerHTML="&nbspWin!!";
                    document.getElementById("info").innerHTML="You Lose!!";
                    document.getElementById("info").style.color="blue";
                    w++;
                    boxes.onclick=none;
                    return 0;
                }
            }
        }        
        if(find(arr_idx_x,2)){            
            if(find(arr_idx_x,4)){                
                if(find(arr_idx_x,6)){
                    document.getElementById("box_2").style.backgroundColor="yellow";
                    document.getElementById("box_4").style.backgroundColor="yellow";
                    document.getElementById("box_6").style.backgroundColor="yellow";
                    // document.getElementById("win").innerHTML="&nbspWin!!";
                    document.getElementById("info").innerHTML="You Lose!!";
                    document.getElementById("info").style.color="blue";
                    w++;
                    boxes.onclick=none;
                    return 0;
                }
            }            
            if(find(arr_idx_x,5)){                
                if(find(arr_idx_x,8)){
                    document.getElementById("box_2").style.backgroundColor="yellow";
                    document.getElementById("box_5").style.backgroundColor="yellow";
                    document.getElementById("box_8").style.backgroundColor="yellow";
                    // document.getElementById("win").innerHTML="&nbspWin!!";
                    document.getElementById("info").innerHTML="You Lose!!";
                    document.getElementById("info").style.color="blue";
                    w++;
                    boxes.onclick=none;
                    return 0;
                }
            }
        }        
        if(find(arr_idx_x,3)){            
            if(find(arr_idx_x,4)){                
                if(find(arr_idx_x,5)){
                    document.getElementById("box_3").style.backgroundColor="yellow";
                    document.getElementById("box_4").style.backgroundColor="yellow";
                    document.getElementById("box_5").style.backgroundColor="yellow";
                    // document.getElementById("win").innerHTML="&nbspWin!!";
                    document.getElementById("info").innerHTML="You Lose!!";
                    document.getElementById("info").style.color="blue";
                    w++;
                    boxes.onclick=none;
                    return 0;
                }
            }
        }        
        if(find(arr_idx_x,6)){            
            if(find(arr_idx_x,7)){                
                if(find(arr_idx_x,8)){
                    document.getElementById("box_6").style.backgroundColor="yellow";
                    document.getElementById("box_7").style.backgroundColor="yellow";
                    document.getElementById("box_8").style.backgroundColor="yellow";
                    // document.getElementById("win").innerHTML="&nbspWin!!";
                    document.getElementById("info").innerHTML="You Lose!!";
                    document.getElementById("info").style.color="blue";
                    w++;
                    boxes.onclick=none;
                    return 0;
                }
            }
        }        
        // if(find(arr_idx_o,0)){            
        //     if(find(arr_idx_o,1)){                
        //         if(find(arr_idx_o,2)){
        //             document.getElementById("box_0").style.backgroundColor="yellow";
        //             document.getElementById("box_1").style.backgroundColor="yellow";
        //             document.getElementById("box_2").style.backgroundColor="yellow";
        //             // document.getElementById("win").innerHTML="&nbspWin!!";
        //             document.getElementById("info").innerHTML="You Lose!!";
        //             document.getElementById("info").style.color="blue";
        //             w++;
        //             boxes.onclick=none;
        //             return 0;
        //         }
        //     }            
        //     if(find(arr_idx_o,3)){                
        //         if(find(arr_idx_o,6)){
        //             document.getElementById("box_0").style.backgroundColor="yellow";
        //             document.getElementById("box_3").style.backgroundColor="yellow";
        //             document.getElementById("box_6").style.backgroundColor="yellow";
        //             // document.getElementById("win").innerHTML="&nbspWin!!";
        //             document.getElementById("info").innerHTML="You Lose!!";
        //             document.getElementById("info").style.color="blue";
        //             w++;
        //             boxes.onclick=none;
        //             return 0;
        //         }
        //     }            
        //     if(find(arr_idx_o,4)){                
        //         if(find(arr_idx_o,8)){
        //             document.getElementById("box_0").style.backgroundColor="yellow";
        //             document.getElementById("box_4").style.backgroundColor="yellow";
        //             document.getElementById("box_8").style.backgroundColor="yellow";
        //             // document.getElementById("win").innerHTML="&nbspWin!!";
        //             document.getElementById("info").innerHTML="You Lose!!";
        //             document.getElementById("info").style.color="blue";
        //             w++;
        //             boxes.onclick=none;
        //             return 0;
        //         }
        //     }
        // }        
        // if(find(arr_idx_o,1)){            
        //     if(find(arr_idx_o,4)){                
        //         if(find(arr_idx_o,7)){
        //             document.getElementById("box_1").style.backgroundColor="yellow";
        //             document.getElementById("box_4").style.backgroundColor="yellow";
        //             document.getElementById("box_7").style.backgroundColor="yellow";
        //             // document.getElementById("win").innerHTML="&nbspWin!!";
        //             document.getElementById("info").innerHTML="You Lose!!";
        //             document.getElementById("info").style.color="blue";
        //             w++;
        //             boxes.onclick=none;
        //             return 0;
        //         }
        //     }
        // }        
        // if(find(arr_idx_o,2)){            
        //     if(find(arr_idx_o,4)){                
        //         if(find(arr_idx_o,6)){
        //             document.getElementById("box_2").style.backgroundColor="yellow";
        //             document.getElementById("box_4").style.backgroundColor="yellow";
        //             document.getElementById("box_6").style.backgroundColor="yellow";
        //             // document.getElementById("win").innerHTML="&nbspWin!!";
        //             document.getElementById("info").innerHTML="You Lose!!";
        //             document.getElementById("info").style.color="blue";
        //             w++;
        //             boxes.onclick=none;
        //             return 0;
        //         }
        //     }            
        //     if(find(arr_idx_o,5)){                
        //         if(find(arr_idx_o,8)){
        //             document.getElementById("box_2").style.backgroundColor="yellow";
        //             document.getElementById("box_5").style.backgroundColor="yellow";
        //             document.getElementById("box_8").style.backgroundColor="yellow";
        //             // document.getElementById("win").innerHTML="&nbspWin!!";
        //             document.getElementById("info").innerHTML="You Lose!!";
        //             document.getElementById("info").style.color="blue";
        //             w++;
        //             boxes.onclick=none;
        //             return 0;
        //         }
        //     }
        // }        
        // if(find(arr_idx_o,3)){            
        //     if(find(arr_idx_o,4)){                
        //         if(find(arr_idx_o,5)){
        //             document.getElementById("box_3").style.backgroundColor="yellow";
        //             document.getElementById("box_4").style.backgroundColor="yellow";
        //             document.getElementById("box_5").style.backgroundColor="yellow";
        //             // document.getElementById("win").innerHTML="&nbspWin!!";
        //             document.getElementById("info").innerHTML="You Lose!!";
        //             document.getElementById("info").style.color="blue";
        //             w++;
        //             boxes.onclick=none;
        //             return 0;
        //         }
        //     }
        // }        
        // if(find(arr_idx_o,6)){            
        //     if(find(arr_idx_o,7)){                
        //         if(find(arr_idx_o,8)){
        //             document.getElementById("box_6").style.backgroundColor="yellow";
        //             document.getElementById("box_7").style.backgroundColor="yellow";
        //             document.getElementById("box_8").style.backgroundColor="yellow";
        //             // document.getElementById("win").innerHTML="&nbspWin!!";
        //             document.getElementById("info").innerHTML="You Lose!!";
        //             document.getElementById("info").style.color="blue";
        //             w++;
        //             boxes.onclick=none;
        //             return 0;
        //         }
        //     }
        // }
    }
}
// function changeTurn(){
//     if(turn=="X"){
//         turn="O";
//     }
//     else{
//         turn="X";
//     }
// }
function print(i){
    for(let j=0; j<arr_idx.length;j++){
        if(arr_idx[j]==i){
            return 0;
        }
    }
    arr_idx_o.push(i);
    // if(turn == "X"){
    //     arr_idx_x.push(i);
    // }
    // else{
    //     arr_idx_o.push(i);
    // }
    arr_idx.push(i);
    if(w>0){
        boxes.onclick=alert("Game Over!!");
        return 0;
    }
    boxes[i].innerHTML='O';
    idx_bot = Bot_turn();
    arr_idx_x.push(idx_bot);
    arr_idx.push(idx_bot);
    boxes[idx_bot].innerHTML='X';
    k = check_win();
    if(k==0){
        return 0;
    }
    if(arr_idx.length==9){
        document.getElementById("info").innerHTML="It's Draw!!";
        document.getElementById("info").style.color="red";
    }
    // changeTurn();
    // document.getElementById("player").innerHTML=turn;
}
// function print(i){
//     for(let j=0; j<arr_idx.length;j++){
//         if(arr_idx[j]==i){
//             return 0;
//         }
//     }
//     if(turn == "X"){
//         arr_idx_x.push(i);
//     }
//     else{
//         arr_idx_o.push(i);
//     }
//     arr_idx.push(i);
//     if(w>0){
//         boxes.onclick=alert("Game Over!!");
//         return 0;
//     }
//     boxes[i].innerHTML=turn;
//     k = check_win();
//     if(k==0){
//         return 0;
//     }
//     if(arr_idx.length==9){
//         document.getElementById("info").innerHTML="It's Draw!!";
//         document.getElementById("info").style.color="red";
//     }
//     changeTurn();
//     document.getElementById("player").innerHTML=turn;
// }