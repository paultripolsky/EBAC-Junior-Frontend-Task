import { defineStore } from 'pinia'

let useLanguagesStore = defineStore('languages', () => {
  let languages = [
    { id: 1, value: 'English' },
    { id: 2, value: 'Spanish' },
    { id: 3, value: 'French' },
  ]

  return { languages }
})

export { useLanguagesStore }
