<template>
  <div class="progress-container">
    <span class="progress-label"><{{ currentStep }}/{{ totalSteps }}></span>
    <div class="progress-bar">
      <div class="progress-fill" :style="{ width: progressPercentage + '%' }"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentStep: 1,
      totalSteps: 4
    }
  },
  computed: {
    progressPercentage() {
      return (this.currentStep / this.totalSteps) * 100
    }
  }
}
</script>

<style scoped>
.progress-container {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  margin-left: 1rem;
  margin-bottom: 2rem;
}
.progress-label {
  font-weight: bold;
  margin-right: 0.625rem;
}

.progress-bar {
  position: relative;
  width: 30rem;
  height: 1.25rem;
  background-color: #e0e0e0;
  border-radius: 0.3125rem;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background-color: var(--vt-word);
  transition: width 0.3s ease;
}
</style>
