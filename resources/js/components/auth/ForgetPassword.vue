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
                                    <h1 class="h4 text-gray-900 mb-4">Forget Password</h1>
                                </div>
                                <form class="user">
                                    <div class="form-group">
                                        <input aria-describedby="emailHelp" class="form-control" id="exampleInputEmail"
                                               placeholder="Enter Email Address"
                                               type="email">
                                    </div>
                                    <div class="form-group">
                                        <a class="btn btn-primary btn-block" href="index.html">Reset</a>
                                    </div>
                                    <hr>
                                </form>
                                <hr>
                                <div class="text-center">
                                    <router-link class="font-weight-bold small" to="/">Back Login!</router-link>
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
        name: "forget-password"
    }
</script>

<style scoped>

</style>
