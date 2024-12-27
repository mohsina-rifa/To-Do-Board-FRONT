<script setup lang="ts">
import { ref } from 'vue';
import type { LogInType } from '../types/auth'
import { RouterLink } from 'vue-router'

const LogInData = ref<LogInType>({
    email: "",
    password: ""
})

const handleLog = () => {
    console.log(LogInData.value)
}
</script>

<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-xl-7">
                <img src="@/assets/SignupPage.jpg" alt="To-Do Board" class="img-fluid"/>
            </div>

            <div class="col-xl-5">
                <div>
                    <h2>Log In</h2>

                    <form>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email" required v-model="LogInData.email"/>
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" id="password" required v-model="LogInData.password"/>
                        </div>
                            <div class="mb-3">
                            <button type="submit" class="btn btn-primary w-100" @click.prevent="handleLog">Log In</button>
                        </div>
                        <div class="mb-3">
                            <p>
                                <router-link to="/signup">
                                    Don't have an account? Sign up!
                                </router-link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

.background-image-container {
  background-image: url('@/assets/SignupPage.jpg');
  background-size: cover;
  background-position: center;
  width: 100vh;
  height: auto;
}
</style>
