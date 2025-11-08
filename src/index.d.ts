interface Project {
  id: string; // navigation
  title: string;
  date: string;
  cover: string;
  tags: string[];
  summary: string;
  location: {  // for plotting on graph
    technical: number;
    creative: number;
  }
}

interface Link {
  href: string;
  text: string;
}
