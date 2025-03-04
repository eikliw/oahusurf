import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'seo',
  title: 'SEO & Metadata',
  type: 'object',
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'Title for browser tabs and search results (50-60 characters ideal)',
      validation: rule => rule.max(70).warning('Longer titles get cut off in search results')
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      description: 'Summary shown in search results (150-160 characters ideal)',
      validation: rule => rule.max(160).warning('Longer descriptions get cut off in search results')
    }),
    defineField({
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      description: 'Main topics covered in this content (3-5 recommended)',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    }),
    defineField({
      name: 'indexing',
      title: 'Search Engine Indexing',
      type: 'object',
      description: 'Control how search engines handle this content',
      fields: [
        defineField({
          name: 'noindex',
          title: 'Hide from search engines',
          type: 'boolean',
          description: 'Enable to prevent this page from appearing in search results',
          initialValue: false
        }),
        defineField({
          name: 'nofollow',
          title: 'Don\'t follow links',
          type: 'boolean',
          description: 'Enable to tell search engines not to follow links on this page',
          initialValue: false
        })
      ],
      options: {
        collapsible: true,
        collapsed: false
      }
    }),
    defineField({
      name: 'socialImage',
      title: 'Social Sharing Image',
      type: 'image',
      description: 'Image used when sharing on social media (1200×630px recommended)',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'socialTitle',
      title: 'Social Media Title',
      type: 'string',
      description: 'Optional custom title for social shares (if different from meta title)'
    }),
    defineField({
      name: 'socialDescription',
      title: 'Social Media Description',
      type: 'text',
      rows: 3,
      description: 'Optional custom description for social shares (if different from meta description)'
    })
  ],
  options: {
    collapsible: true,
    collapsed: false
  }
}); 