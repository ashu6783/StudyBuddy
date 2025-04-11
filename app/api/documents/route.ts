import { NextRequest, NextResponse } from 'next/server';

const allDocuments = [
    {
      id: '1',
      title: 'Understanding Financial Statements',
      content: 'This document provides insights into balance sheets...',
      type: 'essay',
      subject: 'accounting',
      academicLevel: 'undergraduate',
      wordCount: 1200,
      pageCount: 5,
    },
    {
      id: '2',
      title: 'Marketing Strategies in 2024',
      content: 'Explore modern marketing trends...',
      type: 'research',
      subject: 'marketing',
      academicLevel: 'masters',
      wordCount: 1200000,
      pageCount: 12,
    },
    {
      id: '3',
      title: 'Economic Impact of Inflation',
      content: 'This research explains how inflation affects...',
      type: 'essay',
      subject: 'economics',
      academicLevel: 'phd',
      wordCount: 250000,
      pageCount: 9,
    },
    {
      id: '4',
      title: 'Corporate Finance: A Case Study',
      content: 'In this case study, we analyze...',
      type: 'project',
      subject: 'finance',
      academicLevel: 'undergraduate',
      wordCount: 6000,
      pageCount: 24,
    },
    {
      id: '5',
      title: 'Digital Marketing Analytics',
      content: 'Measuring ROI in digital campaigns...',
      type: 'research',
      subject: 'marketing',
      academicLevel: 'phd',
      wordCount: 3000,
      pageCount: 10,
    },
    {
      id: '6',
      title: 'Behavioral Economics Principles',
      content: 'How psychology shapes financial decisions...',
      type: 'essay',
      subject: 'economics',
      academicLevel: 'masters',
      wordCount: 2000,
      pageCount: 8,
    },
    {
      id: '7',
      title: 'Advanced Corporate Strategies',
      content: 'Strategic frameworks for growth...',
      type: 'project',
      subject: 'finance',
      academicLevel: 'masters',
      wordCount: 4500,
      pageCount: 18,
    },
    {
      id: '8',
      title: 'Principles of Microeconomics',
      content: 'Supply, demand and market behavior...',
      type: 'essay',
      subject: 'economics',
      academicLevel: 'undergraduate',
      wordCount: 1800,
      pageCount: 7,
    },
    {
      id: '9',
      title: 'Investment Portfolio Optimization',
      content: 'Managing risk in financial portfolios...',
      type: 'research',
      subject: 'finance',
      academicLevel: 'phd',
      wordCount: 8000,
      pageCount: 32,
    },
    {
      id: '10',
      title: 'Accounting for Startups',
      content: 'Setting up books for new ventures...',
      type: 'project',
      subject: 'accounting',
      academicLevel: 'undergraduate',
      wordCount: 2200,
      pageCount: 9,
    },
    {
      id: '11',
      title: 'Social Media Marketing',
      content: 'Trends and tools in 2024...',
      type: 'essay',
      subject: 'marketing',
      academicLevel: 'undergraduate',
      wordCount: 1700,
      pageCount: 6,
    },
    {
      id: '12',
      title: 'Financial Ratios Deep Dive',
      content: 'Understanding liquidity, solvency, and profitability...',
      type: 'essay',
      subject: 'accounting',
      academicLevel: 'masters',
      wordCount: 2100,
      pageCount: 10,
    },
    {
      id: '13',
      title: 'Economic Policy in Developing Nations',
      content: 'Challenges and opportunities...',
      type: 'research',
      subject: 'economics',
      academicLevel: 'phd',
      wordCount: 11000,
      pageCount: 40,
    },
    {
      id: '14',
      title: 'Auditing Practices Explained',
      content: 'Internal vs external auditing...',
      type: 'project',
      subject: 'accounting',
      academicLevel: 'masters',
      wordCount: 3000,
      pageCount: 12,
    },
    {
      id: '15',
      title: 'Consumer Behavior Analysis',
      content: 'Understanding modern buyers...',
      type: 'research',
      subject: 'marketing',
      academicLevel: 'masters',
      wordCount: 5500,
      pageCount: 22,
    },
    {
      id: '16',
      title: 'Principles of Cost Accounting',
      content: 'Fixed vs variable costs...',
      type: 'essay',
      subject: 'accounting',
      academicLevel: 'undergraduate',
      wordCount: 2500,
      pageCount: 10,
    },
    {
      id: '17',
      title: 'International Trade Theories',
      content: 'Comparative advantage explained...',
      type: 'essay',
      subject: 'economics',
      academicLevel: 'masters',
      wordCount: 3000,
      pageCount: 11,
    },
    {
      id: '18',
      title: 'Risk Management in Finance',
      content: 'Hedging techniques in volatile markets...',
      type: 'project',
      subject: 'finance',
      academicLevel: 'masters',
      wordCount: 4700,
      pageCount: 20,
    },
    {
      id: '19',
      title: 'Economic Models & Real World Data',
      content: 'Limitations of classical models...',
      type: 'research',
      subject: 'economics',
      academicLevel: 'phd',
      wordCount: 12500,
      pageCount: 50,
    },
    {
      id: '20',
      title: 'Basics of Financial Accounting',
      content: 'Debits, credits and T-accounts...',
      type: 'essay',
      subject: 'accounting',
      academicLevel: 'undergraduate',
      wordCount: 1000,
      pageCount: 4,
    },
    {
      id: '21',
      title: 'Cross-Cultural Marketing',
      content: 'Adapting campaigns globally...',
      type: 'project',
      subject: 'marketing',
      academicLevel: 'phd',
      wordCount: 7600,
      pageCount: 30,
    },
    {
      id: '22',
      title: 'The Psychology of Pricing',
      content: 'Why we pay what we do...',
      type: 'essay',
      subject: 'marketing',
      academicLevel: 'undergraduate',
      wordCount: 1400,
      pageCount: 5,
    },
    {
      id: '23',
      title: 'Macroeconomic Forecasting Techniques',
      content: 'Using models to predict trends...',
      type: 'research',
      subject: 'economics',
      academicLevel: 'phd',
      wordCount: 9500,
      pageCount: 36,
    },
    {
      id: '24',
      title: 'Taxation in Small Business',
      content: 'Strategies to stay compliant...',
      type: 'project',
      subject: 'accounting',
      academicLevel: 'masters',
      wordCount: 5200,
      pageCount: 21,
    },
    {
      id: '25',
      title: 'Evaluating Market Efficiency',
      content: 'Are markets truly rational?',
      type: 'essay',
      subject: 'finance',
      academicLevel: 'masters',
      wordCount: 3300,
      pageCount: 13,
    },
  ];
  

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const type = searchParams.get('type') || 'all';
  const subject = searchParams.get('subject');
  const academicLevel = searchParams.get('academicLevel') || 'any';
  const minWords = parseInt(searchParams.get('minWords') || '0', 10);
  const maxWords = parseInt(searchParams.get('maxWords') || '1000000', 10);

  let filtered = allDocuments;

  if (type !== 'all') {
    filtered = filtered.filter((doc) => doc.type === type);
  }

  if (subject) {
    filtered = filtered.filter((doc) => doc.subject === subject);
  }

  if (academicLevel !== 'any') {
    filtered = filtered.filter((doc) => doc.academicLevel === academicLevel);
  }

  filtered = filtered.filter(
    (doc) => doc.wordCount >= minWords && doc.wordCount <= maxWords
  );

  return NextResponse.json(filtered);
}
