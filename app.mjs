function startApp() {
  // Your entire app should not necessarily be coded inside this 
  // single function (though there's no penalty for that), 
  // so create and use/call additional functions from here

  // pls remove the below and make some magic in here!


  const inputText = document.querySelector('.css-input');
  const imageLogo = document.querySelector('img');
  const body = document.querySelector('body');
  const container = document.querySelector('.container')

  inputText.addEventListener('input', (e) => {
    e.preventDefault();

    const mobileNumber = mobile.checkRegNumber(e.target.value);
    const verified = mobile.checkNetwork(mobileNumber);
    const logos = `../Logos/${verified}.png`

    if (verified === 'airtel') {
      inputText.style.borderColor = 'red';
      body.style.backgroundImage = `./Logos/airtel.png`
      container.style.borderColor = 'red'
      imageLogo.setAttribute('src', logos)

    } else if (verified === 'Mtn') {
      inputText.style.borderColor = 'yellow';
      container.style.borderColor = 'yellow'

      imageLogo.setAttribute('src', logos)

    } else if (verified === '9mobile') {
      inputText.style.borderColor = 'green'
      container.style.borderColor = 'green'
      imageLogo.setAttribute('src', logos)
    } else if (verified === 'glo') {

      inputText.style.borderColor = 'green';
      container.style.borderColor = 'green'
      imageLogo.setAttribute('src', logos)

    } else if (verified === '') {
      inputText.style.borderColor = 'pink'
    }
  })


  // A mobile Object with various methods
  const mobile = {
    "Mtn": ['0806', '0703', '0706', '0810', '0813', '0816', '0814', '0913', '0803'],
    "airtel": ['0708', '0802', '0907', '0812', '0808', '0901'],
    "9mobile": ['0909', '0908', '0906', '0905', '0809'],
    "glo": ['0805', '0802', '0803', '0804', '0801'],


    checkRegNumber(number) {
      const regexInput = /0([7,8,9])([0,1])\d{8}$|+234([7,8,9])([0,1])\d{8}$/gm
      if (regexInput.test(number)) {
        return number;
      } else {
        return false
      }

    },
    //08062729212
    //0806
    checkNetwork(number) {
      const checkedNumber = this.checkRegNumber(number);
      const subNumber = checkedNumber.substring(0, 4);
      return Object.keys(this).find(key => this[key].includes(subNumber));

    }

  }











};

// ======= DO NOT EDIT ============== //
export default startApp;
  // ======= EEND DO NOT EDIT ========= //