import { defineStore } from 'pinia'
import {ref} from "vue";

let useProfileStore = defineStore('profile', () => {
  let profile = ref({
    full_name: 'Павел Трипольский',
    birthday: '1998-09-02',
    email: 'ptripolsky@mail.ru',
    city: 'Stavropol',
    password: 'FFffFFff$$FF',
    repeat_password: 'FFffFFff$$FF',
    languages: '',
    phone: '(799)999-99-99',
    country_code: '+7'
  })

  function updateProfile(obj) {
    profile.value = obj
  }

  return { profile, updateProfile }
})

export { useProfileStore }
