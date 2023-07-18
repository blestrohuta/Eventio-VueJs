<script>
import { useAppStore } from '../stores/app'
import { mapActions, mapState, mapWritableState } from 'pinia'
import GoogleMap from '../components/GoogleMap.vue'
import NavBarEvent from '../components/NavBarEvent.vue'

export default {
  data() {
    return {
      changed: 0
    }
  },
  computed: {
    ...mapState(useAppStore, ['eventDetail', 'listHotels']),
    ...mapWritableState(useAppStore, ['isLogin', 'location'])
  },
  methods: {
    ...mapActions(useAppStore, ['fetchEventDetail', 'fetchHotels']),
    showOnMap(obj) {
      ;(this.location.latitude = obj.lat),
        (this.location.longitude = obj.lng),
        this.fetchHotels(this.location)
    },

    changeColor(id) {
      this.changed = id
    }
  },
  created() {
    if (localStorage.getItem('access_token')) {
      this.fetchEventDetail(this.$route.params.name)
      this.fetchHotels(this.geolocation)
      this.isLogin = true
    } else {
      this.$router.push('/login')
    }
  },
  components: { GoogleMap, NavBarEvent }
}
</script>

<template>
  <NavBarEvent />
  <div v-if="eventDetail.length === 0" class="error-container">
    Apologies, but we don't currently have the item you're looking for. Please consider exploring
    other options.
  </div>
  <div v-else class="third-section">
    <div class="event-detail-container">
      <div class="event-detail-title">All Result For "{{ $route.params.name }}"</div>
      <div class="event-detail">
        <div class="event-detail-content">All Events</div>
        <div
          class="event-detail-content event-detail-card"
          v-for="event in eventDetail"
          :key="event.id"
          @click.prevent="changeColor(event.id)"
          :class="changed === event.id ? 'highlighted' : ''"
        >
          <div class="event-date">{{ event.date }}</div>
          <div class="event-name">
            <div>{{ event.title }}</div>
            <div class="event-place">
              <div class="event-place-venue">{{ event.venue.venue }}</div>
              <div class="event-place-state">
                {{ event.venue.state }}, {{ event.venue.country }}
              </div>
            </div>
          </div>
          <div class="event-action">
            <span class="detail-button" @click.prevent="$router.push(`/eventDetail/${event.id}`)">
              See Details
            </span>
            <span
              class="map-button"
              @click.prevent="
                showOnMap({
                  lat: event.venue.location.lat,
                  lng: event.venue.location.lon
                })
              "
              >See on map</span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="event-image-container">
      <GoogleMap :location="location" :listHotels="listHotels" />
      <div class="hotel-lists-container">
        <div class="hotel-lists-box">
          <div class="hotel-lists-title">List of Nearby Hotels</div>
          <div>
            <div v-for="(hotel, index) in listHotels" :key="index">
              {{ index + 1 }}. {{ hotel.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.error-container {
  height: 85vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 56px;
  text-align: center;
}

.highlighted {
  background-color: gainsboro;
  border: 1px solid transparent;
  transition: 0.5s;
  border-radius: 20px;
  box-shadow: 0px 0px 3px 3px rgba(107, 107, 107, 0.5);
  box-sizing: border-box;
}
</style>
