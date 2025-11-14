<template>
  <div class="container">
    <router-link to="/jobs/add" class="btn add"> Add job</router-link>
    <h1 class="title">List of jobs</h1>

    <div class="grid">
      <div v-for="job in jobs" :key="job.id" class="card">
        <h3>{{ job.title }}</h3>

        <div class="actions">
          <router-link :to="`/jobs/${job.id}`" class="icon view" title="View">
            👁
          </router-link>

        
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeH',
  data() {
    return {
      jobs: []
    }
  },
  async mounted() {
    const rep = await fetch('http://localhost:3000/jobs')
    this.jobs = await rep.json()
  },
 
}
</script>

<style>
.container {
  padding: 20px;
  font-family: Poppins, sans-serif;
}

.title {
  text-align: center;
  margin-bottom: 20px;
}

.add {
  display: inline-block;
  background: #28a745;
  color: #fff;
  padding: 10px 15px;
  border-radius: 6px;
  text-decoration: none;
  margin-bottom: 15px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 56px;
  width: 90%;
  box-sizing: border-box;
  margin : auto;
}


.card {
  width: 100%;
  max-width: 300px;
  background: #fff;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.card h3 {
  margin-bottom: 10px;
  font-size: 18px;
  text-align: center;
}

.actions {
  display: flex;
  gap: 15px;
  font-size: 22px;
}

.icon {
  cursor: pointer;
  text-decoration: none;
  transition: 0.2s;
}

.icon:hover {
  transform: scale(1.2);
}

.view { color: #17a2b8; }
.edit { color: #ffc107; }
.delete {
  background: none;
  border: none;
  color: #dc3545;
  font-size: 22px;
}
</style>
