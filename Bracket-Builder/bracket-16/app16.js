let bracket = document.getElementsByClassName('bracket')[0]
let holder = document.getElementsByClassName('holder')[0]

let randomize = document.getElementById('randomize')
let seed = document.getElementById('seed')

let name0 = document.getElementsByClassName('name')[0]
let name1 = document.getElementsByClassName('name')[1]
let name2 = document.getElementsByClassName('name')[2]
let name3 = document.getElementsByClassName('name')[3]
let name4 = document.getElementsByClassName('name')[4]
let name5 = document.getElementsByClassName('name')[5]
let name6 = document.getElementsByClassName('name')[6]
let name7 = document.getElementsByClassName('name')[7]
let name8 = document.getElementsByClassName('name')[8]
let name9 = document.getElementsByClassName('name')[9]
let name10 = document.getElementsByClassName('name')[10]
let name11 = document.getElementsByClassName('name')[11]
let name12 = document.getElementsByClassName('name')[12]
let name13 = document.getElementsByClassName('name')[13]
let name14 = document.getElementsByClassName('name')[14]
let name15 = document.getElementsByClassName('name')[15]



seed.onclick = () => {
    bracket.innerHTML = `
    <div class="consRnd10">
            <div class="match">
                <p class="top" contenteditable="true">(1st cons4 loser)</p>
                <p class="bottom" contenteditable="true">(2nd cons4 loser)</p>
                <p class="placer" contenteditable="true">(winner)</p>
                <p class="place-score">5th</p>
                <p class="place-score" contenteditable="true">score</p>
            </div>
        </div>
        <div class="consRnd9">
            <div class="match">
                <p class="top" contenteditable="true">(winner)</p>
                <p class="top-score" contenteditable="true">score</p>
                <p class="bottom" contenteditable="true">(winner)</p>
                <p class="bottom-score" contenteditable="true">score</p>
                <p class="placer" contenteditable="true">(winner)</p>
                <p class="place-score">3rd</p>
                <p class="place-score" contenteditable="true">score</p>
            </div>
        </div>
        <div class="consRnd4">
            <div class="match">
                <p class="top" contenteditable="true">(winner)</p>
                <p class="top-score" contenteditable="true">score</p>
                <p class="bottom" contenteditable="true">(1st Champ3 Loser)</p>
            </div>
            <div class="match">
                <p class="top" contenteditable="true">(winner)</p>
                <p class="top-score" contenteditable="true">score</p>
                <p class="bottom" contenteditable="true">(2nd Champ3 Loser)</p>
            </div>
        </div>
        <div class="consRnd3">
            <div class="match">
                <p class="top" contenteditable="true">(winner)</p>
                <p class="top-score" contenteditable="true">score</p>
                <p class="bottom" contenteditable="true">(winner)</p>
                <p class="bottom-score" contenteditable="true">score</p>
            </div>
            <div class="match">
                <p class="top" contenteditable="true">(winner)</p>
                <p class="top-score" contenteditable="true">score</p>
                <p class="bottom" contenteditable="true">(winner)</p>
                <p class="bottom-score" contenteditable="true">score</p>
            </div>
        </div>
        <div class="consRnd2">
            <div class="match">
                <p class="top" contenteditable="true">(winner)</p>
                <p class="top-score" contenteditable="true">score</p>
                <p class="bottom" contenteditable="true">(4th Champ2 Loser)</p>
            </div>
            <div class="match">
                <p class="top" contenteditable="true">(winner)</p>
                <p class="top-score" contenteditable="true">score</p>
                <p class="bottom" contenteditable="true">(3rd Champ2 Loser)</p>
            </div>
            <div class="match">
                <p class="top" contenteditable="true">(winner)</p>
                <p class="top-score" contenteditable="true">score</p>
                <p class="bottom" contenteditable="true">(2nd Champ2 Loser)</p>
            </div>
            <div class="match">
                <p class="top" contenteditable="true">(winner)</p>
                <p class="top-score" contenteditable="true">score</p>
                <p class="bottom" contenteditable="true">(1st Champ2 Loser)</p>
            </div>
        </div>
        <div class="consRnd1">
            <div class="match">
                <p class="top" contenteditable="true">(loser)</p>
                <p class="bottom" contenteditable="true">(loser)</p>
            </div>
            <div class="match">
                <p class="top" contenteditable="true">(loser)</p>
                <p class="bottom" contenteditable="true">(loser)</p>
            </div>
            <div class="match">
                <p class="top" contenteditable="true">(loser)</p>
                <p class="bottom" contenteditable="true">(loser)</p>
            </div>
            <div class="match">
                <p class="top" contenteditable="true">(loser)</p>
                <p class="bottom" contenteditable="true">(loser)</p>
            </div>
        </div>
        <div class="champRnd1">


            <div class="match">
                <p class="top" contenteditable="true">${name0.value}</p>
                <p class="bottom" contenteditable="true">${name15.value}</p>
            </div>
            <div class="match">
                <p class="top" contenteditable="true">${name8.value}</p>
                <p class="bottom" contenteditable="true">${name7.value}</p>
            </div>
            <div class="match">
               <p class="top" contenteditable="true">${name4.value}</p>
                <p class="bottom" contenteditable="true">${name11.value}</p>
            </div>
            <div class="match">
               <p class="top" contenteditable="true">${name12.value}</p>
                <p class="bottom" contenteditable="true">${name3.value}</p>
            </div>


            <div class="match">
               <p class="top" contenteditable="true">${name2.value}</p>
                <p class="bottom" contenteditable="true">${name13.value}</p>
            </div>
            <div class="match">
               <p class="top" contenteditable="true">${name10.value}</p>
                <p class="bottom" contenteditable="true">${name5.value}</p>
            </div>
            <div class="match">
               <p class="top" contenteditable="true">${name6.value}</p>
                <p class="bottom" contenteditable="true">${name9.value}</p>
            </div>
            <div class="match">
           <p class="top" contenteditable="true">${name14.value}</p>
            <p class="bottom" contenteditable="true">${name1.value}</p>
            </div>



        </div>
        <div class="champRnd2">
           
            <div class="match">
                <p class="top" contenteditable="true">(winner)</p>
                <p class="top-score" contenteditable="true">score</p>
                <p class="bottom" contenteditable="true">(winner)</p>
                <p class="bottom-score" contenteditable="true">score</p>
            </div>
            <div class="match">
                <p class="top" contenteditable="true">(winner)</p>
                <p class="top-score" contenteditable="true">score</p>
                <p class="bottom" contenteditable="true">(winner)</p>
                <p class="bottom-score" contenteditable="true">score</p>
            </div>
            <div class="match">
                <p class="top" contenteditable="true">(winner)</p>
                <p class="top-score" contenteditable="true">score</p>
                <p class="bottom" contenteditable="true">(winner)</p>
                <p class="bottom-score" contenteditable="true">score</p>
            </div>
            <div class="match">
                <p class="top" contenteditable="true">(winner)</p>
                <p class="top-score" contenteditable="true">score</p>
                <p class="bottom" contenteditable="true">(winner)</p>
                <p class="bottom-score" contenteditable="true">score</p>
            </div>
        </div>
        <div class="champRnd3">
            
        </div>
        <div class="champRnd4">
            <div class="match">
                <p class="top" contenteditable="true">(winner)</p>
                <p class="top-score" contenteditable="true">score</p>
                <p class="bottom" contenteditable="true">(winner)</p>
                <p class="bottom-score" contenteditable="true">score</p>
            </div>
            <div class="match">
                <p class="top" contenteditable="true">(winner)</p>
                <p class="top-score" contenteditable="true">score</p>
                <p class="bottom" contenteditable="true">(winner)</p>
                <p class="bottom-score" contenteditable="true">score</p>
            </div>
        </div>
        <div class="champRnd6">
            <div class="match">
                <p class="top" contenteditable="true">(winner)</p>
                <p class="top-score" contenteditable="true">score</p>
                <p class="bottom" contenteditable="true">(winner)</p>
                <p class="bottom-score" contenteditable="true">score</p>
                <p class="placer" contenteditable="true">(winner)</p>
                <p class="place-score">Champion</p>
                <p class="place-score" contenteditable="true">score</p>
            </div>
        </div>
    `

    holder.innerHTML = null
}



