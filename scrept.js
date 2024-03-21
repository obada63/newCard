let inputJavaApp=document.querySelector("#javaApp");
let inputNumper=document.querySelector("#inputNumber");
let inputCVC=document.querySelector("#inputCVC");
let inputMM=document.querySelector("#inputMM");
let inputYY=document.querySelector("#inputYY");

let paraJava=document.querySelector("#java");
let paraCVC=document.querySelector("#paraCVC");
let paraMY=document.querySelector("#paraMY");

let btn=document.querySelector("#button");


btn.addEventListener("click",function()
{
    if(inputJavaApp.value!="")
    {
        paraJava.textContent=inputJavaApp.value;
    }
    if(inputJavaApp.value=="")
    {
        paraJava.textContent="Jave Appleseed";
    }
    let array=[...inputNumper.value];
    for(let i=1;i<=array.length;i++)
    {
        let para=document.querySelector(`#para${i}`);
        para.textContent=array[i-1];
    }
    if(inputNumper.value=="")
    {
        for(let i=1;i<=16;i++)
        {
            let para=document.querySelector(`#para${i}`);
            para.textContent="0";
        }
    }
    if(inputCVC.value!="")
    {
        paraCVC.textContent=inputCVC.value;
    }
    let inputM=[...inputMM.value];
    let inputY=[...inputYY.value];
    paraMY.textContent="";
    for(let i=0;i<inputM.length;i++)
    {
        if(i>1) break;
        paraMY.textContent+=inputM[i];
    }
    paraMY.textContent+="/";
    for(let i=0;i<inputY.length;i++)
    {
        if(i>1) break;
        paraMY.textContent+=inputY[i];
    }
})