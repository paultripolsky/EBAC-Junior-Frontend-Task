import { defineStore } from 'pinia'

let usePhoneMasksStore = defineStore('phoneMasks', () => {
  function ru(inputNumbersValue) {
    let formattedValue = ''
    if (inputNumbersValue.length >= 1) {
      formattedValue += '(' + inputNumbersValue.substring(0, 3)
    }
    if (inputNumbersValue.length >= 3) {
      formattedValue += ')' + inputNumbersValue.substring(3, 6)
    }
    if (inputNumbersValue.length >= 6) {
      formattedValue += '-' + inputNumbersValue.substring(6, 8)
    }
    if (inputNumbersValue.length >= 8) {
      formattedValue += '-' + inputNumbersValue.substring(8, 10)
    }
    return formattedValue
  }

  function am(inputNumbersValue) {
    let formattedValue = ''
    if (inputNumbersValue.length >= 1) {
      formattedValue += '(' + inputNumbersValue.substring(0, 2)
    }
    if (inputNumbersValue.length >= 2) {
      formattedValue += ')' + inputNumbersValue.substring(2, 5)
    }
    if (inputNumbersValue.length >= 5) {
      formattedValue += '-' + inputNumbersValue.substring(5, 8)
    }
    return formattedValue
  }

  function gr(inputNumbersValue) {
    let formattedValue = ''
    if (inputNumbersValue.length >= 1) {
      formattedValue += '(' + inputNumbersValue.substring(0, 2)
    }
    if (inputNumbersValue.length >= 2) {
      formattedValue += ')' + inputNumbersValue.substring(2, 5)
    }
    if (inputNumbersValue.length >= 5) {
      formattedValue += '-' + inputNumbersValue.substring(5, 9)
    }
    return formattedValue
  }

  let masks = [
    {
      name: 'Russian Federation',
      code: '+7',
      mask: ru,
      flag: '/src/assets/images/png/russia.png',
      shortName: 'ru',
      placeholder: '(999)999-99-99',
      maxLength: 14
    },
    {
      name: 'Armenia',
      code: '+374',
      mask: am,
      flag: '/src/assets/images/png/armenia.png',
      shortName: 'am',
      placeholder: '(99)999-999',
      maxLength: 11
    },
    {
      name: 'Georgia',
      code: '+995',
      mask: gr,
      flag: '/src/assets/images/png/georgia.png',
      shortName: 'gr',
      placeholder: '(99)999-9999',
      maxLength: 12
    }
  ]

  return { masks }
})

export { usePhoneMasksStore }
