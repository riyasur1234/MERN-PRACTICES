// localStorage.clear()

export const setLocalStorage = () => {
  const employees = [
    {
      id: 1,
      firstname: "Arjun",
      email: "employee1@example.com",
      password: "123",
      tasks: [
        {
          id: 1,
          title: "Prepare report",
          description: "Monthly sales report",
          date: "2026-04-20",
          category: "Reporting",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          id: 2,
          title: "Client meeting",
          description: "Discuss project requirements",
          date: "2026-04-21",
          category: "Meeting",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          id: 3,
          title: "Fix bugs",
          description: "Resolve login issues",
          date: "2026-04-22",
          category: "Development",
          active: false,
          newTask: false,
          completed: false,
          failed: true
        }
      ]
    },
    {
      id: 2,
      firstname: "Priya",
      email: "employee2@example.com",
      password: "123",
      tasks: [
        {
          id: 4,
          title: "Design homepage",
          description: "Create UI mockups",
          date: "2026-04-20",
          category: "Design",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          id: 5,
          title: "Team meeting",
          description: "Weekly sync-up",
          date: "2026-04-21",
          category: "Meeting",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          id: 6,
          title: "Update assets",
          description: "Refresh icons and images",
          date: "2026-04-22",
          category: "Design",
          active: false,
          newTask: false,
          completed: false,
          failed: false
        }
      ]
    },
    {
      id: 3,
      firstname: "Rohit",
      email: "employee3@example.com",
      password: "123",
      tasks: [
        {
          id: 7,
          title: "Database backup",
          description: "Backup production DB",
          date: "2026-04-20",
          category: "Maintenance",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          id: 8,
          title: "API testing",
          description: "Test endpoints",
          date: "2026-04-21",
          category: "Testing",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          id: 9,
          title: "Optimize queries",
          description: "Improve DB performance",
          date: "2026-04-22",
          category: "Development",
          active: false,
          newTask: false,
          completed: false,
          failed: true
        }
      ]
    },
    {
      id: 4,
      firstname: "Sneha",
      email: "employee4@example.com",
      password: "123",
      tasks: [
        {
          id: 10,
          title: "Write documentation",
          description: "API docs update",
          date: "2026-04-20",
          category: "Documentation",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          id: 11,
          title: "Code review",
          description: "Review PRs",
          date: "2026-04-21",
          category: "Development",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          id: 12,
          title: "Fix UI bugs",
          description: "Resolve CSS issues",
          date: "2026-04-22",
          category: "Design",
          active: false,
          newTask: false,
          completed: false,
          failed: false
        }
      ]
    },
    {
      id: 5,
      firstname: "Vikram",
      email: "employee5@example.com",
      password: "123",
      tasks: [
        {
          id: 13,
          title: "Deploy app",
          description: "Push to production",
          date: "2026-04-20",
          category: "Deployment",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          id: 14,
          title: "Monitor logs",
          description: "Check server logs",
          date: "2026-04-21",
          category: "Maintenance",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          id: 15,
          title: "Security audit",
          description: "Review vulnerabilities",
          date: "2026-04-22",
          category: "Security",
          active: false,
          newTask: false,
          completed: false,
          failed: true
        }
      ]
    }
  ];

  const admin = [
    {
      id: 1,
      firstname: "Admin",
      email: "admin@example.com",
      password: "123"
    }
  ];

  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));
  return { employees, admin };
}
