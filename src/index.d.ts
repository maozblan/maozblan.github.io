interface ResumeBlock {
  title: string;
  sub1?: string;
  sub2: string;
  text: string[];
  list: boolean;
}

interface Project {
  title: string;
  year: number;
  icon: string;
  type: string;
  tags: string[];
  tagline: string;
  links: Link[];
}

interface Link {
  href: string;
  text: string;
}
