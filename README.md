# Waymark

Waymark is an accessible tourism and discovery application, initially focused on Sydney.

The main purpose is to help users:

- Discover tourist attractions and other interesting places.
- Understand accessibility before visiting.
- Filter places according to accessibility needs.
- View accessibility information such as wheelchair access, lifts, accessible toilets, stairs, and other relevant features.
- See when accessibility information was last verified.
- Contribute accessibility updates and reports.
- Eventually see accessibility information related to getting to a destination.

## Live application

- Frontend: https://waymark-kappa.vercel.app
- Backend API: https://waymark-backend-yoem.onrender.com

Waymark currently focuses on **Sydney, Australia**. Search and journey examples should use places in Sydney rather than cities in Brazil.

## Testing guide for reviewers

If you're reviewing Waymark from outside Australia, you can test it remotely in your browser. You do **not** need to be physically in Sydney.

### 1. Explore places (no account required)

1. Open the [Waymark website](https://waymark-kappa.vercel.app).
2. On the Home page, look for **Featured places in Sydney** or click **Explore**.
3. Try searching for a Sydney destination, such as **Sydney Opera House**, **Bondi Beach**, or **Taronga Zoo**.
4. Open a place to review its details and available accessibility information.

Some accessibility fields may show **Unknown** when data has not been confirmed. This does not mean the venue is inaccessible.

### 2. Test an accessible public transport journey (account required)

1. Create an account using **Sign up**, then **Sign in**.
2. Open the journey-planning feature (or select **Plan accessible journey** from a place).
3. Enter a starting location and a destination in Sydney.
4. Submit the journey search and review the route options and accessibility information returned.

**Suggested Sydney routes to try:**

| From (origin) | To (destination) |
| --- | --- |
| Green Square Station | Sydney Opera House |
| Green Square Station | Taronga Zoo |

Use the English place names as written above. The journey feature relies on Transport for NSW (TfNSW) data, so available routes, service details, and accessibility information may vary.

### 3. What to look for

- Place descriptions and reported accessibility features.
- Accessibility indicators such as **Yes**, **No**, or **Unknown** where available.
- Journey legs, transport modes, travel time, interchanges, and reported accessibility information.
- Responsive layout: try opening the site on a phone or resizing the browser window.

### Current MVP scope and limitations

Waymark is a work-in-progress MVP (minimum viable product). It focuses on Sydney, not worldwide travel. The **Map**, **Community**, and **Add a place** experiences are not yet fully implemented. Accessibility information is informational and may be incomplete; do not treat an **Unknown** result as confirmation of access or lack of access. For a real trip, verify critical accessibility needs with the transport operator and venue.
