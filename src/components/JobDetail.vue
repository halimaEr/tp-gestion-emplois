<template>
  <div class="detail">
    <h1>Detail of job </h1>
    <p><span>Title :</span>{{this.job.title}} </p>
    <p><span>Description :</span>{{this.job.description}} </p>
    <p><span>Completed :</span>{{this.job.completed}} </p>
    <div> 
    
      <router-link :to="`/jobs/edit/${job.id}`" class="icon edit" title="Edit">
           Edite
          </router-link>

          <button @click="confirmDelete(job.id)" class="icon delete" title="Delete">
            Delete
          </button>
          </div>
    
  </div>
</template>

<script>
export default {
  name: 'JobDetail',
  props: ['id'],
  data(){
    return {
        job : {},
     

    }
  },
  methods:{
    confirmDelete(id) {
      if (confirm("Are you sure you want to delete this job?")) {
        this.deleteJob(id);
      }
    },

    async deleteJob(id) {
      const url = `http://localhost:3000/jobs/${id}`
      try {
        const response = await fetch(url, { method: 'DELETE' });
        if (response.ok) {
      this.$router.push('/')  
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  },

async mounted() {
 const url = `http://localhost:3000/jobs/${this.id}`
  console.log(url)
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Erreur ${response.status}: ${response.statusText}`);

    }
    const rep = await response.json();
    console.log(rep);
    this.job = rep;  
    
  } catch (error) {
    console.error('Impossible de charger le job:', error);
  }
}


 
}
</script>



<style>
.detail {
  max-width: 800px;
  margin: 40px auto;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.1);
  font-family: Poppins, sans-serif;
}

.detail h1 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
  font-size: 24px;
}

.detail p {
  background: #f8f8f8;
  padding: 10px;
  border-radius: 6px;
  border-left: 4px solid #17a2b8;
  margin: 10px 0;
  font-size: 16px;
  color: #444;
}
.detail div {
  display:flex;
  justify-content: space-between;
}
.detail p span {
  font-weight: bold;
  color: #2c3e50;
  margin-right: 8px;
}

.icon {
  font-size: 24px;
  margin-right: 15px;
}

.detail .icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
}


</style>
