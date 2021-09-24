const btns = document.querySelectorAll('.opt')
const [daily,weekly,monthly] = btns
const option = [daily, weekly , monthly]

let optionGet = "Daily"
displayData()
option.map((item)=>{
    item.addEventListener('click',()=>{
        option.map(btn =>btn.classList.remove('active'));
        item.classList.add("active")
        optionGet = item.innerHTML
        displayData()
    })
})

function displayData(){
    fetch("data.json")
    .then(response => response.json()   )
    .then(data=>{
            for (let index = 0; index < 6; index++) {
                document.querySelectorAll(`#card${index+1} .title-section`)[0].textContent = data[index].title
                if (optionGet === "Daily") {
                    document.querySelectorAll(`#card${index+1} .hour h1`)[0].textContent = data[index].timeframes.daily.current + 'hrs'
                    document.querySelectorAll(`#card${index+1} .hour span`)[0].textContent = 'Last day - '+data[index].timeframes.daily.previous 
                } else if (optionGet === "Weekly") {
                    document.querySelectorAll(`#card${index+1} .hour h1`)[0].textContent = data[index].timeframes.weekly.current + 'hrs'
                    document.querySelectorAll(`#card${index+1} .hour span`)[0].textContent = 'Last week - '+data[index].timeframes.weekly.previous 
                }
                else if (optionGet === "Monthly") {
                    document.querySelectorAll(`#card${index+1} .hour h1`)[0].textContent = data[index].timeframes.monthly.current + 'hrs'
                    document.querySelectorAll(`#card${index+1} .hour span`)[0].textContent = 'Last month - '+data[index].timeframes.monthly.previous 
                }
            }
       })
}


