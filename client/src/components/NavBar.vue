<script>
import { useAppStore } from '../stores/app'
import { mapActions } from 'pinia'

export default {
  methods: {
    ...mapActions(useAppStore, ['logoutHandler']),
    handleLogout() {
      this.logoutHandler()
    }
  }
}
</script>

<template>
  <div class="navbar">
    <div class="left-navbar">
      <div class="navbar-brand">Eventio</div>
      <div class="navbar-sports" @click.prevent="$router.push('/event/sports')">Sports</div>
      <div class="navbar-music" @click.prevent="$router.push('/event/music')">Music</div>
    </div>
    <div class="right-navbar">
      <div @click.prevent="handleLogout" class="logout-button">Log out</div>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  background-color: transparent;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: white;
  font-size: 18px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}

.navbar-brand,
.navbar-sports,
.navbar-music {
  cursor: pointer;
}

.left-navbar {
  margin-left: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
}

.right-navbar {
  margin-right: 80px;
}

.logout-button {
  background-color: #ffffff1f;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
}

.logout-button:hover {
  cursor: pointer;
  background-color: #bcbaba1f;
}

.navbar-search {
  width: 400px;
  height: 40px;
  border: none;
  padding-left: 15px;
  border-radius: 5px;
  font-size: 14px;
  margin-left: 20px;
}
</style>
