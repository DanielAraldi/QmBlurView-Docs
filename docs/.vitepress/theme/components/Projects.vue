<template>
  <div class="my-projects">
    <div class="project-list">
      <div v-for="project in projects" :key="project.title" class="project-card">
        <a :href="project.link" target="_blank" class="project-link">
          <div class="project-content">
            <div class="title-wrapper">
              <h3 class="project-title">{{ project.title }}</h3>
            </div>
            <p class="project-description">{{ project.description }}</p>
            <div class="project-tags">
              <span v-for="tag in project.tags" :key="tag" class="project-tag">
                {{ tag }}
              </span>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  projects: {
    type: Array,
    required: true,
    default: () => []
  }
})
</script>

<style scoped>
.my-projects {
  margin: 2rem 0;
}

.project-list {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}

.project-card {
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  background: var(--vp-c-bg-soft);
  box-shadow: 0 2px 8px rgba(0.06, 0.06, 0.06, 0.06);
}

.project-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0.10, 0.10, 0.10, 0.10);
}

.project-link {
  display: flex;
  gap: 1rem;
  text-decoration: none;
  color: inherit;
}

.project-content {
  flex: 1;
}

.title-wrapper {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
}

.project-title {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.project-description {
  margin: 0 0 0.75rem 0;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  line-height: 1.4;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.project-tag {
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  background: #e6f3ff;
  color: #1a73e8;
  border-radius: 8px;
  font-weight: 500;
}

@media (min-width: 768px) {
  .project-link {
    gap: 1.25rem;
  }
}
</style>