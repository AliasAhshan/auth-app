# 🚀 Authentication App — Full-Stack Next.js + MongoDB

A complete authentication system built with **Next.js (App Router)** and **MongoDB**, styled using **Tailwind CSS**, and integrated with **Mailtrap** for secure email workflows. The UI is smooth, responsive, and animation-friendly.

---

## Features

- User Signup & Login
- Email Verification (via Mailtrap)
- Forgot Password & Secure Reset
- Password Validation (min 8 characters, includes uppercase letter)
- Dark Mode Support
- Animated transitions and feedback
- Profile Page (styled template for future features)

---

## Pages

| Route             | Description                          |
| ----------------- | ------------------------------------ |
| `/`               | Home                                 |
| `/signup`         | User registration                    |
| `/login`          | User login                           |
| `/verifyemail`    | Email verification via token         |
| `/forgotpassword` | Request password reset link          |
| `/resetpassword`  | Set new password using reset token   |
| `/profile`        | Placeholder profile page (protected) |

---

## Email Workflow

- Email verification and password reset flows are handled using **Mailtrap**, which safely captures outbound emails in development.
- Token-based verification is used for secure one-time actions via URL.

---

## Tech Stack

- **Frontend**: Next.js (App Router), TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Axios, MongoDB
- **Authentication**: JWT-based authentication
- **Email Service**: Mailtrap (development only)

---

## Notes

- The **profile page** is styled but intentionally minimal — it's ready for expansion (e.g., avatar, settings, user data).
- Animations are handled using Tailwind’s `animate` classes with delays.
- All forms include real-time validation and UI feedback.
