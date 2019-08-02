<template>
	<div>
		<div class="d-flex justify-content-center align-items-center">
			<div class="col-lg-4">
				<form @submit.prevent="signIn">
					<div class="form-group">
						<b>Sign In</b>
					</div>
					<div class="form-group">
						<input type="text" placeholder="E-mail" class="form-control" v-model="form.email">
					</div>
					<div class="form-group">
						<input type="password" placeholder="Password" class="form-control" v-model="form.password">
					</div>
					<div class="form-group">
						<router-link to="/sign_up">You dont' have an account?</router-link>
					</div>
					<div class="form-group">
						<button class="btn btn-primary">Sign In</button>
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
					email: null,
					password: null
				}
			}
		},

		methods: {
			signIn() {
				firebase.auth().signInWithEmailAndPassword(
					this.form.email,
					this.form.password
				).then(response => {
					this.$router.replace('dashboard');
				}).catch(err => {
					console.log(err);
				});
			}
		}
	}
</script>