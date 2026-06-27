# Kurios — Landing Page (Escola Cristã)

## Problem Statement
Design de landing page moderno e minimalista para a 'Kurios', uma escola cristã. Paleta amarelo vibrante, preto e branco. Hero com título serifado "Bem vindo à Kurios", ilustração de alunos com cruz, descrição "Somos uma escola cristã". Seções: Serviços (3 cartões: Link do canal, Link do Grupo, Cursos gratuitos), Parceiros (grid com "Visite o Site"). Referência: ipepbarueri.com.br.

## User Choices
- Parceiros: Diário 50+ (https://www.youtube.com/@corpoblindado50), Wilson Silva Oficial (https://www.youtube.com/@wilsonsilvaoficial76)
- Seção adicional: Sobre/Missão
- Imagem: stock genérica
- Sem backend (landing estático)
- Links de serviços: placeholder #

## Architecture
- Frontend: React + Tailwind + shadcn/ui
- Fonts: Playfair Display (serif) + Inter (sans)
- Imagens: Unsplash (alunos + Bíblia)
- Sem backend (não foi requisitado)

## Implemented (Dec 2025)
- Nav fixo com transparência → branco em scroll
- Hero: título serifado gigante, badge, descrição, CTAs, stats, ilustração com versículo Colossenses 3:16
- Marquee preto/amarelo (Fé · Conhecimento · Comunidade · Palavra)
- Sobre: missão/visão/valores em colunas
- Serviços: 3 cartões (primeiro amarelo, outros brancos com hover amarelo)
- Parceiros: grid 3 colunas com placeholder "Seja parceiro"
- CTA final preto + Footer

## Backlog (P1)
- Substituir links # por reais quando fornecidos
- Adicionar mais parceiros
- SVG vetorial custom para hero (substituir foto)
- Página dedicada a cursos com listagem
- Formulário de contato (requer backend)
