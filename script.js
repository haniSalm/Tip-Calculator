let billInputDiv=document.getElementById('billTotalInput')
let tipInputDiv=document.getElementById('tipInput')
let numOfPeopleDiv=document.getElementById('numberOfPeople')
let perPersonTotalDiv=document.getElementById('perPersonTotal')


let people=Number(numOfPeopleDiv.innerText)

const calculateBill=()=>{
  const bill=Number(billInputDiv.value)
  const tipPercent=Number(tipInputDiv.value)/100
 let total=bill*tipPercent
  let amount=total+bill
  console.log(people)
  let perPersonTotal=amount/people
  perPersonTotalDiv.innerText=`${perPersonTotal.toFixed(2)}`
}

const increasePeople=()=>{
  people+=1
  numOfPeopleDiv.innerText=people
  calculateBill()
}
const decreasePeople=()=>{
  if(people>1){
    people-=1
    numOfPeopleDiv.innerText=people
  }
  else
  {
    people=1
    numOfPeopleDiv.innerText=people
  }
}