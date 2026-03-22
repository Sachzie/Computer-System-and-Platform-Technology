import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, Navigate, useLocation, useParams } from 'react-router-dom';
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
    videoUrl: ["https://youtu.be/iUtxbviPGv0?si=vAo0SabKKh1J3QKI", "https://www.youtube.com/watch?v=0IoCuyTcUVk&fbclid=IwY2xjawQsz-VleHRuA2FlbQIxMABicmlkETFQcThhUzBianFGVmFTMExMc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHvEUqEW1UvCYb7kGpuZc9IYTlz7sNeQvCdvb7snPWCmd3TuZ8TMe-6g4pwxF_aem_C42jqWPJybcFlNvaGcBaRA"],
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
    videoUrl: ["https://youtu.be/_tFV9jPoxtc", "https://youtu.be/wTM8wsxwNRw?si=xDgkeKB2tjDq6yEw"],
    members: [
      { name: 'BUMATAY,AXEL JILLIAN', role: 'Member' },
      { name: 'PENAVERDE, LEVI ASHER', role: 'Member' },
    ]
  },
  3: {
    title: "Data Formats",
    description: "Boolean algebra, logic gates, and digital circuit design.",
    summary: `The presentation explains what data formats are and why they are important in modern technology. A data format is a structured way of organizing and storing digital information so that computers and people can easily read, process, and exchange it. Data formats make it possible for different systems, applications, and devices to communicate with each other efficiently. Without standardized formats, transferring and understanding data across platforms would be very difficult.
 
 The report also discusses the history of data formats, starting from early mechanical systems such as punched cards and paper tapes used in the 1800s and early computing era. As technology advanced, magnetic tapes and early binary formats were introduced, allowing faster and more efficient storage of data. Later, standardized formats like ASCII, CSV, HTML, and XML were developed to improve compatibility and organization of information. These developments helped computers exchange data more easily and became the foundation of modern digital communication.
 
 The presentation then explains modern data formats used in today’s technology. Some formats are text-based, such as JSON, XML, YAML, and CSV, which are easy for humans to read and widely used in web development and data exchange. Other formats are binary-based like Protocol Buffers, Avro, and MessagePack, which are optimized for speed and smaller file sizes. Columnar formats such as Parquet and ORC are designed for big data analytics and large-scale processing. Each format serves different purposes depending on performance, storage efficiency, and system requirements.
 
 Another part of the presentation highlights real-world applications of data formats. They are used in web development for APIs and communication between servers and websites, in mobile applications for faster data transfer, in data science for analyzing massive datasets, and in IoT devices that rely on lightweight communication. These examples show how important data formats are in everyday technologies and digital systems.
 
 The report also discusses challenges in using data formats, such as compatibility between old and new systems, performance trade-offs, security risks, and managing changes in data structure. Developers must carefully choose the appropriate format depending on the needs of the system. Addressing these challenges is necessary to maintain efficient, reliable, and secure data processing.
 
 Finally, the presentation looks at the future of data formats. New technologies aim to create formats that are more flexible, energy-efficient, and capable of supporting artificial intelligence and large-scale data systems. Future formats may also include self-describing information that makes data easier to understand and share. Overall, the evolution of data formats continues as technology advances and the demand for faster and smarter data processing grows.`,
    pptUrl: "https://docs.google.com/presentation/d/1aXnWJugAqO_ecXvuW57s8aq7CTzk879A/edit?usp=drive_web&ouid=116426902229173965274&rtpof=true",
    videoUrl: ["https://www.youtube.com/watch?v=bJYPL1XPgiY", "https://www.youtube.com/watch?v=vxGb1Y7ucZk" ],
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
    videoUrl: ["https://youtu.be/fT7Hbpp8P1k", "https://youtu.be/nadXxWIZ7R8"],
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
    videoUrl: "https://youtu.be/LB9CVmd5GS8",
    members: [
      { name: 'CASAY,DWAYNE', role: 'Member' },
      { name: 'MAGDAYO, ROSE ANNE', role: 'Member' },
    ]
  },
  6: {
    title: "Database Platforms",
    description: "I/O devices, interfaces, interrupts, and DMA.",
    summary: `A database platform is a software environment designed to manage both structured and unstructured data efficiently. It ensures that data remains accurate, consistent, secure, and accessible at all times. These platforms are essential for organizations and applications because they enable fast data processing and reliable storage of information. By providing a stable and organized system for handling data, database platforms support daily operations and long-term decision-making processes.
 Database platforms play a vital role in supporting business operations and digital systems. They are responsible for storing and organizing large volumes of data while maintaining data integrity and consistency. In addition, they provide secure access to protect sensitive information and allow multiple users and applications to access data simultaneously. Through these core functions, organizations can rely on accurate and well-managed information to guide their strategies and improve overall efficiency.
 Modern database platforms integrate advanced technologies to enhance performance and reliability. Cloud computing allows scalable and remote data storage, making systems more flexible and accessible. Distributed systems spread data across multiple servers to improve speed and reduce the risk of system failure. Data replication creates copies of information to ensure availability during technical issues, while encryption safeguards data from unauthorized access. These innovations significantly improve system availability, fault tolerance, and security, enabling database platforms to support large numbers of users effectively.
 Furthermore, different types of modern databases are designed to address specific needs and use cases. Graph databases are ideal for managing relationship-heavy data such as social networks and recommendation systems. Time-series databases are commonly used for IoT sensors, monitoring systems, and financial data tracking where information is recorded over time. Vector databases, on the other hand, are designed to handle AI and machine learning embeddings, supporting semantic search and advanced data analysis. Together, these specialized databases demonstrate how database platforms continue to evolve in response to emerging technologies and complex data requirements.`,
    pptUrl: "https://docs.google.com/presentation/d/1yYJtpuThOhCCNhX2hR63XLacdXxbjHwU/edit?usp=drive_web&ouid=116426902229173965274&rtpof=true",
    videoUrl: "https://youtu.be/DonS5XkHzf0",
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
    pptUrl: "https://docs.google.com/presentation/d/1jmcF7A8pNcDgblRFQHlLfErEhWGc-IcX/edit",
    videoUrl: ["https://youtu.be/tnZHh8hi02o", "https://www.youtube.com/watch?fbclid=IwY2xjawQsz3VleHRuA2FlbQIxMABicmlkETFQcThhUzBianFGVmFTMExMc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHt4RYmxYw4rqlpHTnCyDWOF_Ci2JrpWw5IbMEiaKiG-YqraewxsHo2jk0NA3_aem_OMWDNUWxkpZA-HwPT5AplQ&v=4e3LxuRPTUQ&feature=youtu.be"],
    members: [
      { name: 'CATUERA, MELVIN', role: 'Member' },
      { name: 'BALUCAN, CASEY ALTHEA', role: 'Member' },
    ]
  },
  8: {
    title: "Application Platforms",
    description: "File organization, directories, and storage management.",
    summary: `Application platforms are environments that provide the necessary tools, infrastructure, and services for developing and running software applications. In the early stages of computing, platforms were based on centralized mainframes and standalone systems where all processing occurred on a single machine. During the 1990s, client-server architecture became dominant, allowing clients to handle user interfaces while servers managed databases and core processing.
 In the 2000s, web-based platforms transformed the industry by enabling applications to run through browsers, reducing the need for local installations and simplifying updates. The 2010s introduced cloud and mobile platforms, allowing users to access applications anytime through smartphones and internet-connected devices. This period marked a major shift from desktop-based systems to web and mobile applications.
 Mobile platforms such as Android and iOS expanded the reach of applications, making them more accessible and portable. At the same time, cloud computing and virtualization allowed multiple virtual systems to operate on shared physical hardware, improving efficiency and scalability. This led to the rise of Platform-as-a-Service (PaaS), where developers can build and deploy applications without managing servers directly.
 Today, major cloud platforms such as Amazon Web Services, Microsoft Azure, and Google Cloud provide powerful infrastructure and services for modern applications. Application platforms are widely used in business systems like Enterprise Resource Planning (ERP) and Customer Relationship Management (CRM). They also support mobile apps for banking, social media, and e-commerce, as well as web applications for online learning and streaming services. In addition, enterprise and government systems rely on robust application platforms to ensure security, scalability, and efficient service delivery.`,
    pptUrl: "https://docs.google.com/presentation/d/17WIIe-xxR44bzy4rCWmiLyXIlggflql2/edit?usp=drive_web&ouid=116426902229173965274&rtpof=true",
    videoUrl: ["https://youtu.be/o0yxvAvC27o", "https://l.facebook.com/l.php?u=https%3A%2F%2Fyoutu.be%2FrtXg3hB3bEo%3Fsi%3D-4IVoYMJtMi9pQU1%26fbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBExUHE4YVMwYmpxRlZhUzBMTHNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR7xFKhFtVLwmG-5BqbmXPSGE5c-7DXkLwnb2-7Jz1gpnd07mfEzHvuoOKcMRQ_aem_C42jqWPJybcFlNvaGcBaRA&h=AT5HKJPvqyv-x2wrouYuwEKUxtPVmARrrgIPFH2FVOD_c3I2NXgeSoMKhDNZ9-28Jf-9LQ6cjRMptkP3kwDCSztU0nyayRy7wPdmDk-RVwgjTw7mBoVbMw_lY-Y5L5ywVEyTxtbPMl3F9lI"],
    members: [
      { name: 'DUQUE, RAEDEN JAN', role: 'Member' },
      { name: 'YEBES, KIM JENSEN', role: 'Member' },
    ]
  },
  9: {
    title: "Web Platforms",
    description: "OSI model, TCP/IP, and basic networking concepts.",
    summary: `The presentation provides a comprehensive overview of web platforms, tracing their evolution from Web 1.0 to Web 3.0 while explaining the technologies, applications, challenges, and future trends shaping the modern internet. It begins with Web 1.0, the “read-only” era characterized by static HTML pages, limited interactivity, and content consumption similar to digital brochures. It then transitions to Web 2.0, the “read-write” web, which introduced dynamic content, user-generated platforms, social media, blogs, and collaboration through technologies like AJAX, enabling asynchronous updates without reloading pages. The discussion progresses to Web 3.0, the “read-write-own” era, focused on decentralization, blockchain technology, cryptocurrencies, NFTs, dApps, AI, and the Semantic Web, where users gain greater control over their data, identity, and digital assets. The presentation also explains the modern web development stack, including frontend technologies such as HTML5, CSS3, JavaScript (ES6+), and frameworks like React, Vue, and Angular, as well as backend technologies like Node.js, Python (Django/Flask), PHP (Laravel), Java (Spring Boot), relational and non-relational databases (MySQL, PostgreSQL, MongoDB), and APIs such as REST and GraphQL. It further covers infrastructure and deployment concepts including cloud computing (AWS, Google Cloud, Azure), containerization with Docker and Kubernetes, and architectural approaches like monolithic and microservices systems. Modern web application models such as SPAs, PWAs, and SSR are also highlighted. Additionally, the presentation addresses major challenges in web platforms—security and data privacy, scalability and performance, and accessibility and inclusivity—along with their solutions, such as HTTPS, multi-factor authentication, cloud scaling, CDNs, WCAG standards, and responsive design. Finally, it explores future trends like Artificial Intelligence and Progressive Web Apps, emphasizing continuous learning, user-centered design, and strong cybersecurity as essential strategies for preparing for the future of web development.`,
    pptUrl: "https://docs.google.com/presentation/d/1h-FYEHV5Z4_mMrVGVMrIuAD32Otk0uPk/edit?usp=drive_web&ouid=116426902229173965274&rtpof=true",
    videoUrl: "https://youtu.be/6A0INQXpsbI",
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
    videoUrl: ["https://youtu.be/ljSIkEDCHOg", "https://youtube.com/watch?v=0BnUU7l7nXc&si=sKI7lO4lV-sMjdIx"],
    members: [
      { name: 'DANQUE, JOHN MICHAEL', role: 'Member' },
      { name: 'CIPRIANO, YHANSKIE ADRIEL', role: 'Member' },
    ]
  },
  11: {
    title: "Media Platforms",
    description: "Threats, vulnerabilities, cryptography, and security protocols.",
    summary: `Media platforms have significantly evolved from traditional forms of communication such as print, radio, and television to highly interactive digital platforms powered by the internet. The shift to online media in the 1990s and the rise of social media in the 2000s transformed users from passive audiences into active content creators. Today, modern media platforms use advanced technologies such as cloud computing, Artificial Intelligence (AI), machine learning, big data analytics, 5G, and mobile technologies to provide fast, personalized, and real-time content delivery. Emerging technologies like augmented reality (AR) and virtual reality (VR) are also enhancing user experiences through immersive environments.
 Media platforms are widely applied in communication, education, business, marketing, entertainment, and news dissemination. They enable instant messaging, online learning, digital advertising, live streaming, and global information sharing. Despite their benefits, they face major challenges including misinformation, fake news, content moderation difficulties, privacy and data security risks, algorithm bias, and declining user trust. Looking ahead, future trends focus on stronger AI integration, more personalized and interactive content, improved data privacy measures, short-form media growth, immersive VR/AR experiences, and subscription-based models that reduce reliance on advertisements.`,
    pptUrl: "https://docs.google.com/presentation/d/1aoTPcyhFRGVnIuvlCZAo15xoaqE8GZ-4/edit?rtpof=true",
    videoUrl: ["https://youtu.be/HcGnzYbNLqc", "https://youtu.be/BWIezQSQwJY"],
    members: [
      { name: 'BUENSUCESO, KATE DIANE ROSS', role: 'Member' },
      { name: 'DADIVAS, JOHN LOUIS', role: 'Member' },
    ]
  },
  12: {
    title: "Analytics",
    description: "Metrics, benchmarking, and system optimization techniques.",
    summary: `Analytics refers to the process of examining data to gain insights, support decision-making, and improve performance. It has evolved from simple data processing in the 1960s using mainframe computers to today’s advanced, AI-driven systems that provide real-time insights and predictive capabilities.
 
 Modern analytics uses cloud platforms like Amazon Web Services, Microsoft Azure, and Google Cloud Platform, along with Big Data frameworks such as Apache Spark and Hadoop. Data visualization tools like Tableau and Power BI help present complex information through interactive dashboards.
 
 Analytics is widely applied in business, education, healthcare, transportation, and IT systems. It enables sales forecasting, fraud detection, student performance monitoring, disease prediction, and system optimization.
 
 Despite its benefits, analytics faces challenges such as data quality issues, security and privacy risks, scalability concerns, and high implementation costs.
 
 Looking ahead, future trends include augmented analytics, edge analytics, explainable AI, self-service tools, and ethical data practices — all aimed at making analytics smarter, faster, and more accessible.`,
    pptUrl: "https://docs.google.com/presentation/d/1BxPHWWpocOyVfuRfAlGhJetT6BHgYlRs/edit?usp=drive_web&ouid=116426902229173965274&rtpof=true",
    videoUrl: "https://youtu.be/N36iYd9F8bc",
    members: [
      { name: 'BORJA, VINCENT', role: 'Member' },
      { name: 'ARNADO, ARISTHEA LYN', role: 'Member' },
    ]
  },
  13: {
    title: "Artificial Intelligence",
    description: "Multicore processors, GPU computing, and parallel algorithms.",
    summary: `Artificial Intelligence (AI) refers to computer systems designed to perform tasks that typically require human intelligence, including learning, reasoning, problem-solving, language understanding, and image recognition. The concept emerged in the 1950s, with foundational ideas from Alan Turing, who proposed that machines could simulate human intelligence and introduced the Turing Test. AI development has progressed through periods of advancement and setbacks, accelerating significantly due to improvements in computing power, data availability, and algorithms.
 
 Modern AI includes Machine Learning, Deep Learning, Natural Language Processing, and Computer Vision, enabling applications such as virtual assistants, recommendation systems, facial recognition, autonomous vehicles, healthcare diagnostics, and smart devices. These technologies improve efficiency, automate tasks, enhance accuracy, and support innovation across industries.
 
 Despite its growth, AI faces challenges such as data privacy concerns, high energy consumption, security risks, misuse, limited general intelligence, and regulatory issues. Future directions include advanced and multimodal AI systems, greater human–AI collaboration, robotics integration, edge AI, explainable and ethical AI, personalized systems, sustainable development, and continued progress toward more capable intelligent systems.`,
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
    summary: `Security in computer systems and platform technologies focuses on protecting data, systems, and infrastructure from unauthorized access, attacks, and damage. At its core is the CIA Triad—confidentiality, integrity, and availability—which ensures that information is kept private, accurate, and accessible when needed.
 
 The field covers multiple layers of protection. Operating system security ensures proper user access, permissions, and system updates, while network security protects data in transit using tools like firewalls, VPNs, and secure protocols. At the infrastructure level, platform security includes cloud environments, virtualization, containers, and DevSecOps practices to secure modern deployments.
 
 Cryptography plays a vital role by securing data through encryption, hashing, and digital signatures. Meanwhile, access control models such as DAC, MAC, RBAC, and ABAC regulate who can access resources and under what conditions.
 
 On the application side, application security addresses common vulnerabilities like SQL injection and XSS through secure coding and input validation. These are supported by secure system architecture principles like defense in depth, least privilege, and zero trust, which minimize risk across systems.
 
 In modern environments, cloud and web security emphasizes identity management, multi-factor authentication, and API protection. At the organizational level, governance, risk, and compliance (GRC) frameworks guide policies, standards, and legal requirements to maintain security and accountability.
 
 Additionally, understanding malware and cyber threats—such as ransomware, phishing, and zero-day attacks—is essential for defense. This is complemented by security testing and monitoring, including penetration testing, vulnerability scanning, and SIEM systems, to detect and respond to threats effectively.
 
 Finally, the field continues to evolve with emerging technologies like AI, IoT, blockchain, and quantum cryptography, introducing new challenges and opportunities in cybersecurity.`,
    pptUrl: "https://docs.google.com/presentation/d/1UxWcA_imJ4ZDz1EsIhJyFvgnoryaA-jN/edit?usp=drive_web&ouid=116426902229173965274&rtpof=true",
    videoUrl: "https://youtu.be/c90CJnZPhjo",
    members: [
      { name: 'ILAGAN, SACHZIE SOFIA', role: 'Member' },
      { name: 'SACAY, MARIA ALYSSHA', role: 'Member' },
    ]
  },
  15: {
    title: "IoT",
    description: "AWS, Azure, Google Cloud, and virtualization technologies.",
    summary: `The Internet of Things (IoT) is a network of physical devices embedded with sensors and software that connect to the internet to collect and exchange data, turning everyday objects into “smart” devices. The concept began in 1982 with an internet-connected Coca-Cola machine at Carnegie Mellon University, was later named by Kevin Ashton in 1999, and has since grown to include billions of connected devices worldwide.
 
 IoT relies on sensors, cloud computing, connectivity technologies like Wi-Fi and 5G, and Artificial Intelligence to analyze data and enable automated decisions. It powers smart homes, wearable health devices, industrial automation (IIoT), smart cities, agriculture systems, and medical technologies (IoMT).
 
 Despite rapid growth, IoT faces challenges such as security and privacy risks, device compatibility issues, massive data management demands, and energy consumption. The future of IoT focuses on AI integration (AIoT), edge computing for faster processing, and advanced networks like 5G and 6G to support real-time applications such as autonomous vehicles and remote healthcare.`,
    pptUrl: "https://docs.google.com/presentation/d/1oSAL79fio1vp5sZD2fp3A6u5WYfumeXK/edit?usp=drive_web&ouid=116426902229173965274&rtpof=true",
    videoUrl: ["https://youtu.be/JwcS-wmlbSU","https://youtu.be/vdyV_OKjQxA"],
    members: [
      { name: 'BILLONED, EVEN LLOYD', role: 'Member' },
      { name: 'EGO, IANZAE RYAN', role: 'Member' },
    ]
  },
  16: {
    title: "Mobile Apps Games Platform",
    description: "Quantum computing, blockchain, and future trends in systems.",
    summary: `Game platforms are hardware and software ecosystems built for playing video games, ranging from early arcade machines to modern consoles, PCs, mobile devices, and cloud-based services. Major console platforms include PlayStation 5, Xbox Series X, and Nintendo Switch, while PC gaming is supported by platforms like Steam. Cloud services such as Xbox Cloud Gaming enable streaming without dedicated hardware. Modern game platforms feature advanced graphics, VR integration, and cross-platform multiplayer but face challenges including high development costs, hardware constraints, and monetization concerns. The future points toward cloud streaming, AI-driven experiences, and more seamless, cross-device gameplay.
 
 Mobile apps are software applications designed for smartphones and tablets, distributed mainly through App Store and Google Play. They have evolved from basic utilities into powerful tools that use device hardware like cameras, GPS, and biometric sensors to deliver personalized, real-time services. Mobile apps support industries such as social media, e-commerce, finance, healthcare, productivity, and entertainment. Despite challenges like security risks, device fragmentation, and regulatory compliance, trends include AI integration, augmented reality, super apps, and stronger privacy-focused technologies—making apps increasingly intelligent, immersive, and embedded in everyday life.`,
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
    <Box sx={{ position: 'relative', width: '100%', height: 400, overflow: 'hidden', borderRadius: 4, boxShadow: '0 8px 32px 0 rgba(87, 73, 100, 0.16)' }}>
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
        sx={{ position: 'absolute', top: '50%', left: 10, transform: 'translateY(-50%)', bgcolor: 'rgba(255,255,255,0.4)', backdropFilter: 'blur(5px)', color: '#574964', minWidth: 'auto', p: 1, borderRadius: '50%', '&:hover': { bgcolor: 'rgba(255,218,179,0.55)' } }}
      >
        &#10094;
      </Button>
      <Button 
        onClick={goToNext} 
        sx={{ position: 'absolute', top: '50%', right: 10, transform: 'translateY(-50%)', bgcolor: 'rgba(255,255,255,0.4)', backdropFilter: 'blur(5px)', color: '#574964', minWidth: 'auto', p: 1, borderRadius: '50%', '&:hover': { bgcolor: 'rgba(255,218,179,0.55)' } }}
      >
        &#10095;
      </Button>
    </Box>
  );
};

