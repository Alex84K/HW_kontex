console.log('Замыкания');

let nickName = 'John';
function greeting() {
    let nickName = 'Peter';
    return function() {
        let nickName = 'Hans';
        console.log(nickName);
    }
}

nickName = 'Robin';
const hello = greeting();
hello();