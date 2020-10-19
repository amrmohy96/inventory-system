<template>
    <div class="row justify-content-center">
        <div class="col-xl-10 col-lg-12 col-md-9">
            <div class="card shadow-sm my-5">
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-start">
                    <router-link class="btn btn-primary" to="/all-employees">All Employees</router-link>
                </div>
                <div class="card-body p-0">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="login-form">
                                <div class="text-center">
                                    <h1 class="h4 text-gray-900 mb-4">Add Employee</h1>
                                </div>
                                <form @submit.prevent="insertNewEmployee" enctype="multipart/form-data">
                                    <div class="form-group">
                                        <div class="form-row">
                                            <div class="col-md-6">
                                                <input class="form-control" id="exampleInputFirstName"
                                                       placeholder="Enter Name"
                                                       type="text" v-model="form.name">
                                                <span class="text-danger" v-if="errors.name">{{errors.name[0]}}</span>
                                            </div>
                                            <div class="col-md-6">
                                                <input aria-describedby="emailHelp" class="form-control"
                                                       id="exampleInputEmail"
                                                       placeholder="Enter Email Address"
                                                       type="email" v-model="form.email">
                                                <span class="text-danger" v-if="errors.email">{{errors.email[0]}}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="form-row">
                                            <div class="col-md-6">
                                                <input class="form-control" placeholder="Enter phone"
                                                       type="text" v-model="form.phone">
                                                <span class="text-danger" v-if="errors.phone">{{errors.phone[0]}}</span>
                                            </div>
                                            <div class="col-md-6">
                                                <input class="form-control" placeholder="Enter Address"
                                                       type="text" v-model="form.address">
                                                <span class="text-danger"
                                                      v-if="errors.address">{{errors.address[0]}}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group">

                                        <div class="form-row">
                                            <div class="col-md-6">
                                                <input class="form-control" placeholder="Enter Joining Date" type="date"
                                                       v-model="form.joining_date">
                                                <small class="text-danger" v-if="errors.joining_date"> {{
                                                    errors.joining_date[0] }} </small>
                                            </div>

                                            <div class="col-md-6">
                                                <input class="form-control" placeholder="Enter Nid" type="text"
                                                       v-model="form.nid">
                                                <small class="text-danger" v-if="errors.nid"> {{ errors.nid[0]
                                                    }} </small>
                                            </div>

                                        </div>
                                    </div>
                                    <hr>
                                    <div class="form-group">

                                        <div class="form-row">
                                            <div class="col-md-4">
                                                <input class="form-control" placeholder="Enter salary" type="text"
                                                       v-model="form.salary">
                                                <small class="text-danger" v-if="errors.salary"> {{ errors.salary[0]
                                                    }} </small>
                                            </div>

                                            <div class="col-md-4">
                                                <input @change="onFileSelected" class="custom-file-input"
                                                       id="customFile"
                                                       type="file">

                                                <small class="text-danger" v-if="errors.photo"> {{ errors.photo[0]
                                                    }} </small>
                                                <label class="custom-file-label" for="customFile">Choose file</label>
                                            </div>

                                            <div class="col-md-4">
                                                <img :src="form.photo" style="height: 40px; width: 60px;">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <button class="btn btn-primary btn-block" type="submit">save</button>
                                    </div>
                                </form>
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
            if (!User.loggedIn()) {
                this.$router.push({name: '/'});
            }
        },
        data() {
            return {
                form: {
                    name: null,
                    email: null,
                    phone: null,
                    address: null,
                    salary: null,
                    photo: null,
                    nid: null,
                    joining_date: null
                },
                errors: {}
            }
        },
        methods: {
            onFileSelected(event) {
                let file = event.target.files[0];
                if (file.size > 1048770) {
                    Notify.image_validation()
                } else {
                    let reader = new FileReader();
                    reader.onload = event => {
                        this.form.photo = event.target.result
                        console.log(event.target.result);
                    };
                    reader.readAsDataURL(file);
                }
            },
            insertNewEmployee() {
                axios.post('/api/employees', this.form)
                    .then(() => {
                        // console.log(res.data);
                        this.$router.push({name: 'all-employees'});
                        Notify.success();
                    })
                    .catch(err => {
                        this.errors = err.response.data.errors;
                    })
            }
        }
    }
</script>

<style scoped>

</style>
