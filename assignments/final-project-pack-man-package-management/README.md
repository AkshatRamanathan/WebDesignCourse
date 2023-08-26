# Pack-Man: Package Management

[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/Rx1afNgR)

<img height="140" width="180" alt="logo" src="assets/logo.jpg" />

An application for users to create shipments, track their packages.
In this applications the users have a dashboard to login into where they can create and add details of their packages, based on which get quotations for the shipment they want to create. The price is generated based on the dimensions of the package and the distance to destination. The customers can also manage and track their package once they create the shipment.
The application also provides an Admin dashboard where the admins can change the status of the shipments and manage the package details (request foer delivery, cancel, generate tracking ID, etc.)

## Types of Services Available

- Ground: Shipment by Road - more feasable option
- Express: Shipment by Air - expensive but faster option

## Object Model

- User
  - userName: String
  - email: String
  - address: String
  - password: SHA256(String)
  - userType: String: `CUSTOMER`, `ADMIN`
- Shipment
  - package: Package
  - cost: float
  - duration: float
  - trackingId: UUID
  - status: String :`CREATED`, `PICKED_UP`, `IN_TRANSIT`, `CANCELLED, DELIVERED`
  - serviceType: String: `GROUND`, `EXPRESS`
- Package
  - from: User
  - toName: String
  - toAddress: String
  - dimension: object
    - length: float
    - breadth: float
    - height: float
  - packageType: String: `DOCUMENT`, `DAIRY_GOODS`, `PERSONAL_ITEMS`, `BOX`, `ENVELOPE`, `FOOD_ITEMS`
- Dashboard
  - type: String: `AdminDashboard`, `CustomerDashboard`
- ShipmentRepository
  - shipment `GET`
- ShipmentFactory
  - Shipment, Package `CRUD`
- UserService
  - shipment `GET`, `POST`
  - quotation `GET`
  - tracking: `GET`

### Domain Design Object Model Diagram

![Object Model image](./assets/ObjectModel.jpg){ width=50% }

## Rest API Resources Identified (at present)

- User Management
  - /user
    - `PUT`: User profile updation
    - `POST`: User Registration
  - /shipment/:id
    - `PUT`:  Update Shipment information
    - `DELETE`: Delete Shipment
    - `GET`: Get Shipment By TrackingId
  - /shipment
    - `GET`: Get Shipment Quotation
    - `POST`: Create a Shipment
  - /login
    - `POST`: Login as a user
  - /packages
    - `GET`: Get all Packages
  - /shipments
    - `GET`: Get all Shipments

## Feature based User Stories

- Admin Access Milestone:
  - As a Admin, I should be able to login into Admins dashboard
  - As a Admin, I should be able to update the package details
  - As a Admin, I should be able to cancel a package
  - As a Admin, I should be able to create a request for package delivery
- Customer Services Milestone:
  - As a Customer, I should be able to login
  - As a Customer, I should be able to request for a package delivery
  - As a Customer, I should able to get amount quotation for a package
  - As a Customer, should be able to track my packages
  - As a Customer, I should be able to update my profile information
  - As a Customer, I should  be able to cancel my package
- Package Specific Milestone:
  - As a Customer/ Admin I should be able to generate unique tracking id when creating a order for package delivery
- Remaining user stories/tasks/issues can be seen in issues tab and [Project Kanban Board](https://github.com/orgs/neu-mis-info-6150-summer-2023/projects/1/views/1) linked with this repo

![User Stories image](assets/userStories.jpg)

### Watch the Demo video

[![Watch the video](./frontend-application/pac-man/src/assets/img4.jpeg)](./demo-final.mp4)

### Presentation link

[Project Presentation](./assets/Pack-man.pdf)

### Technical requirements matched

- Basic create, read, update, and delete (CRUD) operations
- Multiple UI Routes
- Internationalization in UI
- PWA
- UI Component Design (Small components, Services, Models)
- UI Code Documentation
- REST APIs using Expressjs and Mongo
- Restful API Design
- REST APIs implemented using Domain Driven Design
- Backend Code Documentation
- Complexity of Features
- UX Design
<!-- Redux State Management -->
<!-- Additional Features -->
