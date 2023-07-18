/* eslint-disable no-undef */
import { defineStore } from 'pinia'
import axios from 'axios'

export const useAppStore = defineStore('app', {
  state: () => ({
    listTaxonomies: [],
    eventDetail: [],
    listHotels: [],
    location: {
      latitude: -6.9215529,
      longitude: 107.6110212
    },
    eventDetailById: {},
    isLogin: false
  }),
  getters: {},
  actions: {
    async loginHandler(user) {
      try {
        const { data } = await axios({
          method: 'POST',
          url: `https://eventio-server.blestrohuta.website/login`,
          data: user
        })
        Swal.fire({
          icon: 'success',
          title: 'Login Success!'
        })
        localStorage.setItem('access_token', data.access_token)
        this.isLogin = true
        this.router.push('/')
      } catch (err) {
        console.log(err.response.data.message)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${err.response.data.message}`
        })
      }
    },
    async logoutHandler() {
      localStorage.removeItem('access_token')
      this.isLogin = false
      this.router.push('/login')
      Swal.fire({
        icon: 'success',
        title: 'Logout Success!'
      })
    },
    async registerHandler(user) {
      try {
        await axios({
          method: 'POST',
          url: 'https://eventio-server.blestrohuta.website/register',
          data: user
        })
        Swal.fire({
          icon: 'success',
          title: 'Register Success!'
        })
        this.router.push('/login')
      } catch (err) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${err.response.data.message}`
        })
      }
    },
    async fetchTaxonomies() {
      try {
        const { data } = await axios({
          method: 'GET',
          url: 'https://eventio-server.blestrohuta.website/taxonomies',
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        this.listTaxonomies = data
      } catch (err) {
        console.log(err)
      }
    },

    async fetchEventDetail(name) {
      try {
        const { data } = await axios({
          method: 'GET',
          url: `https://eventio-server.blestrohuta.website/events/${name}`,
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        this.eventDetail = data
      } catch (err) {
        console.log(err)
      }
    },

    async fetchHotels(location) {
      try {
        const { data } = await axios({
          method: 'GET',
          url: `https://eventio-server.blestrohuta.website/hotels`,
          headers: {
            latitude: location.latitude,
            longitude: location.longitude,
            access_token: localStorage.getItem('access_token')
          }
        })
        this.listHotels = data
      } catch (err) {
        console.log(err)
      }
    },

    async fetchEventDetailById(id) {
      try {
        const { data } = await axios({
          method: 'GET',
          url: `https://eventio-server.blestrohuta.website/eventDetail/${id}`,
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        this.eventDetailById = data
        console.log(data)
      } catch (err) {
        this.router.go(-1)
        console.log(err)
      }
    }
  }
})