randomize.onclick = () => {

    let names = []

    for (let i = 0; i < 16; i++) {
        names.push(document.getElementsByClassName('name')[i].value)
    }

    let rand = []
    for (let i = 0; i < 16; i++) {
        let e = Math.floor(Math.random() * names.length)
        rand.push(names[e])
        names.splice(e, 1)
    }


    bracket.innerHTML = `
    <div class="consRnd10">
            <div class="match">
                <p class="top" contenteditable="true">(1st cons4 loser)</p>
                <p class="bottom" contenteditable="true">(2nd cons4 loser)</p>
                <p class="placer" contenteditable="true">(winner)</p>
                <p class="place-score">5th</p>
                <p class="place-score" contenteditable="true">score</p>
            </div>
        </div>
        <div class="consRnd9">
            <div class="match">
                <p class="top" contenteditable="true">(winner)</p>
                <p class="top-score" contenteditable="true">score</p>
                <p class="bottom" contenteditable="true">(winner)</p>
                <p class="bottom-score" contenteditable="true">score</p>
                <p class="placer" contenteditable="true">(winner)</p>
                <p class="place-score">3rd</p>
                <p class="place-score" contenteditable="true">score</p>
            </div>
        </div>
        <div class="consRnd4">
            <div class="match">
                <p class="top" contenteditable="true">(winner)</p>
                <p class="top-score" contenteditable="true">score</p>
                <p class="bottom" contenteditable="true">(1st Champ3 Loser)</p>
            </div>
            <div class="match">
                <p class="top" contenteditable="true">(winner)</p>
                <p class="top-score" contenteditable="true">score</p>
                <p class="bottom" contenteditable="true">(2nd Champ3 Loser)</p>
            </div>
        </div>
        <div class="consRnd3">
            <div class="match">
                <p class="top" contenteditable="true">(winner)</p>
                <p class="top-score" contenteditable="true">score</p>
                <p class="bottom" contenteditable="true">(winner)</p>
                <p class="bottom-score" contenteditable="true">score</p>
            </div>
            <div class="match">
                <p class="top" contenteditable="true">(winner)</p>
                <p class="top-score" contenteditable="true">score</p>
                <p class="bottom" contenteditable="true">(winner)</p>
                <p class="bottom-score" contenteditable="true">score</p>
            </div>
        </div>
        <div class="consRnd2">
            <div class="match">
                <p class="top" contenteditable="true">(winner)</p>
                <p class="top-score" contenteditable="true">score</p>
                <p class="bottom" contenteditable="true">(4th Champ2 Loser)</p>
            </div>
            <div class="match">
                <p class="top" contenteditable="true">(winner)</p>
                <p class="top-score" contenteditable="true">score</p>
                <p class="bottom" contenteditable="true">(3rd Champ2 Loser)</p>
            </div>
            <div class="match">
                <p class="top" contenteditable="true">(winner)</p>
                <p class="top-score" contenteditable="true">score</p>
                <p class="bottom" contenteditable="true">(2nd Champ2 Loser)</p>
            </div>
            <div class="match">
                <p class="top" contenteditable="true">(winner)</p>
                <p class="top-score" contenteditable="true">score</p>
                <p class="bottom" contenteditable="true">(1st Champ2 Loser)</p>
            </div>
        </div>
        <div class="consRnd1">
            <div class="match">
                <p class="top" contenteditable="true">(loser)</p>
                <p class="bottom" contenteditable="true">(loser)</p>
            </div>
            <div class="match">
                <p class="top" contenteditable="true">(loser)</p>
                <p class="bottom" contenteditable="true">(loser)</p>
            </div>
            <div class="match">
                <p class="top" contenteditable="true">(loser)</p>
                <p class="bottom" contenteditable="true">(loser)</p>
            </div>
            <div class="match">
                <p class="top" contenteditable="true">(loser)</p>
                <p class="bottom" contenteditable="true">(loser)</p>
            </div>
        </div>
        <div class="champRnd1">


            <div class="match">
                <p class="top" contenteditable="true">${rand[0]}</p>
                <p class="bottom" contenteditable="true">${rand[1]}</p>
            </div>
            <div class="match">
                <p class="top" contenteditable="true">${rand[2]}</p>
                <p class="bottom" contenteditable="true">${rand[3]}</p>
            </div>
            <div class="match">
               <p class="top" contenteditable="true">${rand[4]}</p>
                <p class="bottom" contenteditable="true">${rand[5]}</p>
            </div>
            <div class="match">
               <p class="top" contenteditable="true">${rand[6]}</p>
                <p class="bottom" contenteditable="true">${rand[7]}</p>
            </div>


            <div class="match">
               <p class="top" contenteditable="true">${rand[8]}</p>
                <p class="bottom" contenteditable="true">${rand[9]}</p>
            </div>
            <div class="match">
               <p class="top" contenteditable="true">${rand[10]}</p>
                <p class="bottom" contenteditable="true">${rand[11]}</p>
            </div>
            <div class="match">
               <p class="top" contenteditable="true">${rand[12]}</p>
                <p class="bottom" contenteditable="true">${rand[13]}</p>
            </div>
            <div class="match">
           <p class="top" contenteditable="true">${rand[14]}</p>
            <p class="bottom" contenteditable="true">${rand[15]}</p>
            </div>



        </div>
        <div class="champRnd2">
           
            <div class="match">
                <p class="top" contenteditable="true">(winner)</p>
                <p class="top-score" contenteditable="true">score</p>
                <p class="bottom" contenteditable="true">(winner)</p>
                <p class="bottom-score" contenteditable="true">score</p>
            </div>
            <div class="match">
                <p class="top" contenteditable="true">(winner)</p>
                <p class="top-score" contenteditable="true">score</p>
                <p class="bottom" contenteditable="true">(winner)</p>
                <p class="bottom-score" contenteditable="true">score</p>
            </div>
            <div class="match">
                <p class="top" contenteditable="true">(winner)</p>
                <p class="top-score" contenteditable="true">score</p>
                <p class="bottom" contenteditable="true">(winner)</p>
                <p class="bottom-score" contenteditable="true">score</p>
            </div>
            <div class="match">
                <p class="top" contenteditable="true">(winner)</p>
                <p class="top-score" contenteditable="true">score</p>
                <p class="bottom" contenteditable="true">(winner)</p>
                <p class="bottom-score" contenteditable="true">score</p>
            </div>
        </div>
        <div class="champRnd3">
            
        </div>
        <div class="champRnd4">
            <div class="match">
                <p class="top" contenteditable="true">(winner)</p>
                <p class="top-score" contenteditable="true">score</p>
                <p class="bottom" contenteditable="true">(winner)</p>
                <p class="bottom-score" contenteditable="true">score</p>
            </div>
            <div class="match">
                <p class="top" contenteditable="true">(winner)</p>
                <p class="top-score" contenteditable="true">score</p>
                <p class="bottom" contenteditable="true">(winner)</p>
                <p class="bottom-score" contenteditable="true">score</p>
            </div>
        </div>
        <div class="champRnd6">
            <div class="match">
                <p class="top" contenteditable="true">(winner)</p>
                <p class="top-score" contenteditable="true">score</p>
                <p class="bottom" contenteditable="true">(winner)</p>
                <p class="bottom-score" contenteditable="true">score</p>
                <p class="placer" contenteditable="true">(winner)</p>
                <p class="place-score">Champion</p>
                <p class="place-score" contenteditable="true">score</p>
            </div>
        </div>
    `

    holder.innerHTML = null
}