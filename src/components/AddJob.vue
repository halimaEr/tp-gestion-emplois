<template>
  <div class="addcontainer">
    <h1>Add job</h1>
    <form @submit.prevent="addJob">
      <input type="text" v-model="job.title" placeholder="Title" />
      <input type="text" v-model="job.description" placeholder="Description" />
      <button type="submit">Add</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddJob',
  data() {
    return {
      job: {
        title: "",
        description: "",
        completed :false
      }
    }
  },
  methods: {
    async addJob() {
      const url = 'http://localhost:3000/jobs';
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.job)
        });

        if (response.ok) {
          console.log('Job added successfully');
          this.job = { title: '', description: '' };
        } else {
          console.error('Failed to add job:', response.statusText);
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