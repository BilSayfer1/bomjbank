let name = prompt(`Как вас зовут?`).trim().toLowerCase()
if (name === `alex`) {
    let acc = +prompt(`Номер счета?`).trim().toLowerCase()
    let nomer = 7777
    if (acc === nomer) {
        let dengi = +prompt(`Сколько обналичть?`).trim().toLowerCase()
        if (dengi <= 10000 && dengi > 0) {

            alert(10000 - dengi)
        } else {
            alert(`Не достаточно денег введите цифры правильно`)
        }
    } else {
        alert(`Пользователь не найден или введите символы правильно!`)
    }

} else {
    alert(`Пользователь не найден, Аривидерчи`)
}
