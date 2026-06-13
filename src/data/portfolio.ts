// Portfolio gallery + planbooks — built from the real renders and planbook boards.

export interface Project {
  src: string;
  alt: string;
  title: string;
  meta: string;
  category: 'Residential' | 'Commercial' | 'Renovations' | 'Built';
}

export const projectCategories = ['All', 'Residential', 'Commercial', 'Renovations', 'Built'] as const;

export const projects: Project[] = [
  { src: '/images/projects/washington-588.jpg', alt: 'Rendering of a four-story 20-unit apartment building with ground-floor retail', title: '588 Washington Avenue', meta: '20-Unit Apartment & Retail · Belleville, NJ', category: 'Commercial' },
  { src: '/images/planbooks/dimarco.jpg', alt: 'Presentation board for the DiMarco residence with night render and floor plans', title: 'DiMarco Residence', meta: 'New Home · 5 Bed · Hasbrouck Heights, NJ', category: 'Residential' },
  { src: '/images/planbooks/rueda-house.jpg', alt: 'Presentation board for the Rueda residence', title: 'Rueda Residence', meta: 'New Home · 3 Bed', category: 'Residential' },
  { src: '/images/planbooks/kang-house.jpg', alt: 'Presentation board for the Kang residence', title: 'Kang Residence', meta: 'New Home · 4 Bed', category: 'Residential' },
  { src: '/images/planbooks/gramaglia.jpg', alt: 'Presentation board for the Gramaglia residence', title: 'Gramaglia Residence', meta: 'New Home · 4 Bed', category: 'Residential' },
  { src: '/images/planbooks/dscirica.jpg', alt: 'Presentation board for the D’Scirica residence', title: 'D’Scirica Residence', meta: 'New Home · 4 Bed', category: 'Residential' },
  { src: '/images/planbooks/laneve.jpg', alt: 'Presentation board for the LaNeve residence', title: 'LaNeve Residence', meta: 'New Home · 5 Bed', category: 'Residential' },
  { src: '/images/planbooks/716-3rd-ave.jpg', alt: 'Presentation board for 716 3rd Avenue', title: '716 3rd Avenue', meta: 'New Home · 5 Bed', category: 'Residential' },
  { src: '/images/planbooks/dallara.jpg', alt: 'Presentation board for the Dallara residence', title: 'Dallara Residence', meta: 'New Home · 5 Bed', category: 'Residential' },
  { src: '/images/planbooks/trinidad.jpg', alt: 'Presentation board for the Trinidad residence', title: 'Trinidad Residence', meta: 'New Home · 5 Bed', category: 'Residential' },
  { src: '/images/planbooks/patel.jpg', alt: 'Presentation board for the Patel residence', title: 'Patel Residence', meta: 'New Home · 5 Bed', category: 'Residential' },
  { src: '/images/planbooks/quinones.jpg', alt: 'Presentation board for the Quinones residence', title: 'Quinones Residence', meta: 'New Home · 3 Bed', category: 'Residential' },
  { src: '/images/projects/pb1.jpg', alt: 'Collage of completed MAS Architect homes', title: 'Completed Homes', meta: 'Selected Built Work', category: 'Built' },
  { src: '/images/projects/pb2.jpg', alt: 'Collage of completed MAS Architect homes', title: 'Completed Homes', meta: 'Selected Built Work', category: 'Built' },
  { src: '/images/projects/pb3.jpg', alt: 'Collage of completed MAS Architect homes', title: 'Completed Homes', meta: 'Selected Built Work', category: 'Built' },
  { src: '/images/projects/render-01.jpg', alt: 'Interiors and before-and-after renovation work', title: 'Interiors & Renovations', meta: 'Selected Work', category: 'Renovations' },
  { src: '/images/projects/render-03.jpg', alt: 'Renovation and addition work', title: 'Renovations & Additions', meta: 'Selected Work', category: 'Renovations' },
  { src: '/images/projects/render-05.jpg', alt: 'Renovation and addition work', title: 'Renovations & Additions', meta: 'Selected Work', category: 'Renovations' },
];

export interface PlanbookImage {
  src: string;
  alt: string;
  title: string;
}

export interface PlanbookCategory {
  slug: string;
  category: string;
  tagline: string;
  images: PlanbookImage[];
}

export const planbooks: PlanbookCategory[] = [
  {
    slug: '3-bedroom',
    category: '3 Bedroom',
    tagline: 'Stylish, efficient 3-bedroom designs that maximize space, comfort, and modern living.',
    images: [
      { src: '/images/planbooks/rueda-house.jpg', alt: 'Rueda house planbook board', title: 'Rueda House' },
      { src: '/images/planbooks/quinones.jpg', alt: 'Quinones planbook board', title: 'Quinones' },
    ],
  },
  {
    slug: '4-bedroom',
    category: '4 Bedroom',
    tagline: 'Stylish, efficient 4-bedroom designs that maximize space, comfort, and modern living.',
    images: [
      { src: '/images/planbooks/4bed.jpg', alt: 'Four-bedroom planbook board', title: 'Four-Bedroom Plan' },
      { src: '/images/planbooks/dscirica.jpg', alt: 'D’Scirica house planbook board', title: 'D’Scirica House' },
      { src: '/images/planbooks/kang-house.jpg', alt: 'Kang house planbook board', title: 'Kang House' },
      { src: '/images/planbooks/gramaglia.jpg', alt: 'Gramaglia house planbook board', title: 'Gramaglia House' },
    ],
  },
  {
    slug: '5-bedroom',
    category: '5 Bedroom',
    tagline: 'Stylish, efficient 5-bedroom designs that maximize space, comfort, and modern living.',
    images: [
      { src: '/images/planbooks/dimarco.jpg', alt: 'DiMarco planbook board', title: 'DiMarco' },
      { src: '/images/planbooks/laneve.jpg', alt: 'LaNeve planbook board', title: 'LaNeve' },
      { src: '/images/planbooks/mikes-house.jpg', alt: 'Private residence planbook board', title: 'Private Residence' },
      { src: '/images/planbooks/716-3rd-ave.jpg', alt: '716 3rd Avenue planbook board', title: '716 3rd Avenue' },
      { src: '/images/planbooks/dallara.jpg', alt: 'Dallara planbook board', title: 'Dallara' },
      { src: '/images/planbooks/trinidad.jpg', alt: 'Trinidad planbook board', title: 'Trinidad' },
      { src: '/images/planbooks/patel.jpg', alt: 'Patel planbook board', title: 'Patel' },
    ],
  },
];

export const planbookSteps = [
  { title: 'Site Analysis', body: 'Our team analyzes your selected site to verify the zoning laws, topography, and limitations we need to design for.' },
  { title: 'Design', body: 'Our architectural staff designs a custom home to meet your needs, or you can choose from pre-designed homes that can be altered to suit your lifestyle, budget, and style.' },
  { title: 'Imagery', body: 'A 3D image of your design can be generated so you fully understand your new home and can make decisions on color, materials, and massing.' },
  { title: 'Budget', body: 'Our construction office meets with you to discuss your budget and ensure the cost is within your expected means.' },
  { title: 'Construction Documents', body: 'All the documents needed for the construction of your new home are completed by our engineers, architects, and modular experts.' },
  { title: 'Permits', body: 'Our construction office handles all the site, building, and utility permits required for the construction of your home.' },
];
