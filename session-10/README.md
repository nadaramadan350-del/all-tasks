# SkillBridge

## Project Idea Research & Planning

### Project Name

**SkillBridge - Peer Learning and Mentorship Platform**

### Project Description

SkillBridge connects learners who need practical help with mentors who can teach specific skills. Learners can discover mentors, book available sessions, upload supporting files, and leave reviews. Mentors can publish their skills and availability, manage bookings, and share learning resources. Administrators control users, categories, reports, and platform content.

The application solves the problem of finding trusted, organized, and affordable peer support in one place. Its main purpose is to manage the full learning-session journey: discovery, booking, communication, file sharing, completion, and feedback.

### Target Users

- Students and self-taught learners who need guidance.
- Mentors, tutors, and experienced professionals who offer sessions.
- Platform administrators who manage safety, quality, and system data.

## User Roles and Permissions

| Role              | Permissions                                                                                        | Main Actions                                                                                                                                              |
| ----------------- | -------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Learner**       | Read published mentors and sessions; manage own bookings and reviews; upload files to own bookings | Register, search, book, cancel, upload a question brief, attend a session, review a mentor, edit profile                                                  |
| **Mentor**        | Manage own profile, skills, availability, sessions, and resources; read bookings assigned to them  | Apply as mentor, upload verification documents, create/update/delete session offers, accept or decline bookings, attach resources, mark sessions complete |
| **Administrator** | Full access to users, mentor approvals, categories, sessions, bookings, reports, and moderation    | Approve or suspend mentors, manage categories, moderate reviews, resolve reports, view platform statistics, manage users                                  |
| **Guest**         | Read-only access to public pages                                                                   | Browse mentors, view session details, register or log in                                                                                                  |

### Authorization Rules

- Guests cannot access dashboards or create bookings.
- Learners can only edit their own profile, bookings, uploads, and reviews.
- Mentors can only edit resources, sessions, availability, and bookings assigned to them.
- Only administrators can approve mentors, assign roles, delete reported content, or access platform-wide analytics.
- A booking is visible only to its learner, its mentor, and administrators.
- Uploaded files are private by default and are served only to authorized booking participants.

## Main Features

### Authentication

- Register as a learner or apply as a mentor.
- Log in and log out with email and password.
- Password hashing and secure session/token handling.
- Email verification and forgot/reset password.
- Optional profile image during registration or later from the profile page.

### Authorization

- Role-based protected routes for learner, mentor, and administrator dashboards.
- Permission checks on both the frontend and backend.
- Mentor application review workflow: pending, approved, rejected, suspended.
- Ownership checks prevent users from editing another user’s records.

### CRUD Operations

#### Mentor Profiles and Skills

| Operation | Details                                                        | Who                  |
| --------- | -------------------------------------------------------------- | -------------------- |
| Create    | Create mentor profile, bio, rate, skills, and experience       | Approved mentor      |
| Read      | Browse mentor cards, filter by skill/rating/rate, view details | Everyone             |
| Update    | Change bio, rate, skills, photo, and teaching preferences      | Profile owner, admin |
| Delete    | Deactivate mentor profile                                      | Mentor, admin        |

#### Session Offers

| Operation | Details                                                      | Who          |
| --------- | ------------------------------------------------------------ | ------------ |
| Create    | Add title, description, duration, price, level, and category | Mentor       |
| Read      | View all published offers or one offer’s details             | Everyone     |
| Update    | Edit information, price, or publication status               | Owner, admin |
| Delete    | Remove an unpublished or discontinued offer                  | Owner, admin |

#### Bookings

| Operation | Details                                                  | Who                                 |
| --------- | -------------------------------------------------------- | ----------------------------------- |
| Create    | Select a session and available time slot                 | Learner                             |
| Read      | View own bookings, booking details, and status           | Learner, mentor, admin              |
| Update    | Accept, decline, reschedule, or mark completed           | Mentor; learner can request changes |
| Delete    | Cancel a pending booking according to cancellation rules | Learner, mentor, admin              |

#### Reviews and Reports

| Operation | Details                                                       | Who                                     |
| --------- | ------------------------------------------------------------- | --------------------------------------- |
| Create    | Submit a rating, comment, or report after a completed session | Learner                                 |
| Read      | View approved reviews and report details                      | Everyone for reviews; admin for reports |
| Update    | Edit a review within 24 hours; update report status           | Review author; admin                    |
| Delete    | Remove abusive review or closed report                        | Admin                                   |

#### Categories and Resources

- Administrators can create, read, update, and delete skill categories.
- Mentors can create, read, update, and delete resources attached to their own sessions.
- Learners can read resources shared with their confirmed bookings.

## Image and File Uploads

### Profile Image

- Allowed types: JPG, JPEG, PNG, WEBP.
- Maximum size: 5 MB.
- Uploaded by: learners and mentors; administrators can replace or remove it.
- Validation: MIME type, file extension, dimensions, and generated server-side filename.

