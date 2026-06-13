---
date: '2'
title: 'caseQuery - Legal RAG Assistant'
cover: '../Picture1.jpeg'
github: 'https://github.com/SiddhiDabholkar10/caseQuery.git'

tech:
  - Python 
  - FAISS
  - Sentence-Transformers
  - BM25
  - OpenRouter API (Meta-Llama)
 
  
---
- Built CaseQuery, a legal RAG-based question answering system over CUAD contracts and Illinois case law (CAP), enabling grounded, citation-linked answers from retrieved context.

- Developed an end-to-end pipeline to unify, chunk, and index documents, using FAISS dense retrieval and a BM25 baseline for comparison, and designed prompting that injects top-k passages with metadata while enforcing answer-only-from-context to reduce hallucinations.

- Integrated Meta-Llama via OpenRouter into an interactive Uvicorn-served applicationfor RAG vs. zero-shot evaluation and measured performance using Recall@k, MRR, ROUGE-L, and BERTScore, achieving 0.23 ROUGE-L / 0.857 BERTScore for RAG vs. 0.153 / 0.848 for zero-shot.