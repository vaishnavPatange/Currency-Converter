const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/inr.json";

const dropdowns = document.querySelectorAll("select");
const btn = document.querySelector("button");

for(let select of dropdowns){
    for(let currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select.name === "from" && currCode === "USD"){
            newOption.selected = "selected";
        } else if(select.name === "to" && currCode === "INR"){
            newOption.selected = "selected";
        }
        select.append(newOption);
    }

    select.addEventListener("change", (evt)=>{
        updateFlag(evt.target);
    })
}

const updateFlag = (element)=>{
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let flag = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = flag;

}

btn.addEventListener("click", (evt)=>{
    evt.preventDefault();
})


