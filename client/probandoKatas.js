function scramble(str1, str2) {
let arr=[] 
let lCStr1=str1.toLowerCase()
let lCStr2=str2.toLowerCase()

for (let i = 0; i < lCStr1.length; i++) {
if(lCStr1.includes(lCStr2[i])){arr.push(lCStr2[i])}
}
if (arr.length>=lCStr2.length){
return true}else{return false}
 }



 scramble('cedewaraaossoqqyt', 'codewars')

 import React, { Component } from 'react'

class Counter extends Component {

    constructor() {
        super()
        this.state = { count:0 }
    }

    incrementCount = () => {
      
        let value = this.state.count
        let newValue = value + 1
        this.setState({ count: newValue })
    }
  
   decrementCount = () => {
      
        let value = this.state.count
        let newValue = value - 1
        this.setState({ count: newValue })
    }

    render() {
        return( 
         <>
            <h1 className='counter'>{this.state.count}</h1>
            <button className='increment' onClick={this.incrementCount}>increment</button>
            <button className='decrement' onClick={this.decrementCount}>decrement</button>
         </> )
    }
}

// export default Counter





