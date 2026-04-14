# Anonymous Feedback Tool

Anonymous feedback collection tool with shareable links and dashboard analytics.

## 🚀 Features
- Submit feedback anonymously
- Share feedback link
- View responses in dashboard

## 🛠 Tech Stack
- React
- Node.js
- MongoDB

## Updating Form State

A reusable handler is used to update form fields dynamically:

function handleFormChange(field: string, value: string) {
  setFormDetails((prev) => ({
    ...prev,
    [field]: value,
  }));
}

🎯 Key Learning
When to use Object vs Array in State
Use Case	Data Structure
Single form	Object
Multiple forms	Array
Questions list	Array
Options inside question	Array