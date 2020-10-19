<template>
    <div class="row justify-content-center">
        <div class="col-xl-10 col-lg-12 col-md-9">
            <div class="card shadow-sm my-5">
                <div class="card-body p-0">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="login-form">
                                <div class="text-center">
                                    <h1 class="h4 text-gray-900 mb-4">Login</h1>
                                </div>
                                <form @submit.prevent="login" class="user">
                                    <div class="form-group">
                                        <input aria-describedby="emailHelp" class="form-control" id="exampleInputEmail"
                                               placeholder="Enter Email Address"
                                               type="email"
                                               v-model="form.email">
                                    </div>
                                    <div class="form-group">
                                        <input class="form-control" id="exampleInputPassword" placeholder="Password"
                                               type="password" v-model="form.password">
                                    </div>
                                    <div class="form-group">
                                        <div class="custom-control custom-checkbox small" style="line-height: 1.5rem;">
                                            <input class="custom-control-input" id="customCheck" type="checkbox">
                                            <label class="custom-control-label" for="customCheck">Remember
                                                Me</label>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <button class="btn btn-primary btn-block" type="submit">Login</button>
                                    </div>
                                    <hr>
                                </form>
                                <hr>
                                <div class="text-center">
                                    <router-link class="font-weight-bold small" to="/register">Create an Account!
                                    </router-link>
                                    |
                                    <a class="font-weight-bold small" href="/forget">Forget Password!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        created() {
            if (User.loggedIn()) {
                this.$router.push({
                    name: 'home'
                });
            }

        },
        data() {
            return {
                form: {
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            login() {
                // http://127.0.0.1:8000/api/login
                axios.post('/api/login', this.form)
                    .then(res => {
                        User.responseDataWhenUserLogin(res);
                        this.$router.push({name: 'home'})
                    })
                    .catch(err => {
                        console.log(err.response.data)
                    })
            }
        }
    }
</script>

<style scoped>

</style>
