// let age = prompt("What is yout age: ?")
// let spent = age * 375
// alert('Since you are ' + age + ' you have spent ' + spent + ' days on this hearth')
function Calculate() {
    let age = document.getElementById('age').value
    let ha = age * 365

    document.getElementById("test").innerHTML = "You have spent " + ha + " days on this earth !";
}