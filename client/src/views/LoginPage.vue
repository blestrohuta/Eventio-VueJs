<script>
import { useAppStore } from '../stores/app'
import { mapActions } from 'pinia'
export default {
  data() {
    return {
      login: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions(useAppStore, ['loginHandler']),
    handleLogin() {
      this.loginHandler(this.login)
    }
  }
}
</script>

<template>
  <div class="login-section">
    <div class="left-login-page">
      <div class="form-login-container">
        <div class="form-login-title">
          <div class="login-title">Welcome Back</div>
          <div class="login-info">Please enter your detail</div>
        </div>
        <form @submit.prevent="handleLogin" class="form-login">
          <div>
            <input v-model="login.email" class="input-email" type="text" placeholder="Email" />
          </div>
          <div>
            <input
              v-model="login.password"
              class="input-password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div>
            <button type="submit" class="input-submit">Sign in</button>
            <div style="text-align: center; margin-top: 30px">
              Don't have an account?
              <span @click.prevent="$router.push('/register')" style="color: red; cursor: pointer"
                >Sign up</span
              >
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="right-login-page">
      <div class="login-image">
        <img
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-section {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.left-login-page {
  width: 45%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: none;
}

.right-login-page {
  width: 55%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
}

.login-image {
  height: 95vh;
  width: 95%;
  background-color: aqua;
  border-radius: 20px;
  border: none;
}

.login-image img {
  object-fit: cover;
  object-position: center;
  border-radius: 20px;
  border: none;
  width: 100%;
  height: 95vh;
}

.form-login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 30px;
}

.form-login-title {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  row-gap: 10px;
}

.login-title {
  font-size: 36px;
  font-weight: bold;
}

.login-info {
  color: rgb(138, 138, 138);
  font-size: 18px;
}

.form-login {
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
