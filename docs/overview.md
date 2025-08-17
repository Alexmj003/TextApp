# 📘 Web Messaging App Overview (Electron + Vue)

## 🛠 Deployment
- **Platform**: Electron (desktop app)
- **Framework**: Vue.js
- **Authentication**: Not required for initial release

---

## 📄 Existing Pages

| Page Name     | Purpose                                                                 |
|---------------|-------------------------------------------------------------------------|
| **Messaging** | Compose messages, upload attachments, select recipient groups           |
| **Groups**    | Create/edit groups, manage recipients, assign tags/categories           |
| **Logs**      | View sent messages, delivery status, and recipient history              |
| **Twilio**    | Manage Twilio integration with safety locks to prevent misconfigurations|

---

## 🆕 Planned Enhancements

### ✉️ Messaging Page
- **Message Templates**
  - Save and reuse common messages (e.g. Sabbath reminders, event invites)
  - UI: Dropdown or modal to select template
  - Storage: Local JSON or Vuex store

- **Scheduling**
  - Schedule messages for future delivery
  - UI: Date/time picker
  - Backend: Local job queue or cron-like scheduler (Node.js integration)

---

### 👥 Groups Page
- **Group Tags/Categories**
  - Assign tags to groups (e.g. “Youth,” “Leadership,” “Visitors”)
  - UI: Tag input or dropdown selector
  - Filtering: Enable tag-based filtering on Messaging page

---

## 🔐 Twilio Page
- **Safety Locks**
  - Prevent accidental deletion or misconfiguration
  - UI: Toggle switches or confirmation modals
  - Optional: Role-based access in future versions

---

## 🧠 Future Considerations
- Export logs to CSV or PDF
- Role-based access control (for future multi-user support)
- Multi-language message support (English/Spanish toggle)
- Cloud sync or backup (if moving beyond Electron)