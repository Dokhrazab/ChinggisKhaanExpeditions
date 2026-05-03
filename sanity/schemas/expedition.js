// /sanity/schemas/expedition.js
export default {
  name: 'expedition',
  title: 'Expedition',
  type: 'document',
  fields: [
    { name: 'title', title: 'Tour Title', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'id', title: 'Internal ID', type: 'string' },
    { name: 'price', title: 'Base Price ($)', type: 'number' },
    { name: 'duration', title: 'Duration (e.g. 6 Days)', type: 'string' },
    { name: 'heroImage', title: 'Hero Image', type: 'image' },
    { name: 'difficulty', title: 'Difficulty', type: 'string', options: { list: ['Easy', 'Moderate', 'Difficult'] } },
    { name: 'maxGroupSize', title: 'Max Group Size', type: 'string' },
    {
      name: 'waypoints',
      title: 'Map Waypoints',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'name', type: 'string' },
          { name: 'lat', type: 'number' },
          { name: 'lng', type: 'number' },
          { name: 'desc', type: 'text' }
        ]
      }]
    },
    {
      name: 'itinerary',
      title: 'Day-by-Day Itinerary',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'day', type: 'number' },
          { name: 'title', type: 'string' },
          { name: 'description', type: 'text' }
        ]
      }]
    }
  ]
}
