<template>
  <h1>name: {{ name }}</h1>
  <h1>
    hobbies:
    <template v-for="hobbie in hobbies">
      <h2>{{ hobbie }}</h2>
    </template>
  </h1>
  <h1>
    children:
    <template v-for="item in children">
      <h2>child name: {{ item.name }}</h2>
    </template>
  </h1>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import * as Api from '../api/user'
import { IUser } from '../model/userModel'

const useUser = () => {
  let userInfo: IUser = reactive({
    id: '',
    name: '',
    hobbies: [],
    children: []
  })

  const getUserInfo = async() => {
    const user = await Api.fetchUser() // TODO: 这里想直接拿到 泛型 IUser
    userInfo = user
  }

  return { userInfo, getUserInfo }
}

export default defineComponent({
  name: 'Home',
  setup() {
    const { userInfo, getUserInfo } = useUser()

    getUserInfo()

    const { name, hobbies, children } = toRefs(userInfo)

    return { name, hobbies, children }
  },
})
</script>
