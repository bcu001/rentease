# RentEase – Furniture & Appliance Rental Platform

> Detailed guide and project requirements for the RentEase – Furniture & Appliance Rental Platform.

---

## Context

Students and working professionals frequently relocate for education or jobs and prefer renting furniture and appliances instead of purchasing them due to high costs, maintenance issues, and relocation challenges.

This platform provides a monthly rental solution for essential furniture and appliances, offering flexibility, affordability, and convenience.

**References:** Unified Mentor · Rent Mojo

---

## Problem Statement

Current challenges faced by renters:

- High upfront cost of buying furniture/appliances
- Difficulty in transporting items during relocation
- Lack of flexible rental plans
- Limited local rental options
- Poor maintenance and support services

---

## Objectives

### Primary Objectives

- Provide affordable monthly rental options
- Offer flexible tenure plans
- Simplify furniture & appliance access for renters
- Improve urban living convenience

### Secondary Objectives

- Reduce unnecessary purchases
- Promote sustainable consumption
- Enable easy relocation support
- Create a scalable rental ecosystem

---

## Scope of Work

### In-Scope

- Web-based responsive platform
- Product catalog for furniture & appliances
- Monthly rental plans
- Delivery and pickup scheduling

### Out of Scope

- Native mobile applications
- Cross-border rentals
- Advanced AI-based pricing
- Second-hand resale marketplace

---

## Key Features & Functional Requirements

### User Features

- User registration & login
- Browse products by category:
  - Furniture (bed, sofa, table)
  - Appliances (fridge, washing machine, TV)
- View product details:
  - Rental price
  - Security deposit
  - Rental tenure options
- Add to cart & checkout
- Choose delivery date and location
- Manage active rentals
- Request maintenance support
- View rental history

### Admin / Vendor Features

- Add & manage product inventory
- Set rental pricing & tenure
- Manage delivery & pickup schedules
- Track product availability
- Handle maintenance requests
- Monitor returns and damages

### Admin Features

- Manage users and inventory
- Monitor orders and rentals
- Handle disputes & damage claims
- Generate reports and analytics
- Manage service areas

---

## Non-Functional Requirements

| Attribute    | Requirement                        |
|--------------|------------------------------------|
| Performance  | Page load time under 3 seconds     |
| Security     | Secure login and payment readiness |
| Reliability  | Accurate inventory tracking        |
| Usability    | Simple, mobile-first UI            |
| Scalability  | Multi-city expansion support       |

---

## Technology Stack (Suggested)

### Frontend

- HTML5, CSS3, JavaScript
- React.js / Next.js
- Bootstrap / Tailwind CSS

### Backend

- Node.js with Express.js
- REST APIs

### Database

- MongoDB / PostgreSQL

### Deployment

- AWS / Vercel / Netlify

---

## User Flow (High-Level)

1. User visits platform
2. Browses furniture/appliances
3. Selects rental plan
4. Schedules delivery
5. Uses product during tenure
6. Schedules return or extension

---

## Data Requirements

### Sample Product Data

| Field                  | Description                        |
|------------------------|------------------------------------|
| Product / Users        | Product name and associated users  |
| Category               | Furniture or Appliance             |
| Monthly Rent           | Rental cost per month              |
| Security Deposit       | Refundable deposit amount          |
| Rental Tenure Options  | Available tenure durations         |

### Sample Business Data

| Field            | Description                   |
|------------------|-------------------------------|
| Name             | Business name                 |
| Skill Type       | Type of service offered       |
| Services Offered | List of services              |
| Product List     | Available products            |
| Pricing          | Pricing structure             |

---

## Key Performance Indicators (KPIs)

- Number of active rentals
- Monthly recurring revenue (MRR)
- Product utilization rate
- Customer retention rate
- Maintenance request resolution time

---

## Assumptions & Constraints

### Assumptions

- Users prefer rentals over ownership
- Reliable delivery partners exist
- Inventory is locally stored

### Constraints

- Logistics and maintenance cost
- Product wear and tear
- Inventory availability limitations

---

## Deliverables

- Functional web application
- Admin dashboard
- PRD & technical documentation
- Deployment-ready build

---

## Expected Impact

- Affordable living solutions for urban users
- Reduced financial burden
- Sustainable product usage
- Improved rental experience

---

## Future Enhancements

- Mobile applications
- Subscription bundles
- Online payments & auto-renewals
- Smart appliance tracking
- Furniture customization options
