<script setup lang="ts">
import { ref } from 'vue'

const templates = ref([
  { id: 1, name: 'Sabbath Reminder', content: 'Happy Sabbath! Join us at 10am.' },
  { id: 2, name: 'Event Invite', content: 'Don’t miss our youth night this Friday!' }
])

const groups = ref([
  { id: 'youth', name: 'Youth' },
  { id: 'visitors', name: 'Visitors' },
  { id: 'leadership', name: 'Leadership' }
])

const selectedTemplate = ref(null)
const message = ref('')
const attachments = ref([])
const selectedGroups = ref([])
const scheduleDate = ref('')
const scheduleTime = ref('')

function applyTemplate() {
  const template = templates.value.find(t => t.id === selectedTemplate.value)
  if (template) message.value = template.content
}

function handleAttachments(event) {
  attachments.value = Array.from(event.target.files)
}

function sendNow() {
  console.log('Sending message:', message.value)
  console.log('To groups:', selectedGroups.value)
  console.log('With attachments:', attachments.value)
}

function scheduleMessage() {
  const scheduledAt = `${scheduleDate.value} ${scheduleTime.value}`
  console.log('Scheduling message for:', scheduledAt)
}

</script>

<template>
 <div class="messaging-page">
    <!-- Templates -->
    <label>Message Template</label>
    <select v-model="selectedTemplate" @change="applyTemplate">
      <option v-for="template in templates" :key="template.id" :value="template.id">
        {{ template.name }}
      </option>
    </select>

    <!-- Message Composer -->
    <label>Message</label>
    <textarea v-model="message" rows="6" placeholder="Type your message here..." />

    <!-- Attachments -->
    <label>Attachments</label>
    <input type="file" multiple @change="handleAttachments" />
    <ul>
      <li v-for="file in attachments" :key="file.name">{{ file.name }}</li>
    </ul>

    <!-- Group Selection -->
    <label>Recipient Groups</label>
    <select v-model="selectedGroups" multiple>
      <option v-for="group in groups" :key="group.id" :value="group.id">
        {{ group.name }}
      </option>
    </select>

    <!-- Scheduling -->
    <label>Schedule</label>
    <input type="date" v-model="scheduleDate" />
    <input type="time" v-model="scheduleTime" />

    <!-- Actions -->
    <button @click="sendNow">Send Now</button>
    <button @click="scheduleMessage">Schedule</button>
  </div>

</template>

<style scoped>
.messaging-page {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 600px;
  margin: auto;
}

</style>