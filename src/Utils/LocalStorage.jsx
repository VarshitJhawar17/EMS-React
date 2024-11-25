// localStorage.clear()

const employees = [
  {
      "id": 1,
      "firstName": "Rajesh",
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
          {
              "taskTitle": "Prepare Report",
              "taskDescription": "Create the monthly sales report",
              "taskDate": "2024-11-15",
              "category": "Sales",
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false
          },
          {
              "taskTitle": "Team Meeting",
              "taskDescription": "Attend the weekly team meeting",
              "taskDate": "2024-11-16",
              "category": "Meetings",
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false
          },
          {
              "taskTitle": "Follow-up Calls",
              "taskDescription": "Call clients for follow-ups on pending queries",
              "taskDate": "2024-11-17",
              "category": "Customer Support",
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false
          }
      ],
      "taskNumbers": {
          "active": 2,
          "newTask": 1,
          "completed": 1,
          "failed": 0
      }
  },
  {
      "id": 2,
      "firstName": "Anjali",
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
          {
              "taskTitle": "Update Database",
              "taskDescription": "Update client database with recent interactions",
              "taskDate": "2024-11-18",
              "category": "Database",
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false
          },
          {
              "taskTitle": "Product Training",
              "taskDescription": "Attend training for new product release",
              "taskDate": "2024-11-19",
              "category": "Training",
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false
          }
      ],
      "taskNumbers": {
          "active": 1,
          "newTask": 1,
          "completed": 1,
          "failed": 0
      }
  },
  {
      "id": 3,
      "firstName": "Vikram",
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
          {
              "taskTitle": "Social Media Post",
              "taskDescription": "Draft a post for social media channels",
              "taskDate": "2024-11-20",
              "category": "Marketing",
              "active": false,
              "newTask": false,
              "completed": false,
              "failed": true
          }
      ],
      "taskNumbers": {
          "active": 0,
          "newTask": 0,
          "completed": 0,
          "failed": 1
      }
  },
  {
      "id": 4,
      "firstName": "Neha",
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
          {
              "taskTitle": "Code Review",
              "taskDescription": "Review code from development team",
              "taskDate": "2024-11-21",
              "category": "Development",
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false
          },
          {
              "taskTitle": "Bug Fixing",
              "taskDescription": "Fix identified bugs in the system",
              "taskDate": "2024-11-22",
              "category": "Development",
              "active": false,
              "newTask": false,
              "completed": false,
              "failed": true
          }
      ],
      "taskNumbers": {
          "active": 1,
          "newTask": 1,
          "completed": 0,
          "failed": 1
      }
  },
  {
      "id": 5,
      "firstName": "Pooja",
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
          {
              "taskTitle": "Prepare Presentation",
              "taskDescription": "Prepare presentation slides for project review",
              "taskDate": "2024-11-23",
              "category": "Projects",
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false
          },
          {
              "taskTitle": "Client Demo",
              "taskDescription": "Conduct demo for potential clients",
              "taskDate": "2024-11-24",
              "category": "Sales",
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false
          },
          {
              "taskTitle": "Documentation Update",
              "taskDescription": "Update the project documentation",
              "taskDate": "2024-11-25",
              "category": "Documentation",
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false
          }
      ],
      "taskNumbers": {
          "active": 2,
          "newTask": 1,
          "completed": 1,
          "failed": 0
      }
  }
];




const admin =  [{
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }

]

export const setLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees))
    localStorage.setItem("admin", JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const EmployeeData = JSON.parse(localStorage.getItem("employees"))
    const AdimnData = JSON.parse(localStorage.getItem("admin"))
    return { employees: EmployeeData, admin: AdimnData }; 
}