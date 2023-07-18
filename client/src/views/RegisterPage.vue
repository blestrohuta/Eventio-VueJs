<script>
import { useAppStore } from '../stores/app'
import { mapActions } from 'pinia'
export default {
  data() {
    return {
      register: {
        email: '',
        password: '',
        phoneNumber: '',
        address: ''
      }
    }
  },
  methods: {
    ...mapActions(useAppStore, ['registerHandler']),
    handleRegister() {
      this.registerHandler(this.register)
    }
  }
}
</script>

<template>
  <div class="register-section">
    <div class="left-register-page">
      <div class="form-register-container">
        <div class="form-register-title">
          <div class="register-title">Create an account</div>
          <div class="register-info">Let's get started with your 30 day free trial</div>
        </div>
        <form @submit.prevent="handleRegister" class="form-register">
          <div>
            <input v-model="register.email" class="input-email" type="text" placeholder="Email" />
          </div>
          <div>
            <input
              v-model="register.password"
              class="input-password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div>
            <input
              v-model="register.phoneNumber"
              class="input-password"
              type="text"
              placeholder="phone number"
            />
          </div>
          <div>
            <input
              v-model="register.address"
              class="input-password"
              type="text"
              placeholder="address"
            />
          </div>
          <div>
            <button type="submit" class="input-submit">Create account</button>
          </div>
        </form>
      </div>
    </div>
    <div class="right-register-page">
      <button class="login-button" @click.prevent="$router.push('/login')">Log in</button>
      <div class="register-image">
        <img
          src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?cs=srgb&dl=pexels-sebastian-ervi-1763075.jpg&fm=jpg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.register-section {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.left-register-page {
  width: 45%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: none;
}

.right-register-page {
  width: 55%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
}

.login-button {
  position: absolute;
  right: 50px;
  top: 40px;
  z-index: 1;
  border: none;
  padding: 8px 15px;
  border-radius: 8px;
  background-color: black;
  color: white;
  font-size: 16px;
  cursor: pointer;
}

.login-button:hover {
  background-color: rgb(58, 58, 58);
}

.register-image {
  height: 95vh;
  width: 95%;
  background-color: aqua;
  border-radius: 20px;
  border: none;
}

.register-image img {
  object-fit: cover;
  object-position: center;
  border-radius: 20px;
  border: none;
  width: 100%;
  height: 95vh;
}

.form-register-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 30px;
}

.form-register-title {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  row-gap: 10px;
}

.register-title {
  font-size: 36px;
  font-weight: bold;
}

.register-info {
  color: rgb(138, 138, 138);
  font-size: 18px;
}

.form-register {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 40px;
}

.input-email,
.input-password {
  width: 50vh;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid lightgrey;
  height: 30px;
  font-size: 16px;
  padding-left: 10px;
}

.input-submit {
  width: 50vh;
  border: none;
  border-radius: 20px;
  height: 40px;
  background-color: black;
  color: white;
  cursor: pointer;
}

.input-submit:hover {
  background-color: rgb(58, 58, 58);
}
</style>
