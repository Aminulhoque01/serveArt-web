import { createSlice } from "@reduxjs/toolkit";

export interface Service {
  id: string;
  title: string;
  description: string;
  price: number;
}

// Ekhon static data. Backend ready hole API theke ashbe.
const initialState: { items: Service[] } = {
  items: [
    { id: "1", title: "Web development", description: "Fast, secure websites and web apps built with Next.js and Node.js.", price: 800 },
    { id: "2", title: "Mobile apps", description: "Android and iOS apps from first sketch to store release.", price: 1500 },
    { id: "3", title: "UI/UX design", description: "Interfaces your customers understand on the first try.", price: 500 },
    { id: "4", title: "Digital marketing", description: "SEO, ads and social campaigns with monthly reporting.", price: 400 },
    { id: "5", title: "IT support", description: "Hosting, maintenance and on-call help for your team.", price: 250 },
  ],
};

const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {},
});

export default servicesSlice.reducer;