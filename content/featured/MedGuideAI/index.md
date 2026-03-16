---
date: '2'
title: 'MedGuide-AI'
cover: '../Picture4.png'
github: 'https://github.com/SiddhiDabholkar10/MedGuide-AI'

tech:
  - Python 
  - Flask
  - OPENAI API
  - RAG
  - Pinecone
  - Docker CI/CD
  - AWS S3
 
  
---
MedGuide-AI is a medical guidance assistant built with Flask and LangChain that integrates both GROQ and OpenAI APIs to answer medical questions with accuracy and source attribution. The system implements retrieval-augmented generation (RAG) by ingesting medical documents as PDFs, converting them into semantic embeddings using sentence-transformers, and indexing them in Pinecone for efficient similarity-based retrieval. When a user submits a query, the application retrieves relevant medical passages from the vector database and generates evidence-backed responses using the selected LLM. The entire application is containerized with Docker and deployed on Amazon EC2 for scalable, production-grade serving of medical information at scale.