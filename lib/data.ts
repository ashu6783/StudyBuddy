export const documents = Array.from({ length: 20 }).map((_, index) => ({
    id: index + 1,
    title: `Sample Document ${index + 1} - ${['Accounting Basics', 'Financial Analysis', 'Economic Trends', 'Marketing Strategies'][Math.floor(Math.random() * 4)]}`,
    content: `This document provides an overview of ${['accounting principles', 'financial analysis techniques', 'economic trends', 'marketing strategies'][Math.floor(Math.random() * 4)]}, including practical examples and templates for beginners.`,
    wordCount: Math.floor(Math.random() * 300) + 400,
    pageCount: Math.floor(Math.random() * 2) + 1,
    type: ['Essay', 'Research', 'Project'][Math.floor(Math.random() * 3)],
    subject: ['Accounting', 'Finance', 'Economics', 'Marketing'][Math.floor(Math.random() * 4)],
    academicLevel: ['Undergraduate', 'Masters', 'PhD'][Math.floor(Math.random() * 3)],
  }));