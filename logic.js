document.addEventListener("DOMContentLoaded", function () { 
    let q = questions[Math.floor(Math.random()*questions.length)];
    nextQuestion();
});

let correct = 0;
let allPoints = 0;

function nextQuestion(){
    q = questions[Math.floor(Math.random()*questions.length)];
    const main = document.getElementById("main");
    main.innerHTML = "<td style=\"text-align: center; width: 15%;\">H / - / I</td><td id=\"question\" style=\"font-size: larger; font-weight: bolder;\">"+q.question+"</td>";
    const question = document.createElement("tr");
    question.setAttribute("id","question");
    question.innerText = q.question;
    main.append
    for (let i = 0; i < q.answers.length; i++) {
        const tr = document.createElement("tr");
        const cell1 = document.createElement("td");
        const input = document.createElement("input");
        input.setAttribute("type","range");
        input.setAttribute("min","-1");
        input.setAttribute("max","1");
        input.setAttribute("class","answerValue");
        input.setAttribute("value","0");
        cell1.appendChild(input);
        const cell2 = document.createElement("td");
        cell2.setAttribute("class","answer");
        cell2.innerText = q.answers[i];
        tr.appendChild(cell1);
        tr.appendChild(cell2);
        main.appendChild(tr);
        
    }
}

function eval(){
    const answers = document.getElementsByClassName("answerValue");
    const key = q.key;
    let points = 0;
    for (let i = 0; i < answers.length; i++) {
        if(answers[i].value != 0){
            const ans = answers[i].value == 1;
            allPoints +=1;
            if(ans === key[i]){
                points +=1;
                correct +=1;
            }else{
                points -=0.5;
                correct -=0.5;
            }
        }
        
    }
    let res = points +"/"+answers.length+"\n";
    res += "Helyes válaszok:\n"
    for (let i = 0; i < key.length; i++) {
        if(key[i]){
            res += q.answers[i]+"\n\n";
        }
        
    }
    res += "Összesített: " + correct + "/" + allPoints + " Pontosság: " +((correct/allPoints)*100).toFixed(2)+"%";
    alert(res);
    nextQuestion();
}