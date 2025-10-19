// Placeholder content — replace with your own
export const PROJECTS = [
  {
    slug: 'main-feature',
    title: 'Main Feature Project',
    subtitle: 'Full-width hero card',
    cover: { url: 'https://res.cloudinary.com/dzc77rfds/image/upload/v1760842547/Magazine_04_k3r1yh.jpg', alt: 'Magazine cover design' },
    aspectRatio: '16/9',
    images: [
      { url: 'https://res.cloudinary.com/dzc77rfds/image/upload/v1760842547/Magazine_04_k3r1yh.jpg', alt: 'Magazine cover design' },
      { url: 'https://res.cloudinary.com/dzc77rfds/image/upload/v1760842583/Magazine_Cover_m9twcy.jpg', alt: 'Magazine cover', showCaption: false },
      { url: 'https://res.cloudinary.com/dzc77rfds/image/upload/v1760842578/Magazine_30_dhz6es.jpg', alt: 'Magazine page 30', layout: { colSpan: 2 } },
      { url: 'https://res.cloudinary.com/dzc77rfds/image/upload/v1760842576/Magazine_29_opgp5z.jpg', alt: 'Magazine page 29', layout: { colSpan: 2 } },
      { url: 'https://res.cloudinary.com/dzc77rfds/image/upload/v1760842574/Magazine_27_ybpva3.jpg', alt: 'Magazine page 27' },
      { url: 'https://res.cloudinary.com/dzc77rfds/image/upload/v1760842575/Magazine_28_mohd5u.jpg', alt: 'Magazine page 28'},
      { url: 'https://res.cloudinary.com/dzc77rfds/image/upload/v1760842573/Magazine_26_pumyvu.jpg', alt: 'Magazine page 26' }
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