### Mentor Verification Documents

- Allowed types: PDF, JPG, JPEG, PNG.
- Maximum size: 10 MB per file; maximum three files per application.
- Uploaded by: mentor applicants.
- Visibility: private; only the applicant and administrators can access them.
- Examples: certificate, portfolio document, or identity evidence.

### Session Resources

- Allowed types: PDF, DOCX, PPTX, XLSX, ZIP.
- Maximum size: 20 MB per file.
- Uploaded by: the mentor who owns the session.
- Visibility: the mentor, booked learners, and administrators.

### Learner Question Brief

- Allowed types: PDF, DOCX, JPG, PNG.
- Maximum size: 10 MB per file.
- Uploaded by: the learner when creating or updating a booking request.
- Visibility: the learner, assigned mentor, and administrators.

## Suggested Database Entities

`users`, `roles`, `mentor_profiles`, `skills`, `categories`, `mentor_skills`, `session_offers`, `availability_slots`, `bookings`, `reviews`, `reports`, `resources`, `uploads`, `notifications`, and `audit_logs`.

Important relationships:

- One user has one role and may have one mentor profile.
- A mentor owns many session offers and availability slots.
- A learner creates many bookings; each booking belongs to one session offer.
- A completed booking can have one review.
- Upload records store the owner, related entity, storage path, original name, MIME type, and size.

## Main Pages and UI Screens

### Public Pages

1. **Landing/Home** - navigation, search bar, popular skills, featured mentors, and calls to browse or register.
2. **Mentor Directory** - search, category/rating/price filters, sort control, and mentor cards.
3. **Mentor Details** - profile image, bio, skills, rating, session offers, availability, and book button.
4. **Session Details** - title, outcomes, duration, price, resources preview, mentor summary, and available slots.
5. **Login** - email, password, remember-me checkbox, login button, forgot-password link, and register link.
6. **Register** - name, email, password, role choice, profile image upload, validation messages, and terms checkbox.

### Learner Screens

1. **Learner Dashboard** - upcoming booking, pending requests, saved mentors, and recent activity.
2. **My Bookings** - table/list with filters for pending, confirmed, completed, and cancelled.
3. **Booking Details** - mentor, session, date/time, status timeline, private files, cancel/reschedule actions, and review form.
4. **Profile Settings** - personal information, profile image, password change, and notification preferences.

### Mentor Screens

1. **Mentor Dashboard** - booking pipeline, earnings summary, upcoming sessions, and profile completeness.
2. **My Sessions** - cards/table with create, edit, publish/unpublish, and delete actions.
3. **Session Form** - title, category, level, description, duration, price, cover image, and resources upload.
4. **Availability Calendar** - add, edit, and delete available time slots.
5. **Booking Requests** - request details, learner brief download, accept/decline/reschedule buttons, and status filter.

### Administrator Screens

1. **Admin Dashboard** - user count, active mentors, bookings, revenue, pending approvals, and report alerts.
2. **User Management** - searchable table with role, status, verification state, suspend, restore, and delete actions.
3. **Mentor Approvals** - document preview, application details, approve/reject buttons, and rejection reason.
4. **Content Management** - categories, session moderation, reviews, and reported content.
5. **Audit and Reports** - filters by date/type/status and an activity log for sensitive actions.

### Shared UI Components

- Responsive top navigation and role-aware sidebar.
- Search input, filter chips, dropdowns, pagination, breadcrumbs, and status badges.
- Cards for mentors and sessions; tables for management-heavy admin views.
- Confirmation modal for destructive actions.
- Toast notifications for successful saves, uploads, and errors.
- Empty, loading, validation, unauthorized, and not-found states.

## UI Design Link

Open the local clickable UI concept: [SkillBridge UI Design](ui-design.html)

This prototype demonstrates the public navigation, mentor directory, learner dashboard, booking card, and responsive visual direction. It can be recreated in Figma later as the high-fidelity submission design.

## Recommended Technology Plan

- **Frontend:** React with responsive CSS.
- **Backend:** Node.js, Express, and REST API.
- **Database:** PostgreSQL with an ORM such as Prisma or Sequelize.
- **Authentication:** HTTP-only cookie session or short-lived access token with refresh token.
- **File storage:** Local storage for development and an object-storage service for production.
- **Validation:** Shared request validation, server-side upload checks, and role middleware.

## Example Acceptance Criteria

- A new learner can register, log in, find a mentor, and create a booking.
- A mentor can submit verification files and cannot publish sessions until approved.
- A mentor can manage only their own session offers and availability.
- An administrator can approve a mentor, manage categories, and suspend a user.
- Unauthorized users receive a protected-route response and cannot access private files.
- A completed booking allows exactly one learner review.
- Invalid file types and files larger than the configured limit are rejected with a clear message.
