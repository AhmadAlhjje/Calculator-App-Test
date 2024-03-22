let btnColor=document.querySelector("#btn_color");
let TheSum=document.querySelector("#TheSum");
let Delet=document.querySelector("#delet");
let Reset=document.querySelector("#res");
let TheEnd=document.querySelector("#TheEnd");

let body=document.querySelector("#body");
let row1=document.querySelectorAll(".row1");
let n1=document.querySelectorAll("#n1");
let THEME=document.querySelector("#THEME");
let calc=document.querySelector("#calc");
btnColor.addEventListener("click",function()
{
    
    if(btnColor.style.left=="")
        {
            btnColor.style.left="37%";
            body.style.backgroundColor="var(--back-color)";
            [...row1].forEach(element => {
                element.style.color="var(--text-color2)";
                element.style.backgroundColor="var(--key-background)";
            });
            TheSum.style.color="var(--text-color2)";
            Reset.style.backgroundColor="var(--key-shadow)";
            TheEnd.style.backgroundColor="var(--dark-blue)";
            btnColor.style.backgroundColor="var(--dark-blue)";
            [...n1].forEach(e => {
                e.style.color="var(--text-color2)";
            })
            THEME.style.color="var(--text-color2)";
            calc.style.color="var(--text-color2)";
        }
    else if(btnColor.style.left=="37%")
        {
            btnColor.style.left="75%";
        }
    else
        {
            btnColor.style.left="";
            body.style.backgroundColor="var(--main-background-color)";
            [...row1].forEach(element => {
                element.style.color="var(--text-color)";
                element.style.backgroundColor="white";
            });
            TheSum.style.color="white";
            Reset.style.backgroundColor="var(--text-color)";
            TheEnd.style.backgroundColor="var(--red)";
            btnColor.style.backgroundColor="var(--red)";
            [...n1].forEach(e => {
                e.style.color="white";
            })
            THEME.style.color="white";
            calc.style.color="white";
            Delet.style.backgroundColor="var(--text-color)";
            Delet.style.color="white";
        }
});
let array=[];
Reset.addEventListener("click",function()
{
    array=[];
    TheSum.textContent="";
});

function appendToDisplay(e)
{
    array.push(e);
    TheSum.textContent+=e;
}
Delet.addEventListener("click",function()
{
    TheSum.textContent=TheSum.textContent.slice(0,TheSum.textContent.length-1);
    array.pop();
});
TheEnd.addEventListener("click",function()
{
    let sum=array[0];
    for(let i=1;i<array.length;i++)
    {
        switch(array[i])
        {
            case '+':
                sum= +sum + +array[i+1];
                i++;
                break;
            case '-':
                sum= +sum - +array[i+1];
                i++;
                break;
            case '*':
                sum= +sum * +array[i+1];
                i++;
                break;
            case '/':
                sum= +sum / +array[i+1];
                i++;
                break;
            default:
                sum=sum+array[i];
                break;
        } 
    }
    TheSum.textContent=sum;
});
