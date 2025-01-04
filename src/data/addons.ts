export type Addon = {
  name: string;
  category: string;
  price: number;
  description: string;
  features: string[];
};

export const categories = [
  "Customer Service",
  "E-commerce",
  "Communication",
  "Community & Social",
  "Educational",
  "Content Management",
  "Media Management",
  "Business Management",
  "Specialized Solutions",
  "Utilities & Tools"
] as const;


export const addons: Addon[] = [
  // Content Management
  {
    name: "Static Website Package",
    category: "Content Management",
    price: 2500,
    description: "Simple and efficient solution for static websites",
    features: [
      "Simple management of 2-6 pages",
      "Basic SEO optimization",
      "Mobile responsiveness",
      "Simple contact form"
    ]
  },
  {
    name: "Dynamic Website Package",
    category: "Content Management",
    price: 8500,
    description: "Complete solution for dynamic websites",
    features: [
      "Advanced content management",
      "User roles and permissions",
      "Custom templates and themes",
      "Multilingual support",
      "Third-party service integration"
    ]
  },
  {
    name: "Basic Blog Package",
    category: "Content Management",
    price: 3500,
    description: "Professional blogging platform",
    features: [
      "Post management",
      "Content editor",
      "Comment system",
      "Categories and tags",
      "Author profiles",
      "RSS Feed"
    ]
  },
  {
    name: "Advanced Blog Package",
    category: "Content Management",
    price: 6800,
    description: "Professional blog with advanced features",
    features: [
      "All Basic Blog Package features",
      "Multiple author management",
      "Post scheduling",
      "Custom post types",
      "Advanced SEO tools",
      "Social media integration",
      "Analytics dashboard"
    ]
  },
  {
    name: "Real Estate Website Package",
    category: "Content Management",
    price: 12000,
    description: "Specialized platform for real estate agencies",
    features: [
      "Property listing management",
      "Advanced search and filter options",
      "Agent profiles",
      "Appointment scheduling",
      "Virtual tour integration"
    ]
  },
  // Community & Social
  {
    name: "Forum Package",
    category: "Community & Social",
    price: 7500,
    description: "Discussion and community platform",
    features: [
      "User registration and profiles",
      "Topic and post management",
      "Moderation tools",
      "Private messaging",
      "Reputation system"
    ]
  },
  {
    name: "Social Network Package",
    category: "Community & Social",
    price: 15000,
    description: "Custom social network platform",
    features: [
      "User profiles and connections",
      "Activity feeds",
      "Groups and communities",
      "Photo and video sharing",
      "Event management"
    ]
  },
  {
    name: "Wiki Package",
    category: "Community & Social",
    price: 6500,
    description: "Collaborative knowledge management system",
    features: [
      "Collaborative content creation",
      "Version history and rollback",
      "User contribution tracking",
      "Internal linking",
      "File attachment support"
    ]
  },
  // E-commerce
  {
    name: "Basic Online Store Package",
    category: "E-commerce",
    price: 9500,
    description: "Basic e-commerce solution",
    features: [
      "Product catalog",
      "Shopping cart",
      "Basic payment gateway integration",
      "Order management",
      "Customer accounts"
    ]
  },
  {
    name: "Advanced E-commerce Package",
    category: "E-commerce",
    price: 18000,
    description: "Complete e-commerce solution",
    features: [
      "All Basic Online Store Package features",
      "Multiple payment gateways",
      "Inventory management",
      "Discount and coupon system",
      "Product reviews and ratings",
      "Abandoned cart recovery"
    ]
  },
  {
    name: "Digital Downloads Store",
    category: "E-commerce",
    price: 12500,
    description: "Specialized platform for digital products",
    features: [
      "Digital product management",
      "Secure file delivery",
      "License key generation",
      "Subscription options"
    ]
  },
  {
    name: "Marketplace Package",
    category: "E-commerce",
    price: 25000,
    description: "Multi-vendor marketplace platform",
    features: [
      "Multi-vendor support",
      "Vendor dashboards",
      "Commission management",
      "Vendor ratings and reviews"
    ]
  },
  {
    name: "Auction Website Package",
    category: "E-commerce",
    price: 28000,
    description: "Online auction platform",
    features: [
      "Bidding system",
      "Time-based auctions",
      "User reputation system",
      "Escrow services"
    ]
  },
  // Business Management
  {
    name: "Customer Relationship Management (CRM) Package",
    category: "Business Management",
    price: 15000,
    description: "Comprehensive customer relationship management system",
    features: [
      "Contact management",
      "Lead tracking",
      "Sales pipeline",
      "Email integration",
      "Task management"
    ]
  },
  {
    name: "Enterprise Resource Planning (ERP) Package",
    category: "Business Management",
    price: 35000,
    description: "Complete business management system",
    features: [
      "Accounting and financial management",
      "Human resources management",
      "Inventory and supply chain management",
      "Project management",
      "Business intelligence and reporting"
    ]
  },
  {
    name: "Human Resources Management Package",
    category: "Business Management",
    price: 18000,
    description: "Specialized HR management system",
    features: [
      "Employee database",
      "Time and attendance tracking",
      "Leave management",
      "Performance evaluations",
      "Payroll integration"
    ]
  },
  {
    name: "Project Management Package",
    category: "Business Management",
    price: 12000,
    description: "Complete project management tool",
    features: [
      "Task and subtask management",
      "Gantt charts",
      "Time tracking",
      "File sharing and collaboration",
      "Reports and analysis"
    ]
  },
  {
    name: "Inventory Management Package",
    category: "Business Management",
    price: 14000,
    description: "Inventory control and management system",
    features: [
      "Stock tracking",
      "Purchase order management",
      "Supplier management",
      "Barcode scanning",
      "Low stock alerts"
    ]
  },
  // Customer Service
  {
    name: "Help Desk Package",
    category: "Customer Service", 
    price: 11000,
    description: "Professional customer support system",
    features: [
      "Ticket management system",
      "Knowledge base",
      "FAQ section", 
      "Customer portal",
      "SLA management"
    ]
  },
  {
    name: "Live Chat Package",
    category: "Customer Service",
    price: 7500,
    description: "Real-time chat solution for customer service",
    features: [
      "Real-time chat widget",
      "Chat routing and queuing",
      "Canned responses",
      "File sharing in chat",
      "Chat transcripts and history"
    ]
  },
  {
    name: "Customer Feedback and Survey Package",
    category: "Customer Service",
    price: 6000,
    description: "Customer survey and feedback system",
    features: [
      "Survey creation and management",
      "Multiple question types",
      "Data analysis and reporting",
      "CRM integration"
    ]
  },
  // Educational
  {
    name: "Learning Management System (LMS) Package",
    category: "Educational",
    price: 16000,
    description: "Complete online learning platform",
    features: [
      "Course creation and management",
      "Student enrollment and progress tracking",
      "Quiz and assignment tools",
      "Discussion forums",
      "Certificate management"
    ]
  },
  {
    name: "School Management System Package",
    category: "Educational",
    price: 22000,
    description: "Comprehensive school management system",
    features: [
      "Student information management",
      "Attendance tracking",
      "Gradebook and report cards",
      "Parent portal",
      "Schedule management"
    ]
  },
  {
    name: "Online Examination System Package",
    category: "Educational",
    price: 9500,
    description: "Specialized online assessment platform",
    features: [
      "Exam creation and scheduling",
      "Multiple question types",
      "Automated grading",
      "Results analysis and reporting",
      "Anti-cheating measures"
    ]
  },
  // Media Management
  {
    name: "Photo Gallery Package",
    category: "Media Management",
    price: 5500,
    description: "Professional image management system",
    features: [
      "Album organization",
      "Image upload and management",
      "Lightbox presentations and viewing",
      "Image tagging and search",
      "Social media sharing options"
    ]
  },
  {
    name: "Video Platform Package",
    category: "Media Management",
    price: 13500,
    description: "Complete video management platform",
    features: [
      "Video hosting and streaming",
      "Playlist management",
      "User channels",
      "Comments and ratings",
      "Monetization options"
    ]
  },
  {
    name: "Podcast Management Package",
    category: "Media Management",
    price: 8500,
    description: "Specialized podcast management system",
    features: [
      "Episode management",
      "RSS feed generation",
      "Player integration",
      "Subscription options",
      "Listener analytics and statistics"
    ]
  },
  {
    name: "Digital Asset Management Package",
    category: "Media Management",
    price: 11000,
    description: "Centralized digital asset management system",
    features: [
      "Centralized media library",
      "Metadata management",
      "Version control",
      "Access rights management",
      "Integration with other systems"
    ]
  },
  // Comunicación
  {
    name: "Email Management Package",
    category: "Communication",
    price: 1000,
    description: "Email setup and administration in Zoho/Google Workspace/Outlook",
    features: [
      "You pay your annual subscription",
      "We manage the service",
      "Custom domain usage",
      "Mobile email application",
      "Calendar synchronization",
      "Group calendars",
      "Contacts and groups"
    ]
  },
  {
    name: "Advanced Email Package",
    category: "Communication",
    price: 9500,
    description: "Private and customized email service",
    features: [
      "100 GB email storage",
      "Private mail server",
      "Complete data control",
      "Unlimited* email accounts",
      "Multiple custom domain usage",
      "Mobile email application"
    ]
  },
  {
    name: "Email Marketing Package",
    category: "Communication",
    price: 8500,
    description: "Professional email marketing system",
    features: [
      "Mailing list management",
      "Email template designer",
      "Campaign scheduling",
      "Open and click tracking",
      "A/B testing"
    ]
  },
  {
    name: "Newsletter System Package",
    category: "Communication",
    price: 5500,
    description: "Newsletter management system",
    features: [
      "Subscriber management",
      "Newsletter creation and scheduling",
      "Automated subscription process",
      "Analytics and reporting"
    ]
  },
  {
    name: "Internal Communication Package",
    category: "Communication",
    price: 9500,
    description: "Internal business communication platform",
    features: [
      "Company news and announcements",
      "Employee directory",
      "Document sharing",
      "Internal messaging system",
      "Event calendar"
    ]
  },
  // Specialized Solutions
  {
    name: "Appointment Booking Package",
    category: "Specialized Solutions",
    price: 7500,
    description: "Appointment scheduling and management system",
    features: [
      "Online scheduling system",
      "Calendar management",
      "Automated reminders",
      "Payment integration",
      "Staff management"
    ]
  },
  {
    name: "Event Management Package",
    category: "Specialized Solutions",
    price: 12500,
    description: "Complete event management platform",
    features: [
      "Event creation and ticket sales",
      "Attendee management",
      "Check-in system",
      "Sponsorship management",
      "Event analytics"
    ]
  },
  {
    name: "Membership Management Package",
    category: "Specialized Solutions",
    price: 9500,
    description: "Member and subscription management system",
    features: [
      "Member registration and profiles",
      "Subscription management",
      "Exclusive member content",
      "Renewal reminders",
      "Member directory"
    ]
  },
  {
    name: "Classified Ads Package",
    category: "Specialized Solutions",
    price: 11000,
    description: "Online classified ads platform",
    features: [
      "Ad publishing and management",
      "Category and location navigation",
      "User ratings and reviews",
      "Featured listings",
      "Messaging system"
    ]
  },
  {
    name: "Job Board Package",
    category: "Specialized Solutions",
    price: 13500,
    description: "Job portal and candidate management",
    features: [
      "Job posting management",
      "Resume database",
      "Candidate tracking",
      "Employer profiles",
      "Job alerts"
    ]
  },
  {
    name: "Restaurant Management Package",
    category: "Specialized Solutions",
    price: 14500,
    description: "Comprehensive restaurant management system",
    features: [
      "Menu management",
      "Table reservations",
      "Online ordering system",
      "Kitchen order management",
      "Customer feedback system"
    ]
  },
  {
    name: "Church Management Package",
    category: "Specialized Solutions",
    price: 8500,
    description: "Specialized church management system",
    features: [
      "Member database",
      "Event and service planning",
      "Donation tracking",
      "Volunteer management",
      "Small group organization"
    ]
  },
  {
    name: "Library Management System Package",
    category: "Specialized Solutions",
    price: 11500,
    description: "Complete library management system",
    features: [
      "Book catalog",
      "User management",
      "Loan/return system",
      "Fine calculation",
      "Online Public Access Catalog (OPAC)"
    ]
  },
  {
    name: "Medical Practice Management Package",
    category: "Specialized Solutions",
    price: 18500,
    description: "Specialized system for medical practices",
    features: [
      "Patient records management",
      "Appointment scheduling",
      "Insurance billing and claims",
      "Prescription management",
      "Telemedicine integration"
    ]
  },
  // Utilities & Tools
  {
    name: "SEO Tools Package",
    category: "Utilities & Tools",
    price: 7500,
    description: "Complete suite of SEO tools",
    features: [
      "Keyword research",
      "On-page SEO analysis",
      "Backlink monitoring",
      "Site audit tools",
      "Rank tracking"
    ]
  },
  {
    name: "Analytics and Reporting Package",
    category: "Utilities & Tools",
    price: 8500,
    description: "Advanced analytics and reporting system",
    features: [
      "Web traffic analysis",
      "User behavior tracking",
      "Conversion tracking",
      "Custom report generation",
      "Data visualization tools"
    ]
  },
  {
    name: "Form Builder Package",
    category: "Utilities & Tools",
    price: 5500,
    description: "Professional form creation tool",
    features: [
      "Drag and drop form creation",
      "Multiple field types",
      "Conditional logic",
      "Form analytics",
      "System integration"
    ]
  },
  {
    name: "Document Management Package",
    category: "Utilities & Tools",
    price: 9500,
    description: "Complete document management system",
    features: [
      "File storage and organization",
      "Version control",
      "Collaborative editing",
      "Access control and permissions",
      "Full-text search"
    ]
  },
  {
    name: "Backup and Security Package",
    category: "Utilities & Tools",
    price: 11500,
    description: "Comprehensive security and backup system",
    features: [
      "Automated backups",
      "Malware scanning",
      "Firewall protection",
      "Two-factor authentication",
      "SSL certificate management"
    ]
  }
];
