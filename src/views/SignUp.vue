<template>
	<div>
		<div class="d-flex justify-content-center align-items-center">
			<div class="col-lg-4">
				<form @submit.prevent="signUp">
					<div class="form-group">
						<b>Sign Up</b>
					</div>
					<div class="form-group">
						<input type="text" placeholder="E-mail" class="form-control" v-model="form.email">
					</div>
					<div class="form-group">
						<input type="password" placeholder="Password" class="form-control" v-model="form.password">
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
					username: null,
					email: null,
					password: null
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
					console.log(err);
				})
			}
		}
	}
</script>