export const services = [
  {
    id: 1,
    name: "E-Commerce Website Development",
    category: "Development",
    status: "In Progress",
    progress: 65,
    startDate: "2024-03-01",
    endDate: "2024-04-15",
    priority: "High",
    totalBudget: "₹75,000",
    paidAmount: "₹40,000",
    pendingAmount: "₹35,000",
    description:
      "Full-stack e-commerce platform with payment integration and inventory management",
    phases: [
      {
        id: 1,
        name: "Requirements & Planning",
        status: "Completed",
        paymentDetails: {
          amount: "₹15,000",
          status: "Paid",
          dueDate: "2024-03-01",
          paidDate: "2024-03-01",
          invoice: "INV-001",
        },
        deliverables: [
          {
            name: "Requirements Document",
            status: "Approved",
            submittedDate: "2024-03-01",
          },
          {
            name: "Wireframes",
            status: "Approved",
            submittedDate: "2024-03-01",
          },
        ],
      },
      {
        id: 2,
        name: "Frontend Development",
        status: "Completed",
        paymentDetails: {
          amount: "₹25,000",
          status: "Paid",
          dueDate: "2024-03-25",
          paidDate: "2024-03-25",
          invoice: "INV-002",
        },
        deliverables: [
          {
            name: "UI Design",
            status: "Approved",
            submittedDate: "2024-03-20",
          },
          {
            name: "Frontend Code",
            status: "Approved",
            submittedDate: "2024-03-25",
          },
        ],
      },
      {
        id: 3,
        name: "Backend Integration",
        status: "In Progress",
        paymentDetails: {
          amount: "₹35,000",
          status: "Pending",
          dueDate: "2024-04-10",
        },
        deliverables: [
          {
            name: "API Integration",
            status: "In Progress",
          },
          {
            name: "Database Setup",
            status: "Pending",
          },
        ],
      },
    ],
    documents: [
      {
        id: 1,
        name: "Project Contract.pdf",
        type: "contract",
        uploadedAt: "2024-03-01",
      },
      {
        id: 2,
        name: "Payment Schedule.pdf",
        type: "payment",
        uploadedAt: "2024-03-01",
      },
    ],
  },
  {
    id: 2,
    name: "Mobile App UI/UX Design",
    category: "Design",
    status: "At Risk",
    progress: 45,
    startDate: "2024-03-10",
    endDate: "2024-04-20",
    priority: "Medium",
    totalBudget: "₹45,000",
    paidAmount: "₹15,000",
    pendingAmount: "₹30,000",
    description:
      "Food delivery app UI/UX design with user research and prototyping",
    phases: [
      {
        id: 1,
        name: "User Research",
        status: "Completed",
        paymentDetails: {
          amount: "₹15,000",
          status: "Paid",
          dueDate: "2024-03-15",
          paidDate: "2024-03-15",
          invoice: "INV-003",
        },
        deliverables: [
          {
            name: "User Research Report",
            status: "Approved",
            submittedDate: "2024-03-15",
          },
          {
            name: "User Personas",
            status: "In Progress",
            submittedDate: "2024-03-15",
          },
        ],
      },
      {
        id: 2,
        name: "UI Design",
        status: "In Progress",
        paymentDetails: {
          amount: "₹30,000",
          status: "Pending",
          dueDate: "2024-04-10",
        },
        deliverables: [
          {
            name: "UI Screens",
            status: "In Progress",
          },
          {
            name: "Design System",
            status: "Pending",
          },
        ],
      },
    ],
    documents: [
      {
        id: 1,
        name: "Design Brief.pdf",
        type: "brief",
        uploadedAt: "2024-03-10",
      },
    ],
  },
  {
    id: 3,
    name: "Digital Marketing Campaign",
    category: "Marketing",
    status: "Completed",
    progress: 100,
    startDate: "2024-02-01",
    endDate: "2024-03-15",
    priority: "High",
    totalBudget: "₹35,000",
    paidAmount: "₹35,000",
    pendingAmount: "₹0",
    description: "Social media marketing and SEO optimization campaign",
    phases: [
      {
        id: 1,
        name: "Strategy Planning",
        status: "In Progress",
        paymentDetails: {
          amount: "₹15,000",
          status: "Paid",
          dueDate: "2024-02-05",
          paidDate: "2024-02-05",
          invoice: "INV-004",
        },
        deliverables: [
          {
            name: "Marketing Strategy",
            status: "Approved",
            submittedDate: "2024-02-05",
          },
        ],
      },
      {
        id: 2,
        name: "Campaign Execution",
        status: "Completed",
        paymentDetails: {
          amount: "₹20,000",
          status: "Paid",
          dueDate: "2024-03-15",
          paidDate: "2024-03-15",
          invoice: "INV-005",
        },
        deliverables: [
          {
            name: "Campaign Reports",
            status: "Approved",
            submittedDate: "2024-03-15",
          },
        ],
      },
    ],
    documents: [
      {
        id: 1,
        name: "Campaign Results.pdf",
        type: "report",
        uploadedAt: "2024-03-15",
      },
    ],
  },
  {
    id: 4,
    name: "Content Writing Services",
    category: "Content",
    status: "In Progress",
    progress: 30,
    startDate: "2024-03-20",
    endDate: "2024-04-30",
    priority: "Medium",
    totalBudget: "₹25,000",
    paidAmount: "₹10,000",
    pendingAmount: "₹15,000",
    description: "Website content and blog post creation",
    phases: [
      {
        id: 1,
        name: "Content Strategy",
        status: "Completed",
        paymentDetails: {
          amount: "₹10,000",
          status: "Paid",
          dueDate: "2024-03-25",
          paidDate: "2024-03-25",
          invoice: "INV-006",
        },
        deliverables: [
          {
            name: "Content Plan",
            status: "Approved",
            submittedDate: "2024-03-25",
          },
        ],
      },
      {
        id: 2,
        name: "Content Creation",
        status: "In Progress",
        paymentDetails: {
          amount: "₹15,000",
          status: "Pending",
          dueDate: "2024-04-30",
        },
        deliverables: [
          {
            name: "Website Content",
            status: "In Progress",
          },
          {
            name: "Blog Posts",
            status: "Pending",
          },
        ],
      },
    ],
    documents: [
      {
        id: 1,
        name: "Content Guidelines.pdf",
        type: "guidelines",
        uploadedAt: "2024-03-20",
      },
    ],
  },
];

