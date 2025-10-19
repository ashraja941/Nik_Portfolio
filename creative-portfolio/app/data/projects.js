// Placeholder content — replace with your own
export const PROJECTS = [
  {
    slug: 'main-feature',
    title: 'Main Feature Project',
    subtitle: 'Full-width hero card',
    cover: { url: 'https://images.unsplash.com/photo-1516237336009-76a2b42dc352', alt: 'Test image' },
    aspectRatio: '16/9',
    images: [
      { url: 'https://images.unsplash.com/photo-1517816428104-797678c7cf0d', alt: 'Hero variant A' },
      { url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee', alt: 'Hero variant B' },
      { url: 'https://images.unsplash.com/photo-1516237336009-76a2b42dc352', alt: 'Test image' }
    ]
  },
  {
    slug: 'small-one',
    title: 'Smaller Project One',
    subtitle: 'Placeholder subtitle',
    cover: { url: 'https://images.unsplash.com/photo-1526318472351-c75fcf070305', alt: 'Poster mockup placeholder' },
    aspectRatio: '4/3',
    images: [
      { url: 'https://images.unsplash.com/photo-1526318472351-c75fcf070305', alt: 'Variant A' },
      { url: 'https://images.unsplash.com/photo-1488900128323-21503983a07e', alt: 'Variant B' }
    ]
  },
  {
    slug: 'small-two',
    title: 'Smaller Project Two',
    subtitle: 'Placeholder subtitle',
    cover: { url: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8', alt: 'Minimal product placeholder' },
    aspectRatio: '4/3',
    images: [
      { url: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8', alt: 'Variant A' },
      { url: 'https://images.unsplash.com/photo-1503602642458-232111445657', alt: 'Variant B' }
    ]
  }
];

export const LAYOUT = {
  homeGrid: [
    { slug: 'main-feature', coverIndex: 0, span: { md: 2, lg: 2 } },
    { slug: 'small-one' },
    { slug: 'small-two' }
  ]
};
