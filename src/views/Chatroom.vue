<template>
    <div class="container">
        <Navbar />
        <ChatWindow />
        <NewChatFormVue />
    </div>
</template>

<script>
import Navbar from '../components/Navbar'
import getUser from '../composables/getUser'
import { useRouter } from 'vue-router'
import { watch } from 'vue'
import NewChatFormVue from '../components/NewChatForm.vue'
import ChatWindow from '../components/ChatWindow.vue'

export default {
    components: { Navbar, NewChatFormVue, ChatWindow },
    setup() {
        const router = useRouter()
        const { user } = getUser()

        watch(user, () => {
            if (!user.value) {
                router.push({ name: 'Welcome' })
            }
        })
    }
}
</script>

<style>

</style>