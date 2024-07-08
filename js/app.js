function alterarStatus(id) {
  const element = document.getElementById(`game-${id}`);
  const image = element.querySelector('.dashboard__item__img');
  const button = element.querySelector('.dashboard__item__button');
  const isRented = button.innerText === 'Devolver';
  
  rentValidate(button,image, isRented);
  logQtdRented();

  // console.log(sortNumbers([1,20,2]))
  // console.log("eye", palindrome("eye"))
  // console.log("race car", palindrome("race car"))
  // console.log("not a palindrome", palindrome("not a palindrome"))
  // console.log("A man, a plan, a canal. Panama", palindrome("A man, a plan, a canal. Panama"))
  // console.log("never odd or even", palindrome("never odd or even"))
  // console.log("nope", palindrome("nope"))
  // console.log("almostomla", palindrome("almostomla"))
  // console.log("My age is 0, 0 si ega ym", palindrome("My age is 0, 0 si ega ym"))
  // console.log("1 eye for of 1 eye", palindrome("1 eye for of 1 eye"))
}

function rentValidate(button,image, isRented) {
  if (isRented) {
    const confirmReturn = confirm('Deseja realmente devolver o jogo?');
    if (confirmReturn) {
      button.classList.remove('dashboard__item__button--return');
      button.textContent = 'Alugar';
      image.classList.remove('dashboard__item__img--rented');
    }
  } else {
    button.classList.add('dashboard__item__button--return');
    button.textContent = 'Devolver';
    image.classList.add('dashboard__item__img--rented');
  }
}

function logQtdRented() {
  const qtdRented = document.querySelectorAll('.dashboard__item__button--return').length;
  console.log(qtdRented);
}

function confirmReturn() {
  alert('Jogo devolvido com sucesso!');
}

// function sortNumbers(numbers) {
//   return numbers.sort((a, b) => a - b);
// }

// function palindrome(str) {
//   var re = /[\W_]/g; 
  
//   var lowRegStr = str.toLowerCase().replace(re, '');
//   var reverseStr = lowRegStr.split('').reverse().join(''); 
//   return reverseStr === lowRegStr; 
// }
