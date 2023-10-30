export default {
  name: 'shop',
  type: 'document',
  title: 'Shop',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true, // Allows for specifying a focal point in the image
      },
      validation: (Rule) => Rule.required(),
    },
  ],
}
