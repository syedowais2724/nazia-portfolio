export interface ProjectStat { value: string; label: string }
export interface Project {
  id: number; slug: string; title: string; type: string; role: string; tech: string[];
  description: string; overview: string; architecture: string; implementation: string;
  stats: ProjectStat[]; accent: string; myRole: string[]; images: string[];
  hoverImage: string; github: string; liveUrl: string;
}

const projects: Project[] = [
  {
    id: 1, slug: 'murshid-ai', title: 'Murshid AI', type: 'RAG-based Voice Assistant',
    role: 'Project development', tech: ['Python', 'RAG', 'Vector Search', 'STT / TTS'],
    description: 'A voice-enabled assistant that retrieves relevant information from a custom knowledge base before generating responses.',
    overview: 'Murshid AI combines voice interaction with document-grounded question answering. It retrieves relevant information from uploaded documents to provide context for the response.',
    architecture: 'Document ingestion, text processing, embedding generation, and semantic vector search form the retrieval pipeline. Speech-to-text and text-to-speech support voice-based interaction.',
    implementation: 'I built the knowledge-retrieval pipeline and integrated speech input and output so users can interact with the application through voice.',
    stats: [{ value: 'RAG', label: 'Document-grounded responses' }, { value: 'Voice', label: 'Speech input & output' }, { value: 'Search', label: 'Semantic retrieval' }],
    accent: '#A7B8F5',
    myRole: ['Built a voice-enabled assistant that retrieves information before generating responses.', 'Implemented ingestion, text processing, embeddings, and semantic vector search.', 'Integrated speech-to-text and text-to-speech pipelines.', 'Designed question answering around context from uploaded documents.'],
    images: ['/work/murshid.svg'], hoverImage: '/work/murshid.svg', github: '', liveUrl: '',
  },
  {
    id: 2, slug: 'busbuddy', title: 'BusBuddy', type: 'Public Transit Chatbot',
    role: 'Project development', tech: ['Python', 'Flask', 'NLTK', 'NLP'],
    description: 'A web-based chatbot for bus routes, transfer suggestions, and fare-related questions.',
    overview: 'BusBuddy helps users explore public bus travel through natural-language queries. It brings route planning, transfer suggestions, and fare-related query handling into a web-based interface.',
    architecture: 'A Flask application exposes chatbot functionality through a web interface. Python and NLTK process the user input, while route and transfer suggestion logic provides relevant travel options.',
    implementation: 'I developed the chatbot, used NLTK to interpret queries, and built the route and transfer suggestion logic around the user input.',
    stats: [{ value: 'NLP', label: 'Natural-language queries' }, { value: 'Routes', label: 'Bus & transfer suggestions' }, { value: 'Flask', label: 'Web-based interaction' }],
    accent: '#6EE7B7',
    myRole: ['Developed a Flask chatbot for bus route and fare-related queries.', 'Used NLTK to interpret natural-language input.', 'Built route and transfer suggestion logic.', 'Exposed the chatbot through an interactive web interface.'],
    images: ['/work/busbuddy.svg'], hoverImage: '/work/busbuddy.svg', github: '', liveUrl: '',
  },
  {
    id: 3, slug: 'mediflow', title: 'MediFlow', type: 'Doctor Appointment Booking System',
    role: 'Full-stack project development', tech: ['React.js', 'Flask', 'REST APIs', 'RBAC'],
    description: 'An appointment booking platform with separate Admin, Doctor, and Patient workflows.',
    overview: 'MediFlow is a full-stack appointment platform that gives administrators, doctors, and patients different responsibilities and access to the tools they need.',
    architecture: 'A React frontend connects to Flask REST APIs for appointment scheduling and management. Role-based access control restricts features and resources according to the authenticated user role.',
    implementation: 'I built appointment-management APIs, implemented RBAC, and created separate workflows for the admin, doctor, and patient interfaces.',
    stats: [{ value: '3 roles', label: 'Admin · Doctor · Patient' }, { value: 'RBAC', label: 'Role-specific permissions' }, { value: 'REST', label: 'Appointment APIs' }],
    accent: '#D9BB82',
    myRole: ['Developed a full-stack booking platform for three user roles.', 'Designed REST APIs for appointment scheduling and management.', 'Implemented role-based access to features and resources.', 'Built separate appointment workflows for admin, doctor, and patient interfaces.'],
    images: ['/work/mediflow.svg'], hoverImage: '/work/mediflow.svg', github: '', liveUrl: '',
  },
];
export function getAllProjects(): Project[] { return projects; }
export function getProjectBySlug(slug: string): Project | undefined { return projects.find(p => p.slug === slug); }
export function getAdjacentProjects(slug: string): { prev?: Project; next?: Project } {
  const i = projects.findIndex(p => p.slug === slug);
  return i < 0 ? {} : { prev: projects[(i - 1 + projects.length) % projects.length], next: projects[(i + 1) % projects.length] };
}