export const stats = {
  overview: {
    totalProjects: 3,
    activeProjects: 2,
    completedProjects: 1,
    totalBudget: "₹155,000",
    totalPaid: "₹85,000",
    pendingPayments: "₹70,000",
  },
  expenditure: {
    currentMonth: "₹40,000",
    nextDuePayment: "₹35,000",
    nextDueDate: "2024-04-10",
  },
};

export const notifications = [
  {
    id: 1,
    type: "payment",
    title: "Payment Due",
    message: "Payment of ₹35,000 due for Backend Integration phase",
    dueDate: "2024-04-10",
    read: false,
    serviceId: 1,
  },
  {
    id: 2,
    type: "deliverable",
    title: "Deliverable Ready",
    message: "Frontend code is ready for review",
    timestamp: "2024-03-25",
    read: false,
    serviceId: 1,
  },
];

// ... rest of the existing exports (supportTickets, faqs, users) ...

export const supportTickets = [
  {
    id: 1,
    title: "Payment Integration Issue",
    description: "Unable to integrate payment gateway in e-commerce website",
    status: "Open",
    priority: "High",
    createdAt: "2024-03-20",
    serviceId: 1,
    responses: [
      {
        id: 1,
        message: "Our team is looking into this issue",
        from: "Support Team",
        timestamp: "2024-03-20 14:30",
      },
    ],
  },
  {
    id: 2,
    title: "Design Revision Request",
    description: "Need changes in the app color scheme",
    status: "In Progress",
    priority: "Medium",
    createdAt: "2024-03-19",
    serviceId: 2,
    responses: [],
  },
];

export const activities = [
  {
    id: 1,
    type: "milestone",
    message: "Frontend Development completed",
    serviceId: 1,
    timestamp: "2024-03-30 15:00",
    user: "Rahul Sharma",
  },
  {
    id: 2,
    type: "comment",
    message: "Updated wireframes for review",
    serviceId: 2,
    timestamp: "2024-03-29 11:30",
    user: "Anjali Kumar",
  },
  {
    id: 3,
    type: "status",
    message: "Campaign successfully completed",
    serviceId: 3,
    timestamp: "2024-03-15 16:45",
    user: "System",
  },
];

export const faqs = [
  {
    id: 1,
    question: "How do I track my service progress?",
    answer:
      "You can track your service progress by clicking on 'View Details' on any service card. This will show you detailed milestones and timeline.",
  },
  {
    id: 2,
    question: "What if I need to modify my service request?",
    answer:
      "To modify a service request, please raise a support ticket through the Support section. Our team will assist you with the changes.",
  },
  {
    id: 3,
    question: "How are the service deadlines determined?",
    answer:
      "Service deadlines are set based on project scope, complexity, and resource availability. These are discussed and agreed upon during the initial consultation.",
  },
];

export const users = {
  client: {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Client",
    company: "Tech Solutions Inc",
    joinedDate: "2024-01-15",
    avatar: "/avatars/john.jpg",
  },
};
