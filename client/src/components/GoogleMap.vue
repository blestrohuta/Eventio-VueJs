<!-- eslint-disable vue/no-reserved-component-names -->
<script>
import { GoogleMap, Marker } from 'vue3-google-map'

export default {
  components: {
    GoogleMap,
    Marker
  },
  methods: {},
  props: ['location', 'listHotels']
}
</script>

<template>
  <GoogleMap
    api-key="AIzaSyDYy31KeTisiiboB3aVNtsXM8DI6Om9NJg"
    style="width: 100%; height: 85vh"
    :center="{ lat: location.latitude, lng: location.longitude }"
    :zoom="14"
  >
    <Marker
      :options="{
        position: { lat: location.latitude, lng: location.longitude }
      }"
    />
    <Marker
      v-for="hotel in listHotels"
      :key="hotel.id"
      :options="{
        position: { lat: hotel.geoCode.latitude, lng: hotel.geoCode.longitude },
        title: hotel.name,
        icon: 'https://maps.google.com/mapfiles/ms/icons/orange-dot.png'
      }"
    />
  </GoogleMap>
</template>
