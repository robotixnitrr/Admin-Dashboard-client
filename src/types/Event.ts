// Admin-Dashboard-client/src/types/Event.ts
export interface Event {
    _id: string; // Unique identifier for the event
    title: string; // Title of the event
    date: string; // Date of the event (ISO string format)
    location: string; // Location of the event
    imageUrl: string; // URL of the image
    description: string; // Description of the event
    createdAt: string; // Timestamp of when the event was created
    updatedAt: string; // Timestamp of when the event was last updated
}