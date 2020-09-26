<template>
    <!-- Login Content -->

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
                                <form class="user">
                                    <div class="form-group">
                                        <input aria-describedby="emailHelp" class="form-control" id="exampleInputEmail"
                                               placeholder="Enter Email Address"
                                               type="email">
                                    </div>
                                    <div class="form-group">
                                        <input class="form-control" id="exampleInputPassword" placeholder="Password"
                                               type="password">
                                    </div>
                                    <div class="form-group">
                                        <div class="custom-control custom-checkbox small" style="line-height: 1.5rem;">
                                            <input class="custom-control-input" id="customCheck" type="checkbox">
                                            <label class="custom-control-label" for="customCheck">Remember
                                                Me</label>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <a class="btn btn-primary btn-block" href="index.html">Login</a>
                                    </div>
                                    <hr>
                                </form>
                                <hr>
                                <div class="text-center">
                                    <router-link class="font-weight-bold small" to="/register">Create an Account!</router-link> |
                                    <a class="font-weight-bold small" href="/forgetpassword">Forget Password!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Login Content -->
</template>

<script>
    export default {
        name: "login"
    }
</script>

<style scoped>

</style>
