<template>
	<div>
		<div class="d-flex justify-content-center align-items-center">
			<div class="col-lg-4">
				<form @submit.prevent="signUp">
					<div class="form-group">
						<b>Sign Up</b>
					</div>
					<div class="form-group">
						<input type="text" placeholder="E-mail" class="form-control" :class="error.email.status" v-model="form.email">
						<div class="invalid-feedback">
							{{ error.email.message }}
						</div>
					</div>
					<div class="form-group">
						<input type="password" placeholder="Password" class="form-control" :class="error.password.status" v-model="form.password">
						<div class="invalid-feedback">
							{{ error.password.message }}
						</div>
					</div>
					<div class="form-group">
						<router-link to="/">Already have an account?</router-link>
					</div>
					<div class="form-group">
						<button class="btn btn-primary">Sign Up</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
	import * as firebase from 'firebase/app'
	import 'firebase/auth'
	export default {
		data() {
			return {
				form: {
					username: '',
					email: '',
					password: ''
				},
				error: {
					email: {
						status: '',
						message: ''
					},
					password: {
						status: '',
						message: ''
					}
				}
			}
		},

		methods: {
			signUp() {
				firebase.auth().createUserWithEmailAndPassword(
					this.form.email,
					this.form.password
				).then(response => {
					this.$router.replace('/');
				}).catch(err => {
					this.error.email.status = '';
					this.error.email.message = '';

					this.error.password.status = '';
					this.error.password.message = '';

					console.log(err.code);

					switch(err.code) {
						case "auth/invalid-email": 
							this.error.email.status = 'is-invalid';
							this.error.email.message = err.message;
						break; 
						case "auth/weak-password": 
							this.error.password.status = 'is-invalid';
							this.error.password.message = err.message;
						break; 
					}
				})
			}
		}
	}
</script>