// ================= HOME PAGE =================
const HomePage = () => (
  <Box
    component="section"
    id="home"
    sx={{
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      scrollMarginTop: '120px',
      py: { xs: 14, md: 18 }
    }}
  >
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
              color: '#574964'
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
                  color: '#574964',
                  mb: 3
                }}
              >
                Computer System and Platform Technology
              </Typography>

              <Typography
                variant="h6"
                align="center"
                sx={{ mb: 6, lineHeight: 1.8, color: '#9F8383' }}
              >
                Focuses on how computer hardware and system software work together to
                support modern applications. This subject covers computer
                architecture, operating systems, system resources, and platform
                technologies that enable secure and scalable computing.
              </Typography>

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
        <Typography variant="h3" align="center" gutterBottom fontWeight="bold" sx={{ color: '#574964', mb: 2 }}>
          Key Topics
        </Typography>
        <Typography variant="h6" align="center" sx={{ color: '#9F8383', mb: 8, maxWidth: '700px', mx: 'auto' }}>
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
                  <Chip label={`Module ${card}`} sx={{ mb: 1, bgcolor: 'rgba(255, 218, 179, 0.42)', color: '#9F8383' }} />
                  <Typography gutterBottom variant="h5" component="div" fontWeight="bold" sx={{ color: '#574964' }}>
                    {moduleData[card]?.title || `Module ${card}`}
                  </Typography>

                  <Chip label="Core" size="small" sx={{ borderColor: '#574964', color: '#574964', bgcolor: 'rgba(87, 73, 100, 0.08)' }} variant="outlined" />
                </CardContent>
                <CardActions sx={{ px: 2, pb: 2, pt: 0 }}>
                   <Button size="small" component={Link} to={`/topics/${card}`} variant="text" sx={{ color: '#9F8383', fontSize: '0.85rem' }}>Details</Button>
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
                  <Chip label={`Module ${card}`} sx={{ mb: 1, bgcolor: 'rgba(255, 218, 179, 0.42)', color: '#9F8383' }} />
                  <Typography gutterBottom variant="h5" component="div" fontWeight="bold" sx={{ color: '#574964' }}>
                    {moduleData[card]?.title || `Module ${card}`}
                  </Typography>

                  <Chip label="Core" size="small" sx={{ borderColor: '#574964', color: '#574964', bgcolor: 'rgba(87, 73, 100, 0.08)' }} variant="outlined" />
                </CardContent>
                <CardActions sx={{ px: 2, pb: 2, pt: 0 }}>
                   <Button size="small" component={Link} to={`/topics/${card}`} variant="text" sx={{ color: '#9F8383', fontSize: '0.85rem' }}>Details</Button>
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
    <Typography key={idx} variant="body1" paragraph sx={{ lineHeight: 1.8, color: '#9F8383' }}>
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
    <Box sx={{ flexGrow: 1, py: 8, minHeight: '100vh', bgcolor: '#FFF1E2' }}>
      <Container maxWidth="lg">
        <Button component={Link} to="/topics" startIcon={<ArrowBackIcon />} sx={{ mb: 4, color: '#9F8383' }}>
          Back to Topics
        </Button>
        
        {/* Header */}
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Chip label={`Module ${id}`} sx={{ mb: 2, bgcolor: 'rgba(255, 218, 179, 0.42)', color: '#9F8383' }} />
          <Typography variant="h3" fontWeight="bold" sx={{ color: '#574964', mb: 2 }}>
            {module.title}
          </Typography>
          <Typography variant="h6" sx={{ color: '#9F8383', maxWidth: '800px', mx: 'auto' }}>
            {module.description}
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Main Content Column */}
          <Grid item xs={12} md={8}>
            
            <Paper className="glass-card" sx={{ p: 4, mb: 4, borderRadius: 4, border: 'none', boxShadow: 2 }}>
              <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ color: '#574964' }}>
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
              <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ color: '#574964' }}>
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
              <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ color: '#574964', display: 'flex', alignItems: 'center', gap: 1 }}>
                <StorageIcon color="primary" /> Topic Summary
              </Typography>
              <Divider sx={{ my: 2 }} />
              {module.summary ? (
                <Box>{renderMarkdown(module.summary)}</Box>
              ) : (
                <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, color: '#9F8383' }}>
                  No summary available for this topic yet.
                </Typography>
              )}
            </Paper>

          </Grid>

          {/* Sidebar Column */}
          <Grid item xs={12} md={4}>
            {/* Group Members */}
            <Paper className="glass-card" sx={{ p: 3, borderRadius: 4, border: 'none', boxShadow: 2, position: 'sticky', top: 24 }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ color: '#9F8383' }}>
                Group Members
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <List>
                {module.members && module.members.map((member, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: 'rgba(255, 218, 179, 0.42)', color: '#9F8383' }}>
                        <PersonIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText 
                      primary={<Typography color="#574964" fontWeight="500">{member.name}</Typography>} 
                      secondary={<Typography color="#9F8383" variant="body2">{member.role}</Typography>} 
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
    { name: 'Dr. Rico S. Santos', role: 'Professor' },
    
  ];

  return (
    <Box
      component="section"
      id="about"
      sx={{ minHeight: '100vh', pb: 8, scrollMarginTop: '120px', py: { xs: 8, md: 10 } }}
    >
      <Container maxWidth="lg" sx={{ mt: 6 }}>
        
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" fontWeight="bold" sx={{ color: '#574964', mb: 2 }}>
            About Us
          </Typography>
          <Typography variant="h6" sx={{ color: '#9F8383', maxWidth: '700px', mx: 'auto' }}>
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
          <Typography variant="h4" fontWeight="bold" align="center" gutterBottom sx={{ mb: 4, color: '#574964' }}>
            Subject Professor
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {team.map((member, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card className="glass-card glass-card-hover" sx={{ borderRadius: 4, textAlign: 'center', p: 3, bgcolor: 'transparent' }}>
                  {/* <Avatar 
                    src={member.avatar} 
                    sx={{ width: 100, height: 100, mx: 'auto', mb: 2, border: '4px solid #9F8383' }} 
                  /> */}
                  <Typography variant="h6" fontWeight="bold" color="primary">
                    {member.name}
                  </Typography>
                  <Chip label={member.role} sx={{ mt: 1, borderColor: '#9F8383', color: '#9F8383' }} variant="outlined" size="small" />
                  <Typography variant="body2" sx={{ mt: 2, color: '#9F8383' }}>
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

const LandingPage = () => (
  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    <HomePage />
    <AboutPage />
  </Box>
);

// ================= APP =================
function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') return;

    if (location.hash) {
      const sectionId = location.hash.replace('#', '');
      const target = document.getElementById(sectionId);

      if (target) {
        window.requestAnimationFrame(() => {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      }

      return;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname, location.hash]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<Navigate to="/#about" replace />} />
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
            sx={{ color: '#9F8383' }}
          >
            © {new Date().getFullYear()} All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

export default App;
