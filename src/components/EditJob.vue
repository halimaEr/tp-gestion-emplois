<template>
  <div class="addcontainer">
    <h1>Edit job</h1>
    <form @submit.prevent="editJob">
      <input type="text" v-model="job.title" />
      <input type="text" v-model="job.description"/>
      Completed : <input type="checkbox" v-model="job.completed" class=""/>
      <button type="submit">Edit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'EditJob',
  props: ['id'],
  data() {
    return {
      job: {
        title: "",
        description: "",
        completed: false
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
    console.log(this.job)  
    
  } catch (error) {
    console.error('Impossible de charger le job:', error);
  }
},
  methods: {
    async editJob() {
    const url = `http://localhost:3000/jobs/${this.id}`
      try {
        const response = await fetch(url, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.job)
        });

        if (response.ok) {
          console.log('Job edit successfully');
                this.$router.push('/')
        } else {
          console.error('Failed to edit job:', response.statusText);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  }
}
</script>

<style scoped>
.addcontainer {
  max-width: 500px;
  margin: 60px auto;
  background: #fff;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  font-family: Poppins, sans-serif;
}

.addcontainer h1 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
  font-size: 24px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

input[type="checkbox"] {
  width: 18px;
  height: 18px;
  accent-color: #17a2b8;
  cursor: pointer;
  margin-left: 10px;
}

.checkbox-group {
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-top: 5px;
}


input {
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
  outline: none;
  transition: 0.2s;
}

input:focus {
  border-color: #17a2b8;
  box-shadow: 0 0 5px rgba(23,162,184,0.4);
}

button {
  background: #28a745;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 6px;
  font-size: 17px;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background: #218838;
  transform: scale(1.02);
}

</style>