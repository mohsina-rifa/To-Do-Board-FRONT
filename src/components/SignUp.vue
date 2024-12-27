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
    <section class="vh-100" style="background-color: #cdeff0;">
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col col-xl-10">
                    <div class="card" style="border-radius: 1rem;">
                        <div class="row g-0">
                            <div class="col-md-6 col-lg-5 d-none d-md-block">
                                <img src="@/assets/SignUpImg.jpg" alt="login form" class="img-fluid" style="border-radius: 1rem 0 0 1rem;" />
                            </div>
                        
                            <div class="col-md-6 col-lg-7 d-flex align-items-center">
                                <div class="card-body p-4 p-lg-5 text-black">
                                    <form>
                                        <div class="d-flex align-items-center mb-3 pb-1">
                                            <i class="fas fa-cubes fa-2x me-3" style="color: #ff6219;"></i>
                                            <span class="h1 fw-bold mb-0">To-Do Board</span>
                                        </div>

                                        <h5 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Sign up your account</h5>

                                        <div data-mdb-input-init class="form-outline mb-4">
                                            <input type="text" id="firstname" class="form-control form-control-lg" required v-model="signUpData.firstname"/>
                                            <label class="form-label" for="firstname">First Name</label>
                                        </div>

                                        <div data-mdb-input-init class="form-outline mb-4">
                                            <input type="text" id="lastname" class="form-control form-control-lg" required v-model="signUpData.lastname"/>
                                            <label class="form-label" for="lastname">Last Name</label>
                                        </div>

                                        <div data-mdb-input-init class="form-outline mb-4">
                                            <input type="email" id="email" class="form-control form-control-lg" required v-model="signUpData.email"/>
                                            <label class="form-label" for="email">Email address</label>
                                        </div>

                                        <div data-mdb-input-init class="form-outline mb-4">
                                            <input type="password" id="password" class="form-control form-control-lg" required v-model="signUpData.password"/>
                                            <label class="form-label" for="password">Password</label>
                                        </div>

                                        <div class="pt-1 mb-4">
                                            <button data-mdb-button-init data-mdb-ripple-init class="btn btn-dark btn-lg btn-block" type="button" @click.prevent="handleSign">Sign Up</button>
                                        </div>

                                        <p class="mb-5 pb-lg-2" style="color: #393f81;">
                                            <router-link to="/login">
                                                Already have an account? Log in!
                                            </router-link>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>