import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom';
import {
  Typography,
  Button,
  Container,
  Box,
  Grid,
  Card,
  CardContent,
  CardActions,
  Stack,
  Divider,
  Avatar,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper
} from '@mui/material';

import Navbar from './components/Navbar';
import StorageIcon from '@mui/icons-material/Storage'; // Example icon for the left side
import PersonIcon from '@mui/icons-material/Person';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// Data structure for module-specific group members and content
const moduleData = {
  1: {
    title: "Computer Hardware",
    description: "Overview of computer systems, history, and basic components.",
    summary: `Computer hardware has transformed from room-sized mechanical machines into the invisible foundation of modern life. In the 1800s, **Charles Babbage** designed the Analytical Engine, the first blueprint for a general-purpose computer, while **Ada Lovelace** wrote the first computer program and imagined machines doing far more than calculations.
 
 The 1940s introduced electronic computing with massive systems like **ENIAC**, developed by **J. Presper Eckert** and **John Mauchly**. Soon after, **UNIVAC I** proved computers could solve real-world problems. The invention of the transistor by **John Bardeen**, **Walter Brattain**, and **William Shockley** made computers smaller, faster, and more reliable, enabling business systems like the **IBM 1401**. During this time, **Grace Hopper** helped create programming languages that made computing more accessible.
 
 The invention of the integrated circuit by **Jack Kilby** and **Robert Noyce** led to the **Intel 4004**, placing an entire CPU on one chip. Personal computers like the **Apple II** brought technology into homes, while the graphical user interface—popularized by **Steve Jobs** and **Bill Gates**—made computers easy for everyone to use.
 
 Today’s hardware features nanometer-scale processors, AI accelerators, high-speed DDR5 memory, NVMe solid-state storage, and powerful GPUs used for AI and scientific computing. As semiconductor manufacturing approaches physical limits, innovations like chiplets, 3D stacking, quantum computing, and neuromorphic design are shaping the future.
 
 From mechanical gears to quantum systems, computer hardware continues to shrink in size while expanding in power—driving innovation and connecting the modern world.`,
    pptUrl: "https://docs.google.com/presentation/d/1zeCFpYGr2kzUJbjRYIEyJRMrFL1R46iy/edit?usp=drive_web&ouid=116426902229173965274&rtpof=true",
    videoUrl: "https://youtu.be/iUtxbviPGv0?si=vAo0SabKKh1J3QKI",
    members: [
      { name: 'ACOSTA, GIRONE', role: 'Member' },
      { name: 'TABIGUE, JAY', role: 'Member' },
    ]
  },
  2: {
    title: "Number system",
    description: "Number systems, data formats, and how computers represent information.",
    summary: `Number systems form the hidden foundation of modern technology, evolving from simple tally marks carved by early humans to the complex digital languages that power today’s computers. Ancient civilizations developed structured numeral systems for trade and governance, but the major breakthrough came with the Hindu-Arabic base-10 system and the introduction of zero—shaping mathematics as we know it. 
 
 In modern computing, however, machines do not think in base-10. At the hardware level, computers rely on binary (base-2) because their transistors function as tiny switches that are either ON (1) or OFF (0). Every photo, message, and video is ultimately translated into long strings of 1s and 0s. Since binary is difficult for humans to read, hexadecimal (base-16) was introduced as a compact shorthand, commonly seen in memory addresses and web color codes. Octal (base-8), while less visible, remains important in systems like Linux and Unix, where it simplifies file permission settings. 
 
 Despite their importance, these systems present challenges. Humans are naturally comfortable with base-10, making binary and hexadecimal prone to fatigue and errors. Computers also face physical limits, such as integer overflow when numbers exceed storage capacity, and rounding errors when representing certain decimals in binary. 
 
 To address complexity, modern computing relies on abstraction—high-level programming languages and tools that hide low-level numerical operations. Looking ahead, quantum computing introduces a new paradigm: instead of binary bits, qubits can exist in multiple states simultaneously, potentially requiring entirely new ways of representing and processing numbers. 
 
 From ancient counting methods to quantum possibilities, number systems remain the essential language behind every digital interaction, continuously evolving alongside technology itself.`,
    pptUrl: "https://docs.google.com/presentation/d/14Z0heMUcYozgW8i3kNTLoBos1UgdLu31/edit",
    videoUrl: ["https://youtu.be/_tFV9jPoxtc"],
    members: [
      { name: 'BUMATAY,AXEL JILLIAN', role: 'Member' },
      { name: 'PENAVERDE, LEVI ASHER', role: 'Member' },
    ]
  },
  3: {
    title: "Data Formats",
    description: "Boolean algebra, logic gates, and digital circuit design.",
    summary: "Focuses on data formats including text (ASCII, Unicode), images, audio, and video representation. It also touches on Boolean algebra and logic gates as the foundation of digital circuits.",
    pptUrl: "",
    videoUrl: "",
    members: [
      { name: 'VILA, LORD CEDRIC', role: 'Member' },
      { name: 'ANTONIANO, RYAN RUSSELL', role: 'Member' },
    ]
  },
  4: {
    title: "Operating Systems",
    description: "CPU organization, instruction sets, and execution cycles.",
    summary: `Operating systems (OS) are core software platforms that manage computer hardware and provide the interface between users and devices. They control memory, processes, files, and input/output systems, ensuring that applications run efficiently. Early computers had no operating systems, but systems like GM-NAA I/O introduced batch processing in the 1950s. The 1960s brought multiprogramming and timesharing, while Unix later transformed OS design. Graphical user interfaces improved accessibility, and open-source platforms such as Linux expanded innovation. Today’s operating systems are mobile-first, cloud-integrated, and increasingly AI-enabled.
 
 Modern OS architectures include microkernels, hybrid kernels, containerization technologies like Docker and Kubernetes, and hardware-assisted security features. They power everything from smartphones and desktops to cloud data centers and IoT devices. However, they face ongoing challenges in security, scalability, multi-core processing, energy efficiency, and adapting to emerging technologies such as non-volatile memory and quantum computing.
 
 Looking ahead, operating systems are evolving into AI-driven, context-aware platforms with stronger zero-trust security and unified cross-device experiences. No longer just resource managers, future OS platforms aim to be intelligent, secure, energy-efficient, and seamlessly integrated into the digital ecosystem.`,
    pptUrl: "https://docs.google.com/presentation/d/1Rdrk_OgSqzeR1Og7zxvZf2HGkY3PfdPj/edit?slide=id.p1#slide=id.p1",
    videoUrl: "https://youtu.be/fT7Hbpp8P1k", //ELUMBA
    members: [
      { name: 'ELUMBA, HAZEL ANNE', role: 'Member' },
      { name: 'CORTEZ, DEANNUEL DREW', role: 'Member' },
    ]
  },
  5: {
    title: "Computing Platforms",
    description: "Hierarchy, caching, virtual memory, and storage technologies.",
    summary: `Computing platforms combine hardware (CPUs, devices, servers) and software (operating systems, applications, cloud services) to run applications and enable digital tasks. They power essential services like online banking, virtual meetings, e-learning, and social media, supporting industries such as healthcare, education, business, and entertainment.
 
 Early platforms (1940s–1960s) were large, expensive machines used mainly by governments and research institutions. The 1960s–70s introduced centralized mainframes and early operating systems. In the 1980s–90s, personal computers and graphical user interfaces made computing accessible to individuals and businesses, while the rise of the internet connected users worldwide.
 
 Today’s platforms include desktops, mobile devices, cloud and edge computing, embedded systems, AI/ML platforms, IoT networks, and high-performance computing. Despite rapid growth, challenges remain—especially in security, cost, performance limits, and energy efficiency—driving innovation toward smarter, more integrated, and sustainable systems.`,
    pptUrl: "https://docs.google.com/presentation/d/1jV-JheiwXcSP2x5FJqE6Evc6spAuKEsR/edit?usp=drive_web&ouid=116426902229173965274&rtpof=true",
    videoUrl: "",
    members: [
      { name: 'CASAY,DWAYNE', role: 'Member' },
      { name: 'MAGDAYO, ROSE ANNE', role: 'Member' },
    ]
  },
  6: {
    title: "Database Platforms",
    description: "I/O devices, interfaces, interrupts, and DMA.",
    summary: "Deep dive into database platforms, SQL vs NoSQL, and how data is stored, retrieved, and managed in modern applications.",
    pptUrl: "",
    videoUrl: "",
    members: [
      { name: 'ADORA, JOENABELLE', role: 'Member' },
      { name: 'TAPIT, CHRISTIAN EARL', role: 'Member' },
    ]
  },
  7: {
    title: "Storage Platforms",
    description: "Role of OS, process management, and scheduling algorithms.",
    summary: `Storage platforms have evolved from early punched cards and magnetic tapes to today’s intelligent, cloud-based systems. The journey began with mechanical and magnetic storage, including early hard disk drives like IBM’s RAMAC, followed by floppy disks and optical media that made data portable. The rise of flash memory and solid-state drives (SSDs) then transformed performance, delivering faster, more reliable storage solutions.
 
 Modern storage technologies include high-speed SSDs with NVMe, network-based systems such as SAN and NAS, object storage for unstructured data, and hybrid cloud environments that combine on-premises and cloud infrastructure. Cloud platforms like Amazon Web Services, Microsoft Azure, and Google Cloud provide scalable, on-demand storage services, while enterprise solutions from Dell EMC and NetApp support large-scale business operations.
 
 Today, storage platforms power AI and machine learning, big data analytics, IoT, edge computing, and cyber-resilient systems. Key trends shaping the future include AI-driven management, cost-optimized storage models, quantum-resistant security, and Storage-as-a-Service (STaaS). As data continues to grow exponentially, storage platforms are becoming more scalable, automated, secure, and integrated—forming the backbone of modern digital infrastructure.`,
    pptUrl: "",
    videoUrl: "https://youtu.be/tnZHh8hi02o",
    members: [
      { name: 'CATUERA, MELVIN', role: 'Member' },
      { name: 'BALUCAN, CASEY ALTHEA', role: 'Member' },
    ]
  },
  8: {
    title: "Application Platforms",
    description: "File organization, directories, and storage management.",
    summary: "Explores application platforms, middleware, and runtime environments. Discusses how applications are deployed and managed.",
    pptUrl: "",
    videoUrl: "",
    members: [
      { name: 'DUQUE, RAEDEN JAN', role: 'Member' },
      { name: 'Student D', role: 'Member' },
    ]
  },
  9: {
    title: "Web Platforms",
    description: "OSI model, TCP/IP, and basic networking concepts.",
    summary: "Focuses on web technologies, client-server architecture, HTTP/HTTPS, and modern web development frameworks.",
    pptUrl: "",
    videoUrl: "",
    members: [
      { name: 'MALLO, GLENN HENRY', role: 'Member' },
      { name: 'CRUZ, HANNA CLERDEE', role: 'Member' },
    ]
  },
  10: {
    title: "CMS",
    description: "Client-server models, cloud computing, and distributed databases.",
    summary: `The presentation explains that a Content Management System (CMS) is a software tool that allows individuals and organizations to create, manage, and publish digital content—especially websites—without requiring advanced coding skills. It separates content from design and code, making website management easier and more efficient.
 
 It also discusses the history of CMS, starting from the 1990s when websites were static and required manual HTML editing. As technology evolved, CMS platforms were developed to simplify content publishing. The rise of open-source systems made website creation more accessible to businesses and individuals. In recent years, modern architectures such as headless CMS have emerged, allowing content to be delivered across multiple platforms using APIs.
 
 The presentation then explains the core technologies behind CMS, including databases for storing content, server-side programming languages, frontend rendering systems, plugins, user interfaces, security features, and API integrations. These technologies make CMS flexible, scalable, and user-friendly.
 
 It also introduces the different types of CMS, such as Traditional, Headless, Decoupled, Cloud-Based, Open-Source, and Enterprise CMS. Each type serves different purposes depending on business needs, technical requirements, and skill levels.
 
 Finally, the presentation covers the applications of CMS, showing how it is used in website publishing, e-commerce, digital marketing, corporate portals, educational platforms, and multi-platform content distribution. This highlights the importance of CMS in modern digital communication and online business operations.`,
    pptUrl: "https://docs.google.com/presentation/d/1EKeBkwX7etZlKCzzlAlm4HeEYvkE1lkG/edit",
    videoUrl: "https://youtu.be/ljSIkEDCHOg",
    members: [
      { name: 'DANQUE, JOHN MICHAEL', role: 'Member' },
      { name: 'CIPRIANO, YHANSKIE ADRIEL', role: 'Member' },
    ]
  },
  11: {
    title: "Media Platforms",
    description: "Threats, vulnerabilities, cryptography, and security protocols.",
    summary: "Explores digital media platforms, streaming technologies, codecs, and content delivery networks (CDNs).",
    pptUrl: "https://docs.google.com/presentation/d/1aoTPcyhFRGVnIuvlCZAo15xoaqE8GZ-4/edit?rtpof=true",
    videoUrl: "https://youtu.be/HcGnzYbNLqc",
    members: [
      { name: 'BUENSUCESO, KATE DIANE ROSS', role: 'Member' },
      { name: 'DADIVAS, JOHN LOUIS', role: 'Member' },
    ]
  },
  12: {
    title: "Analytics",
    description: "Metrics, benchmarking, and system optimization techniques.",
    summary: "Introduction to data analytics platforms, big data technologies, and tools for business intelligence and data visualization.",
    pptUrl: "https://docs.google.com/presentation/d/1BxPHWWpocOyVfuRfAlGhJetT6BHgYlRs/edit?usp=drive_web&ouid=116426902229173965274&rtpof=true",
    videoUrl: "",
    members: [
      { name: 'BORJA, VINCENT', role: 'Member' },
      { name: 'ARNADO, ARISTHEA LYN', role: 'Member' },
    ]
  },
  13: {
    title: "Artificial Intelligence",
    description: "Multicore processors, GPU computing, and parallel algorithms.",
    summary: "Covers AI platforms, machine learning frameworks (TensorFlow, PyTorch), and the hardware acceleration required for AI workloads.",
    pptUrl: "https://docs.google.com/presentation/d/1DPQaglsdUszdvzeNH2nQXh5lEQE0_AhF/edit?usp=drive_web&ouid=116426902229173965274&rtpof=true",
    videoUrl: "https://youtu.be/-Ras8cjT_d4",
    members: [
      { name: 'LANDAS, DAVIMHER', role: 'Member' },
      { name: 'MONFORTE, ALLAN ROI', role: 'Member' },
    ]
  },
  14: {
    title: "Security",
    description: "Microcontrollers, real-time systems, and IoT applications.",
    summary: "Focuses on system security, firewalls, encryption, identity management, and best practices for securing platforms.",
    pptUrl: "",
    videoUrl: "",
    members: [
      { name: 'ILAGAN, SACHZIE SOFIA', role: 'Member' },
      { name: 'SACAY, MARIA ALYSSHA', role: 'Member' },
    ]
  },
  15: {
    title: "IoT",
    description: "AWS, Azure, Google Cloud, and virtualization technologies.",
    summary: "Internet of Things (IoT) platforms, protocols (MQTT, CoAP), and the ecosystem of connected devices.",
    pptUrl: "",
    videoUrl: "",
    members: [
      { name: 'BILLONED, EVEN LLOYD', role: 'Member' },
      { name: 'EGO, IANZAE RYAN', role: 'Member' },
      { name: 'YEBES, KIM JENSEN', role: 'Member' },
    ]
  },
  16: {
    title: "Mobile Apps Games Platform",
    description: "Quantum computing, blockchain, and future trends in systems.",
    summary: "Overview of mobile application development platforms (iOS, Android) and game development engines (Unity, Unreal).",
    pptUrl: "https://docs.google.com/presentation/d/1jJz8ABAKSdxbT2pnyKFOFjnnBpdnr7Kp/edit?slide=id.p1#slide=id.p1",
    videoUrl: ["https://youtu.be/3iRAR_7g7ts", "https://youtu.be/WGH259SYg_4?si=Un_03HdguRiExA7u"],
    members: [
      { name: 'LACEDA, JASON', role: 'Member' },
      { name: 'INOJALES, JENARD', role: 'Member' },
    ]
  },
};

