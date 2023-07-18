<script>
import { useAppStore } from '../stores/app'
import { mapActions } from 'pinia'

export default {
  data() {
    return {
      event: ''
    }
  },
  methods: {
    ...mapActions(useAppStore, ['fetchEventDetail', 'logoutHandler']),
    async searchEvent() {
      await this.$router.push(`/event/${this.event}`)
      this.fetchEventDetail(this.$route.params.name)
      this.event = ''
    },
    handleLogout() {
      this.logoutHandler()
    }
  }
}
</script>

<template>
  <div class="navbar">
    <div @click.prevent="$router.push('/')" class="navbar-title">Eventio</div>
    <form class="navbar-search" @submit.prevent="searchEvent">
      <input
        v-model="event"
        class="navbar-search-box"
        type="text"
        placeholder="explore of options to search artists, events, or venues"
      />
      <button type="submit" style="display: none">Submit</button>
    </form>
    <div @click.prevent="handleLogout" class="navbar-login">Log out</div>
  </div>
</template>

<style scoped>
.navbar {
  background-color: rgb(10, 2, 48);
  width: 100%;
  height: 8vh;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
}

.navbar-title {
  margin-left: 50px;
  cursor: pointer;
}

.navbar-search-box {
  width: 400px;
  height: 40px;
  padding-left: 15px;
  border: none;
  border-radius: 10px;
}

.navbar-login {
  margin-right: 50px;
  background-color: gray;
  border: none;
  border-radius: 5px;
  padding: 4px 10px;
}

.navbar-login:hover {
  background-color: gainsboro;
  color: black;
  cursor: pointer;
}
</style>
