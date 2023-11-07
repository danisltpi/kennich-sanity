export default {
  name: 'magazine',
  type: 'document',
  title: 'Magazine',
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
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'author',
      type: 'string',
      title: 'Author',
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
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
    {
      name: 'imageCreator',
      type: 'string',
      title: 'Image Creator',
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
      description: 'z.B. Interview, Kollumne, Fotostrecke, Essay, Porträt',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          fields: [
            {
              name: 'creator',
              type: 'string',
              title: 'Creator',
            },
          ],
        },
      ],
    },
  ],
  orderings: [
    {
      title: 'Published At, New',
      name: 'publishedAtDesc',
      by: [{field: 'publishedAt', direction: 'desc'}],
    },
    {
      title: 'Published At, Old',
      name: 'publishedAtAsc',
      by: [{field: 'publishedAt', direction: 'asc'}],
    },
  ],
}