// Custom Slider Component
const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <Box sx={{ position: 'relative', width: '100%', height: 400, overflow: 'hidden', borderRadius: 4, boxShadow: '0 8px 32px 0 rgba(23, 45, 19, 0.1)' }}>
      {images.map((img, index) => (
        <Box
          key={index}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: index === currentIndex ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out',
          }}
        >
          <img src={img} alt={`Slide ${index}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Box>
      ))}
      
      {/* Navigation Buttons */}
      <Button 
        onClick={goToPrev} 
        sx={{ position: 'absolute', top: '50%', left: 10, transform: 'translateY(-50%)', bgcolor: 'rgba(255,255,255,0.3)', backdropFilter: 'blur(5px)', color: '#172d13', minWidth: 'auto', p: 1, borderRadius: '50%', '&:hover': { bgcolor: 'rgba(255,255,255,0.5)' } }}
      >
        &#10094;
      </Button>
      <Button 
        onClick={goToNext} 
        sx={{ position: 'absolute', top: '50%', right: 10, transform: 'translateY(-50%)', bgcolor: 'rgba(255,255,255,0.3)', backdropFilter: 'blur(5px)', color: '#172d13', minWidth: 'auto', p: 1, borderRadius: '50%', '&:hover': { bgcolor: 'rgba(255,255,255,0.5)' } }}
      >
        &#10095;
      </Button>
    </Box>
  );
};

// ================= HOME PAGE =================
const HomePage = () => (
  <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh' }}>
    
    {/* HERO CONTAINER */}
    <Container maxWidth="lg">
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Card 
            className="glass-card"
            sx={{ 
              p: 6, 
              borderRadius: 4,
              maxWidth: '900px',
              width: '100%',
              textAlign: 'center',
              bgcolor: 'transparent',
              color: '#172d13'
            }}
          >
            <CardContent>
              <Typography
                component="h1"
                variant="h2"
                align="center"
                gutterBottom
                fontWeight="bold"
                sx={{ 
                  background: 'linear-gradient(45deg, #d76f30 30%, #6bb77b 90%)',
                  backgroundClip: 'text',
                  textFillColor: 'transparent',
                  mb: 3
                }}
              >
                Computer System and Platform Technology
              </Typography>

              <Typography
                variant="h6"
                align="center"
                sx={{ mb: 6, lineHeight: 1.8, color: '#2e4a28' }}
              >
                Focuses on how computer hardware and system software work together to
                support modern applications. This subject covers computer
                architecture, operating systems, system resources, and platform
                technologies that enable secure and scalable computing.
              </Typography>

              {/* SECONDARY CTA */}
              <Stack direction="row" spacing={3} justifyContent="center">
                <Button 
                  size="large" 
                  variant="contained" 
                  color="primary" 
                  component={Link} 
                  to="/topics"
                  sx={{ px: 5, py: 1.5, fontSize: '1.1rem', borderRadius: '30px', color: 'white' }}
                >
                  Get Started
                </Button>
              </Stack>
            </CardContent>
          </Card>
      </Box>
    </Container>

  </Box>
);

// ================= TOPICS PAGE =================
const TopicsPage = () => {
  return (
    <Box sx={{ flexGrow: 1, py: 8 }}>
      <Container maxWidth="xl">
        <Typography variant="h3" align="center" gutterBottom fontWeight="bold" sx={{ color: '#172d13', mb: 2 }}>
          Key Topics
        </Typography>
        <Typography variant="h6" align="center" sx={{ color: '#4a6b42', mb: 8, maxWidth: '700px', mx: 'auto' }}>
          Explore the core modules and learning areas designed to build your expertise in computer systems.
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {/* Row 1 */}
          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 3 }}>
            {Array.from({ length: 8 }, (_, i) => i + 1).map((card) => (
              <Card
                key={card}
                className="glass-card glass-card-hover"
                sx={{
                  borderRadius: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  bgcolor: 'transparent',
                  minHeight: 180
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Chip label={`Module ${card}`} sx={{ mb: 1, bgcolor: 'rgba(215, 111, 48, 0.1)', color: '#d76f30' }} />
                  <Typography gutterBottom variant="h5" component="div" fontWeight="bold" sx={{ color: '#172d13' }}>
                    {moduleData[card]?.title || `Module ${card}`}
                  </Typography>

                  <Chip label="Core" size="small" sx={{ borderColor: '#6bb77b', color: '#6bb77b', bgcolor: 'rgba(107, 183, 123, 0.1)' }} variant="outlined" />
                </CardContent>
                <CardActions sx={{ px: 2, pb: 2, pt: 0 }}>
                   <Button size="small" component={Link} to={`/topics/${card}`} variant="text" sx={{ color: '#6bb77b', fontSize: '0.85rem' }}>Details</Button>
                </CardActions>
              </Card>
            ))}
          </Box>

          {/* Row 2 */}
          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 3 }}>
            {Array.from({ length: 8 }, (_, i) => i + 9).map((card) => (
              <Card
                key={card}
                className="glass-card glass-card-hover"
                sx={{
                  borderRadius: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  bgcolor: 'transparent',
                  minHeight: 180
                }}
              >
                 <CardContent sx={{ flexGrow: 1 }}>
                  <Chip label={`Module ${card}`} sx={{ mb: 1, bgcolor: 'rgba(215, 111, 48, 0.1)', color: '#d76f30' }} />
                  <Typography gutterBottom variant="h5" component="div" fontWeight="bold" sx={{ color: '#172d13' }}>
                    {moduleData[card]?.title || `Module ${card}`}
                  </Typography>

                  <Chip label="Core" size="small" sx={{ borderColor: '#6bb77b', color: '#6bb77b', bgcolor: 'rgba(107, 183, 123, 0.1)' }} variant="outlined" />
                </CardContent>
                <CardActions sx={{ px: 2, pb: 2, pt: 0 }}>
                   <Button size="small" component={Link} to={`/topics/${card}`} variant="text" sx={{ color: '#6bb77b', fontSize: '0.85rem' }}>Details</Button>
                </CardActions>
              </Card>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

// ================= MODULE DETAIL PAGE =================
const renderInlineMarkdown = (s) => {
  const parts = s.split(/(\*\*[^*]+\*\*)/);
  const nodes = [];
  parts.forEach((part, i) => {
    const bold = part.match(/^\*\*([^*]+)\*\*$/);
    if (bold) {
      nodes.push(<strong key={`b-${i}`}>{bold[1]}</strong>);
    } else {
      const lines = part.split(/\n/);
      lines.forEach((ln, j) => {
        nodes.push(<span key={`t-${i}-${j}`}>{ln}</span>);
        if (j < lines.length - 1) nodes.push(<br key={`br-${i}-${j}`} />);
      });
    }
  });
  return nodes;
};

const renderMarkdown = (text) => {
  if (!text) return null;
  return text.split(/\n{2,}/).map((para, idx) => (
    <Typography key={idx} variant="body1" paragraph sx={{ lineHeight: 1.8, color: '#2e4a28' }}>
      {renderInlineMarkdown(para)}
    </Typography>
  ));
};

const toEmbedUrl = (u) => {
  if (!u) return "";
  try {
    const url = new URL(u);
    if (url.hostname.includes('youtube.com')) {
      if (url.pathname === '/watch') {
        const v = url.searchParams.get('v');
        if (v) return `https://www.youtube.com/embed/${v}`;
      }
      if (url.pathname.startsWith('/embed/')) return u;
    }
    if (url.hostname.includes('youtu.be')) {
      const id = url.pathname.slice(1);
      if (id) return `https://www.youtube.com/embed/${id}`;
    }
    return u;
  } catch {
    return u;
  }
};

