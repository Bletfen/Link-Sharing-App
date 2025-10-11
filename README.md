# 🔗 Link Sharing App

A modern, responsive web application for managing and sharing your social media links in one place. Built with React, TypeScript, and Redux Toolkit.

![Link Sharing App](https://link-sharing-app-aqsm.vercel.app/)

## ✨ Features

- **Custom Link Management** - Add, edit, and remove platform links (GitHub, LinkedIn, YouTube, etc.)
- **Profile Customization** - Upload avatar and edit personal information
- **Live Preview** - Real-time mobile preview of your link page
- **Drag & Drop** - Reorder links with drag-and-drop functionality
- **Responsive Design** - Fully responsive across all devices
- **Platform Detection** - Automatic platform icon and color assignment
- **Form Validation** - Client-side validation for links and profile data

## 🚀 Tech Stack

- **Frontend Framework:** React 18 with TypeScript
- **State Management:** Redux Toolkit
- **Routing:** React Router DOM
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Build Tool:** Vite
- **Storage:** localStorage (client-side only)

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/Bletfen/Link-Sharing-App.git
cd Link-Sharing-App
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── MobilePreview.tsx
│   ├── ProtectedRoute.tsx
│   └── ...
├── pages/              # Page components
│   ├── CustomizeLinks.tsx
│   ├── ProfileSettings.tsx
│   ├── ProfilePreview.tsx
│   └── SharedProfile.tsx
├── store/              # Redux store configuration
│   ├── authSlice.ts
│   └── index.ts
├── assets/             # Images and icons
└── App.tsx             # Main application component
```

## 🔧 How It Works

### State Management

The application uses **Redux Toolkit** for centralized state management:

- `authSlice` - Manages user authentication and profile data
- User data includes: firstName, lastName, email, avatar, and links array

### Data Persistence

All user data is stored in **localStorage**:

- Data persists across browser sessions
- No backend database required for local development
- Key: `currentUser` stores the complete user object

### Authentication

Simple authentication system:

- Login/Sign up pages
- Protected routes using `ProtectedRoute` component
- Redirects to `/login` if no user data found in localStorage

### Link Management

Users can add multiple platform links:

- Supported platforms: GitHub, Frontend Mentor, Twitter, LinkedIn, YouTube, Facebook, Twitch, Dev.to, Codewars, CodePen, freeCodeCamp, GitLab, Hashnode, Stack Overflow
- Each link includes: platform name, URL, icon, and brand color
- Maximum of 4 links displayed in mobile preview

## 🎨 Features Breakdown

### 1. Customize Links (`/customize-links`)

- Add new platform links
- Edit existing links
- Remove links
- Drag and drop to reorder
- Real-time validation

### 2. Profile Settings (`/profile-settings`)

- Upload profile picture
- Edit first name and last name
- Update email address
- Save changes to localStorage

### 3. Profile Preview (`/profile-preview`)

- Desktop view of your link page
- Share button to copy profile link
- Matches mobile preview design

### 4. Mobile Preview (Sidebar)

- Live preview of link page on mobile device mockup
- Updates in real-time as you edit
- Shows up to 4 links
- Displays avatar, name, and email

## ⚠️ Known Limitations

### Link Sharing Not Functional

The **link sharing feature is currently not working** because:

- No backend API to store and retrieve user data
- localStorage is browser-specific (cannot be shared across devices)

**Planned for future implementation:**

- Backend API (Node.js/Express or similar)
- Database integration (MongoDB, PostgreSQL, or Firebase)
- Public profile pages accessible via shareable links
- User authentication with JWT tokens

### Current Workaround

For now, the app works perfectly for:

- Personal link management on a single device
- Testing and development purposes
- UI/UX demonstration

## 🔮 Future Enhancements

- [ ] Backend API integration
- [ ] Database for persistent storage
- [ ] Real user authentication
- [ ] Public shareable profile links
- [ ] Link analytics (click tracking)
- [ ] Custom themes and colors
- [ ] QR code generation
- [ ] More platform integrations
- [ ] Link scheduling
- [ ] Multiple link pages per user

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Bletfen**

- GitHub: [@Bletfen](https://github.com/Bletfen)

## 🙏 Acknowledgments

- Design inspiration from Frontend Mentor
- Icons by Lucide React
- Built with ❤️ using React and TypeScript

---

**Note:** This is a frontend-only application. Backend integration is required for full functionality of the link sharing feature.
