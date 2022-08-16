const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");

const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");

const progressSteps = document.querySelectorAll(".progress-step");
let formStepsnum = 0;
let i = 0;
nextBtns.forEach(b => {
    b.addEventListener("click", () => {
        formStepsnum++;
        updateFormSteps();
        i = 1;
        updateProgressbar();
    });
});

prevBtns.forEach(b => {
    b.addEventListener("click", () => {
        formStepsnum--;
        updateFormSteps();
        i = 0;
        updateProgressbar();
    });
});

function updateFormSteps() {
    formSteps.forEach(formStep => {
        if (formStep.classList.contains("form-step-active"))
            formStep.classList.remove("form-step-active");
    });
    formSteps[formStepsnum].classList.add("form-step-active");
}

function updateProgressbar() {
    progressSteps.forEach((pstep, idx) => {
        if (idx < formStepsnum + 1) {
            pstep.classList.add("progress-step-active");
        }
        else {
            pstep.classList.remove("progress-step-active");
        }
    })
}


const languagetype = document.querySelector(".text");
const addmember = document.querySelector(".addmember");
const list = document.querySelector(".language"); 



function generateTemplate(language) {

    const add = `
    <li class="list-group-item d-flex justify-content-between align-tems-center">
                        <span class="">${language}</span> 
                        <i class="fa-solid fa-trash delete"></i>
                    </li>`; 
    list.innerHTML+=add; 
}

addmember.addEventListener('click', (e) => { 
    e.preventDefault();
    const language = languagetype.value.trim(); 
    if(language.length)
    generateTemplate(language);
    languagetype.value=" ";
}); 

list.addEventListener('click',e=>{
if(e.target.classList.contains('delete')){
    e.target.parentElement.remove();
}
});