const toSlidesEmbedUrl = (u) => {
  if (!u) return "";
  try {
    const m = u.match(/\/presentation\/d\/([^/]+)/);
    if (m && m[1]) {
      const id = m[1];
      return `https://docs.google.com/presentation/d/${id}/embed?start=true&loop=false&delayms=3000`;
    }
    return u;
  } catch {
    return u;
  }
};

const ModuleDetailPage = () => {
  const { id } = useParams();
  const module = moduleData[id];
  const rawVUrl = module?.videoUrl;
  const rawVUrls = module?.videoUrls;
  const videos = Array.isArray(rawVUrls)
    ? rawVUrls
    : Array.isArray(rawVUrl)
    ? rawVUrl
    : typeof rawVUrl === 'string' && rawVUrl
    ? [rawVUrl]
    : [];
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const activeVideoIndex = videos.length ? Math.min(currentVideoIndex, videos.length - 1) : 0;
  const goPrevVideo = () => {
    if (videos.length > 0) {
      setCurrentVideoIndex((prev) => (prev - 1 + videos.length) % videos.length);
    }
  };
  const goNextVideo = () => {
    if (videos.length > 0) {
      setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
    }
  };

  if (!module) {
    return (
      <Container maxWidth="lg" sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h4">Module not found</Typography>
        <Button component={Link} to="/topics" variant="contained" sx={{ mt: 2 }}>Back to Topics</Button>
      </Container>
    );
  }

  return (
    <Box sx={{ flexGrow: 1, py: 8, minHeight: '100vh', bgcolor: '#F5F7F5' }}>
      <Container maxWidth="lg">
        <Button component={Link} to="/topics" startIcon={<ArrowBackIcon />} sx={{ mb: 4, color: '#6bb77b' }}>
          Back to Topics
        </Button>
        
        {/* Header */}
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Chip label={`Module ${id}`} sx={{ mb: 2, bgcolor: 'rgba(215, 111, 48, 0.1)', color: '#d76f30' }} />
          <Typography variant="h3" fontWeight="bold" sx={{ color: '#172d13', mb: 2 }}>
            {module.title}
          </Typography>
          <Typography variant="h6" sx={{ color: '#4a6b42', maxWidth: '800px', mx: 'auto' }}>
            {module.description}
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Main Content Column */}
          <Grid item xs={12} md={8}>
            
            <Paper className="glass-card" sx={{ p: 4, mb: 4, borderRadius: 4, border: 'none', boxShadow: 2 }}>
              <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ color: '#172d13' }}>
                Presentation
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Box sx={{ width: '100%', height: 400, bgcolor: '#eee', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                {module.pptUrl ? (
                  <iframe 
                    src={toSlidesEmbedUrl(module.pptUrl)} 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    title="Module Presentation"
                  ></iframe>
                ) : (
                  <Box sx={{ textAlign: 'center', p: 3 }}>
                    <Typography variant="body1" color="textSecondary">
                      {/* EDITABLE: Insert PowerPoint iframe above */}
                      Presentation slide deck will be displayed here.
                    </Typography>
                    <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                      (To add: Paste embed URL in moduleData)
                    </Typography>
                  </Box>
                )}
              </Box>
            </Paper>

             <Paper className="glass-card" sx={{ p: 4, mb: 4, borderRadius: 4, border: 'none', boxShadow: 2 }}>
              <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ color: '#172d13' }}>
                Video Discussion
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Box sx={{ position: 'relative', width: '100%', height: 400, bgcolor: '#eee', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                {videos.length > 0 ? (
                  <iframe
                    width="100%"
                    height="100%"
                    src={toEmbedUrl(videos[activeVideoIndex])}
                    title="Video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <Box sx={{ textAlign: 'center', p: 3 }}>
                    <Typography variant="body1" color="textSecondary">
                      Video presentation will be displayed here.
                    </Typography>
                  </Box>
                )}
                {videos.length > 1 && (
                  <Box sx={{ position: 'absolute', top: '50%', left: 0, right: 0, display: 'flex', justifyContent: 'space-between', px: 2 }}>
                    <Button onClick={goPrevVideo} variant="contained" sx={{ minWidth: 0, borderRadius: '50%' }}>
                      <ArrowBackIcon />
                    </Button>
                    <Button onClick={goNextVideo} variant="contained" sx={{ minWidth: 0, borderRadius: '50%' }}>
                      <ArrowForwardIcon />
                    </Button>
                  </Box>
                )}
              </Box>
            </Paper>

            <Paper className="glass-card" sx={{ p: 4, mb: 4, borderRadius: 4, border: 'none', boxShadow: 2 }}>
              <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ color: '#172d13', display: 'flex', alignItems: 'center', gap: 1 }}>
                <StorageIcon color="primary" /> Topic Summary
              </Typography>
              <Divider sx={{ my: 2 }} />
              {module.summary ? (
                <Box>{renderMarkdown(module.summary)}</Box>
              ) : (
                <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, color: '#2e4a28' }}>
                  No summary available for this topic yet.
                </Typography>
              )}
            </Paper>

          </Grid>

          {/* Sidebar Column */}
          <Grid item xs={12} md={4}>
            {/* Group Members */}
            <Paper className="glass-card" sx={{ p: 3, borderRadius: 4, border: 'none', boxShadow: 2, position: 'sticky', top: 24 }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ color: '#6bb77b' }}>
                Group Members
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <List>
                {module.members && module.members.map((member, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: 'rgba(215, 111, 48, 0.1)', color: '#d76f30' }}>
                        <PersonIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText 
                      primary={<Typography color="#172d13" fontWeight="500">{member.name}</Typography>} 
                      secondary={<Typography color="#4a6b42" variant="body2">{member.role}</Typography>} 
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

import img1 from './assets/css/IMG_8692.JPG';
import img2 from './assets/css/IMG_8693.JPG';

// ================= ABOUT PAGE =================
const AboutPage = () => {
  const images = [
    img1,
    img2
  ];

  const team = [
    { name: 'Dr. Rico S. Santos', role: 'Professor', avatar: 'https://i.pravatar.cc/150?u=jane' },
    
  ];

  return (
    <Box sx={{ minHeight: '100vh', pb: 8 }}>
      <Container maxWidth="lg" sx={{ mt: 6 }}>
        
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" fontWeight="bold" sx={{ color: '#172d13', mb: 2 }}>
            About Us
          </Typography>
          <Typography variant="h6" sx={{ color: '#4a6b42', maxWidth: '700px', mx: 'auto' }}>
BSIT-NS-3A Students from Technological University of the
 Philippines - Taguig 
that tackles topics regarding Computer System and Platform Technology   
       </Typography>
        </Box>

        {/* Image Slider Section */}
        <Box sx={{ mb: 8, borderRadius: 4, overflow: 'hidden' }}>
          <ImageSlider images={images} />
        </Box>


        {/* Team Section */}
        <Box>
          <Typography variant="h4" fontWeight="bold" align="center" gutterBottom sx={{ mb: 4, color: '#172d13' }}>
            Subject Professor
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {team.map((member, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card className="glass-card glass-card-hover" sx={{ borderRadius: 4, textAlign: 'center', p: 3, bgcolor: 'transparent' }}>
                  <Avatar 
                    src={member.avatar} 
                    sx={{ width: 100, height: 100, mx: 'auto', mb: 2, border: '4px solid #6bb77b' }} 
                  />
                  <Typography variant="h6" fontWeight="bold" color="primary">
                    {member.name}
                  </Typography>
                  <Chip label={member.role} sx={{ mt: 1, borderColor: '#6bb77b', color: '#6bb77b' }} variant="outlined" size="small" />
                  <Typography variant="body2" sx={{ mt: 2, color: '#4a6b42' }}>
                    Dedicated to excellence in education and system research.
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

      </Container>
    </Box>
  );
};

// ================= APP =================
function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/topics" element={<TopicsPage />} />
        <Route path="/topics/:id" element={<ModuleDetailPage />} />
      </Routes>

      {/* FOOTER */}
      <Box component="footer" className="glass-card" sx={{ py: 4, mt: 'auto', borderRadius: '20px 20px 0 0', borderBottom: 'none' }}>
        <Container maxWidth="md">
          <Typography variant="h6" align="center" gutterBottom color="primary">
            Computer System and Platform Technology
          </Typography>
          <Typography
            variant="body2"
            align="center"
            sx={{ color: '#4a6b42' }}
          >
            © {new Date().getFullYear()} All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

export default App;
