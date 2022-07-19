<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>paragraphs innit</p>
  </div>

  <div v-for="job in jobs" :key="job.id">
    <h2>{{job.title}}</h2>

  </div>
</template>

<script>
export default{
  data() {
    return{
      jobs:[]
    }
  },
  mounted() {
    fetch('http://localhost:3000/jobs')
      .then((res) => res.json())
      .then(data => this.jobs = data)
      .catch(err => console.log(err.message))
  }
}
</script>

