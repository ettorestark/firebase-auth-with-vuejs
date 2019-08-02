<template>
	<div>
		<nav class="navbar navbar-expand-md navbar-dark bg-dark mb-2">
			<div class="container">
				<a class="navbar-brand text-white">Firebase Auth</a>
				<ul class="navbar-nav ml-auto">
					<li class="nav-item">
						<a class="nav-link" @click.prevent="logOut">Log Out</a>
					</li>
				</ul>
			</div>
		</nav>
		<div class="container">
			<h1>Dashboard</h1>
			<hr>
			<p>
				{{ user }}
			</p>
		</div>
	</div>
</template>

<script>
	import * as firebase from 'firebase/app'
	import 'firebase/auth'
	export default {
		data() {
			return {
				user: null
			}
		},

		mounted() {
			this.user = firebase.auth().currentUser;
		},

		methods: {
			logOut() {
				firebase.auth().signOut().then(response => {
					this.$router.replace('/');
				});
			}
		}
	}
</script>