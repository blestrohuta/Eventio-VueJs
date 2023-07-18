<script>
import NavBar from '../components/NavBar.vue'
import { useAppStore } from '../stores/app'
import { mapActions, mapState, mapWritableState } from 'pinia'

export default {
  data() {
    return {
      event: ''
    }
  },
  components: {
    NavBar
  },
  computed: {
    ...mapState(useAppStore, ['listTaxonomies']),
    ...mapWritableState(useAppStore, ['isLogin'])
  },
  methods: {
    ...mapActions(useAppStore, ['fetchTaxonomies', 'fetchEventDetail']),
    search() {
      this.$router.push(`/event/${this.event}`)
    },

    category(name) {
      this.$router.push(`/event/${name}`)
    }
  },

  created() {
    if (localStorage.getItem('access_token')) {
      this.fetchTaxonomies()
      this.isLogin = true
    } else {
      this.$router.push('/login')
    }
  }
}
</script>

<template>
  <div class="first-section">
    <NavBar />
    <div class="slogan-container">
      <div class="large-slogan">Discover Unforgettable Live Moments</div>
      <div class="small-slogan">Your next extraordinary experience awaits</div>
      <div class="small-slogan">Enjoy</div>
      <form @submit.prevent="search" class="search-container">
        <input
          class="search-button"
          v-model="event"
          type="text"
          placeholder="explore of options to search artists, events, or venues"
        />
        <button type="submit" style="display: none">Enter</button>
      </form>
    </div>
  </div>

  <div class="second-section">
    <div class="category-section">
      <div class="category-title">Categories</div>
      <div class="category-card-container">
        <div class="category-card" v-for="taxonomy in listTaxonomies" :key="taxonomy.id">
          <img
            @click.prevent="category(taxonomy.name)"
            class="category-image"
            :src="taxonomy.image"
            alt=""
          />
          <div class="category-name">{{ taxonomy.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
