<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

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
    <div class="container-fluid">
        <div class="row">
            <div class="col-xl-7">
                <img src="@/assets/SignupPage.jpg" alt="To-Do Board" class="img-fluid"/>
            </div>

            <div class="col-xl-5">
                <div>
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
                        <div class="mb-3">
                            <p>
                                <router-link to="/login">
                                    Already have an account? Log in!
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
</style>