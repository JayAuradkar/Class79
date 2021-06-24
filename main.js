var Name = [];
function Submit(){
    Name1 = document.getElementById("Friend_1").value;
    Name2 = document.getElementById("Friend_2").value;
    Name3 = document.getElementById("Friend_3").value;
    Name4 = document.getElementById("Friend_4").value;
    Name.push(Name1);
    Name.push(Name2);
    Name.push(Name3);
    Name.push(Name4);
    document.getElementById("o_0utput").innerHTML = Name;
document.getElementById("Submit").style.display="none";
document.getElementById("Sort").style.display="inline-block";
}
function Sorting(){
 Name.sort();
 document.getElementById("o_0utput").innerHTML = Name;
 document.getElementById("Sort").style.display="none";
 document.getElementById("Submit").style.display="inline-block";
}
