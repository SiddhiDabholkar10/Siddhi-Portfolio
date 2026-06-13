---
date: '1'
title: 'PaperPilot AI'
cover: '../Picture6.png'
github: 'https://github.com/SiddhiDabholkar10/PaperPilot.git'


tech:
  - Python, LangGraph, Pydantic, SQLite, Pinecone
  - BGE Embeddings, BM25, Reciprocal Rank Fusion, GROBID, PyMuPDF
  - RAGAS, Semantic Scholar API, arXiv API, Docker


---

- Built a resumable ingestion pipeline for 805 arXiv papers using stratified sampling, canonical seed papers, deduplication, GROBID extraction, PyMuPDF fallback, and parent-child chunking.
- Implemented hybrid retrieval with BGE embeddings in Pinecone, BM25 keyword search, weighted Reciprocal Rank Fusion, and SQLite-based parent chunk expansion.
- Developed a LangGraph agent that decomposes complex queries, evaluates evidence sufficiency, reformulates weak searches, generates cited answers, and verifies claims against retrieved passages.
- Evaluated the system with retrieval recall, citation recall, RAGAS, and failure analysis, achieving 0.710 average citation recall, 58% perfect recall, and 0.828 answer relevancy.