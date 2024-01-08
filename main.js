console.log('hello world')

function sum(a, b) {
    return a + b
}

function sayHi() {
    return new Promise(res => {
        setTimeout(() => res('hi') )
    })
}