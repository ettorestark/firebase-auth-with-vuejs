<template>
	<div>
		<div class="d-flex justify-content-center align-items-center">
			<div class="col-lg-4">
				<form @submit.prevent="sendEmail">
					<div class="form-group">
						<b>Forgot your password?</b>
					</div>
					<div class="form-group">
						Enter your email address and we'll send you and a link to reset your password.
					</div>
					<div class="form-group">
						<input type="text" placeholder="E-mail" class="form-control" :class="error.email.status" v-model="email">
						<div class="invalid-feedback">
							{{ error.email.message }}
						</div>
					</div>
					<div class="form-group">
						<button class="btn btn-primary">Send email</button>
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
				email: '',
				error: {
					email: {
						status: '',
						message: ''
					}
				}
			}
		},

		methods: {
			sendEmail() {
				firebase.auth().sendPasswordResetEmail(this.email).
					then(response => {
						this.$router.replace('/');
					}).catch(err => {
						console.log(err);
						this.error.email.status = '';
						this.error.email.message = '';
						switch(err.code) {
							case "auth/invalid-email": 
								this.error.email.status = 'is-invalid';
								this.error.email.message = err.message;
							break;
							case "auth/user-not-found": 
								this.error.email.status = 'is-invalid';
								this.error.email.message = err.message;
							break;
						}
					});
			}
		}
	}
</script>
