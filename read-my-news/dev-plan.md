# Project Header

Project: <Project Name>
Description: <short description>
Stack: Vite, React, React Router, Firebase (Auth, Firestore)
Owner: <name> | Start date: YYYY-MM-DD

# Requirements Templeate

### Users & Personas

- Persona A: ...
- Persona B: ...

### User stories (must-have)

1. As an unauthenticated user, I can view public pages (Home, About).
2. As a user, I can sign up and log in with email/password and Google.
3. As an authenticated user, I can see Dashboard (uses MainLayout).
4. As an admin, I can access Admin area (AdminLayout).

### Acceptance criteria (is a set of conditions, that should accepted as complete and correct)

- Login returns user object with uid and email.
- Dashboard loads within 1s (local dev sim).
- Forms show inline validation and server errors.

# Design & Theme

### Layouts

- For example:
- MainLayout: Header, Sidebar (desktop), Footer
- AuthLayout: centered card, simple header
- AdminLayout: Admin sidebar, breadcrumb

### Theme tokens

- color-primary: #0b5fff
- color-bg: #ffffff
- spacing-1: 4px, spacing-2: 8px, spacing-3: 16px

### Component inventory

- Atoms: Button, Icon, TextInput, Avatar
- Molecules: FormRow, Card, Modal
- Organisms: Navbar, Sidebar, PageHeader

# Routes & pages

## Routes

| Path       | Page Component | Layout      | Auth Required    |
| ---------- | -------------- | ----------- | ---------------- |
| /          | Home           | MainLayout  | No               |
| /login     | Login          | AuthLayout  | No               |
| /register  | Register       | AuthLayout  | No               |
| /dashboard | Dashboard      | MainLayout  | Yes              |
| /admin/\*  | Admin pages    | AdminLayout | Yes (role=admin) |
