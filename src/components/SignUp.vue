<script setup lang="ts">
import { ref } from 'vue';
import type { SignUpType } from '../types/auth'

const signUpData = ref<SignUpType>({
    firstname: "",
    lastname: "",
    email: "",
    password: ""
})

const handleSign = () => {
    console.log(signUpData.value)
}
</script>

<template>
    <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-xl-6 d-none d-xl-block">
                <img src="@/assets/SignupPage.jpg"
                    alt="To-Do Board" class="img-fluid"
                    style="border-top-left-radius: 1rem; border-bottom-left-radius: 1rem;" />
            </div>

            <div class="col-xl-6">
                <div class="signup-form-container">
                    <h2>Sign Up</h2>

                    <form>
                        <div class="mb-3">
                            <label for="firstname" class="form-label">First Name</label>
                            <input type="text" class="form-control" id="firstname" required v-model="signUpData.firstname"/>
                        </div>
                        <div class="mb-3">
                            <label for="lastname" class="form-label">Last Name</label>
                            <input type="text" class="form-control" id="lastname" required v-model="signUpData.lastname"/>
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email" required v-model="signUpData.email"/>
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" id="password" required v-model="signUpData.password"/>
                        </div>
                            <div class="mb-3">
                            <button type="submit" class="btn btn-primary w-100" @click.prevent="handleSign">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.background-image-container {
  background-image: url('@/assets/SignupPage.jpg');
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
}

.signup-form-container {
  width: 100%;
  max-width: 400px;
}

body, html {
  height: 100%;
  margin: 0;
}
</style>
