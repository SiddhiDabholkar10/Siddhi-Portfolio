---
date: '1'
title: 'caseQuery - Legal RAG Assistant'
cover: '../Picture1.png'
github: 'https://github.com/SiddhiDabholkar10/caseQuery.git'

tech:
  - Python 
  - FAISS (faiss-cpu)
  - Sentence-Transformers
  - BM25
  - OpenRouter API (Meta-Llama)
 
  
---
Built CaseQuery, a retrieval-augmented generation (RAG) system for legal question answering over CUAD contracts and Illinois case law (CAP). Created an end-to-end pipeline to unify and chunk documents, supporting dense semantic retrieval with FAISS and a BM25 baseline for comparison. Designed grounded prompting that injects top-k passages with metadata and enforces “answer only from context” to reduce hallucinations. Integrated Meta-Llama via OpenRouter with an interactive CLI for RAG vs zero-shot, and evaluated performance using Recall@k/MRR and ROUGE-L/BERTScore (RAG: 0.23 ROUGE-L, 0.857 BERTScore vs zero-shot: 0.153, 0.848), producing verifiable, citation-linked outputs.