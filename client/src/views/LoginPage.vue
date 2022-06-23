<script>
import { mapActions } from 'pinia'
import { useCounterStore } from '../stores/counter'


export default {
    name: "LoginPage",
    data() {
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        ...mapActions(useCounterStore, ["loginHandler"]),

        // doc-facebook
        // statusChangeCallback(response) {
        //     console.log('statusChangeCallback');
        //     console.log(response);
            
        //     // The response object is returned with a status field that lets the
        //     // app know the current login status of the person.
        //     // Full docs on the response object can be found in the documentation
        //     // for FB.getLoginStatus().
        //     if (response.status === 'connected') {
        //         // Logged into your app and Facebook.
        //         console.log('Welcome!  Fetching your information.... ');
        //         FB.api('/me', function (response) {
        //             console.log('Successful login for: ' + response.name);
        //             document.getElementById('status').innerHTML =
        //                 'Thanks for logging in, ' + response.name + '!';
        //         });
        //     } else {
        //         // The person is not logged into your app or we are unable to tell.
        //         document.getElementById('status').innerHTML = 'Please log ' +
        //             'into this app.';
        //     }
        // },

        // checkLoginState() {
        //     FB.getLoginStatus(function (response) {
        //         statusChangeCallback(response);
        //     });
        // },

        // firebase_x_fb
        facebookLogin() {
            let that = this
            const provider = new $nuxt.$fireModule.auth.FacebookAuthProvider()
            this.$fire.auth.signInWithPopup(provider)
                .catch(function (err) {
                    that.snackbarText = error.message
                    that.snackbar = true
                }).then((user) => {
                    $nuxt.$router.push('/home')
                })
        }

    },

    created() {
        // doc_facebook
        // this.checkLoginState()
        // FB.getLoginStatus(function (response) {
        //     statusChangeCallback(response);
        // });
        // window.fbAsyncInit = function () {
        //     FB.init({
        //         appId: '1382494195590177',
        //         cookie: true,
        //         xfbml: true,
        //         version: 'v14.0'
        //     });

        //     FB.AppEvents.logPageView();

        // };

        // (function (d, s, id) {
        //     var js, fjs = d.getElementsByTagName(s)[0];
        //     if (d.getElementById(id)) { return; }
        //     js = d.createElement(s); js.id = id;
        //     js.src = "https://connect.facebook.net/en_US/sdk.js";
        //     fjs.parentNode.insertBefore(js, fjs);
        // }(document, 'script', 'facebook-jssdk'));
    }
}
</script>

<template>
    <section class="vh-100">
        <div class="container py-5 h-100">
            <div class="row d-flex align-items-center justify-content-center h-100">
                <h3 class="center">Login</h3>
                <div class="col-md-8 col-lg-7 col-xl-6">
                    <img src="../assets/img/stik-ps.jpg" class="img-fluid" alt="Phone image">
                </div>
                <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                    <p>World no.2 easiest login. Cause no.1 was taken our own register!</p>
                    <form>
                        <!-- Email input -->
                        <div class="form-outline mb-4">
                            <input v-model="email" type="email" id="form1Example13"
                                class="form-control form-control-lg" />
                            <label class="form-label" for="form1Example13">Email address</label>
                        </div>

                        <!-- Password input -->
                        <div class="form-outline mb-4">
                            <input v-model="password" type="password" id="form1Example23"
                                class="form-control form-control-lg" />
                            <label class="form-label" for="form1Example23">Password</label>
                        </div>

                        <div class="d-flex justify-content-around align-items-center mb-4">
                            <!-- Checkbox -->
                            <p>Don't have an account?
                                <routerLink to="/register">Register</routerLink>
                            </p>
                        </div>

                        <!-- Submit button -->
                        <button @click.prevent="loginHandler(this.email, this.password)" type="submit"
                            class="btn btn-primary btn-lg btn-block">Sign in</button>

                        <div class="divider d-flex align-items-center my-4">
                            <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                        </div>

                        <button 
                        @click="facebookLogin" 
                        class="login-button my-2 pa-2"
                        widht="100%"
                        depressed
                        large>
                        <i class="bi bi-facebook"></i>Login with Facebook</button>

                        <!-- <div class="fb-login-button" data-width="" data-size="large"
                            data-button-type="continue_with" data-layout="default" data-auto-logout-link="false"
                            data-use-continue-as="false"></div> -->

                        <!-- <fb:login-button id="status" scope="public_profile,email" onlogin="checkLoginState();">
                        </fb:login-button> -->

                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
h3 {
    text-align: center;
}
</style>