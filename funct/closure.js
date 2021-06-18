
const createCounter = ()=> {
    let count = 0
    return {
        increment () {
            count++
        },
        decrement () {
            count--
        },
        get(){
            return count
        }
    }
}

const counter = createCounter()
// counter.increment()
// counter.decrement()
// counter.decrement()
// counter.increment()
// counter.increment()
// counter.increment()
// console.log(counter.get())


const createAdder = (a)=>{
   
    return (b)=>{

        return a+b
    }
}

// const add10 = createAdder(100)
// console.log(add10(-2))
// console.log(add10(20))
// console.log(add10(2))

const tipper = (tip) => {

    return (amount) => {
        const totalTip = amount * tip 
        return `Total tip for $${amount} is $${totalTip}`
    }
}

const tip1 = tipper(0.629)

console.log(tip1(99))