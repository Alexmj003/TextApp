<script setup lang="ts">
import { useRoute } from 'vue-router'  // Composable to access the current route info

const route = useRoute()               // Get the current route so we can compare for active links

// Define the structure of a navigation item
interface NavItem {
  label: string                        // Text to display on the button
  path: string                         // Corresponding route path
}

// Array of navigation items used for routing
const navItems: NavItem[] = [
  { label: 'Messages', path: '/messages' },
  { label: 'Groups', path: '/groups' },
  { label: 'Logs', path: '/logs' },
  { label: 'Twilio', path: '/twilio' }
]
</script>

<template>
  <!-- Navigation container -->
  <nav class="toolbar">
    <!-- Loop through each nav item and create a router link -->
    <template v-for="item in navItems" :key="item.path">
      <RouterLink :to="item.path" class="toolbar-link" :class="{ active: route.path === item.path }">
        {{ item.label }}
      </RouterLink>
    </template>
  </nav>
</template>



<style scoped>
/* Styles for the toolbar container */
.toolbar {
  display: flex;                       /* Arrange items horizontally */
  gap: 1rem;                           /* Add spacing between nav links */
  padding: 1rem;                       /* Add padding around the toolbar */
  background-color: #f4f4f4;           /* Light gray background */
  border-bottom: 1px solid #ccc;      /* Subtle bottom border */
  justify-content: center;
  width: 100%;                        /* Ensure full width */
  box-sizing: border-box;             /* Include padding in width calculation */
  margin: 0;                          /* Remove any default margins */
}

/* Base style for router links */
.toolbar-link {
  text-decoration: none;              /* Remove underline from links */
  color: #444;                        /* Default text color */
  font-weight: 500;                   /* Slightly bold text */
}

/* Style when the link is active */
.toolbar-link.active {
  color: #007bff;                     /* Highlighted color for active link */
  border-bottom: 2px solid #007bff;   /* Add underline effect for active route */
}
</style>