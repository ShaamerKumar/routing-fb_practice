<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link :to="{name: 'About'}">About</router-link>
  </nav>

  <button @click="redirect">Redirect</button>
  <button @click="back">Go Back</button>
  <button @click="fwd">Go Forward</button>
  <router-view/>

  <h2>Firebase Auth</h2>

  <form class="signup">
    <label for="email">email:</label>
    <input type="email" name="email">

    <label for="password">password:</label>
    <input type="password" name="password">

    <button>signup</button>

  </form>

  <form class="login">
    <label for="email">email:</label>
    <input type="email" name="email">

    <label for="password">password:</label>
    <input type="password" name="password">

    <button>login</button>

  </form>

  <button class="logout">logout</button>



  <form class="adduser">
    <h1>AddingStuff</h1>
    <label for="name">Name:</label>
    <input type="text" name="name" required>

    <label for="password">Password:</label>
    <input type="password" name="password" required>

    <button>Add Profile</button>

  </form>

  <form class="dele">
    <h1>DeletingStuff</h1>
    <label for="id">Profile ID:</label>
    <input type="text" name="id" required>

    

    <button>Delete Profile</button>

  </form>



</template>

<script>
export default {
  methods: {
    redirect (){
      this.$router.push({name: 'Home'})

    },
    back() {
      this.$router.go(-1)
      console.log("Hi")

    },
    fwd(){
      this.$router.go(1)

    },
    output(){
      console.log("Hello")
    }
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}

nav a.router-link-exact-active {
  color: white;
  background: crimson;
}
</style>
