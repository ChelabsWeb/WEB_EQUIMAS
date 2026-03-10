---
name: gemini-prompt-enhancer
description: Applies when the user asks you to perform a task for Gemini 3.1 Pro or requests a prompt for Gemini 3.1 Pro. This skill converts a simple request into a highly detailed, optimized prompt.
---
# Gemini 3.1 Pro Prompt Enhancer

This skill is triggered when the user asks you to create a prompt or perform a task specifically mentioning "Gemini 3.1 Pro" (or similar variations). Before providing the final answer or executing the task directly, your goal is to transform their initial request into a "perfect," well-developed prompt designed to elicit the best possible response from Gemini 3.1 Pro.

## Objective
Convert a basic user request into a comprehensive, high-quality prompt tailored for Gemini 3.1 Pro's capabilities.

## Framework for a Perfect Gemini 3.1 Pro Prompt

When rewriting the prompt, ensure it includes the following elements:

1.  **Role/Persona:** Define the expert persona Gemini should adopt.
2.  **Context & Background:** Provide all necessary context. **CRITICAL:** Always inject the implicit project context for Equimas: "Equimas is a B2B Digital Catalog and Corporate Portfolio of high-end commercial furniture, mannequins, and retail exhibition systems. It is a Lead generation / Quotes platform, NOT a transactional e-commerce store. Tech stack: Next.js App Router, Tailwind CSS v4, Framer Motion, shadcn/ui. Aesthetic: Premium Glassmorphism, B2B High-End Architectural."
3.  **Specific Task/Objective:** Clearly state exactly what needs to be done. Use action verbs.
4.  **Constraints & Guidelines:**
    -   Programming languages or frameworks to use.
    -   Tone of voice (professional, friendly, technical).
    -   Things to *avoid* doing.
5.  **Chain of Thought (Reasoning):** Instruct the model to think step-by-step or plan before generating the final output. (e.g., "First, analyze the problem. Second, outline your approach. Third, provide the solution.")
6.  **Expected Output Format:** Detail exactly how the response should look (e.g., "Output only valid JSON," "Write a 5-paragraph essay").

## Execution Steps

When a user asks you to apply this skill:

1.  **Analyze the User's Request:** Identify the core goal, any implicit constraints, and the domain of the request.
2.  **Draft the Enhanced Prompt:** Write out the comprehensive prompt using the framework above.
3.  **Present the Result:** Show the user the enhanced prompt clearly, formatting it inside a markdown block for easy copying. You can also offer to execute the prompt yourself if that aligns with the user's intent.

### Example Transformation

*User Request:* "Crea un carrusel de imágenes para los productos."

*Enhanced Prompt Output:*
```text
**Role:** Act as a Senior Next.js Developer and UX/UI Animation Expert.

**Context:** We are developing Equimas, a B2B Digital Catalog and Corporate Portfolio for high-end commercial furniture and retail exhibition systems. It is a lead-generation tool (quotes), not a transactional e-commerce. The tech stack is Next.js App Router, Tailwind CSS v4, Framer Motion, and shadcn/ui. Aesthetic: Premium Glassmorphism, B2B High-End Architectural. We need a sophisticated image carousel for the product details page.

**Task:** Create a highly polished, interactive `SystemCarousel` component using React, Tailwind CSS, and Framer Motion. It should handle multiple high-resolution images of architectural exhibition systems.

**Guidelines:**
- Use Framer Motion for smooth drag capabilities (`drag="x"`) and spring physical transitions.
- Do not use generic, hard-edged transitions; ensure a premium, floating glass aesthetic for the navigation arrows (`.glass-premium`).
- Ensure it is fully typed with TypeScript and accessible.

**Reasoning Process (Chain of Thought):**
- **First**, outline the component's state (current index, motion values).
- **Second**, write the React function with Framer Motion elements.
- **Third**, style the overlays with B2B premium glass UI.

**Expected Output:**
Provide the complete `tsx` component code inside a markdown block. Include a brief explanation of the Framer Motion physics values chosen.
```
