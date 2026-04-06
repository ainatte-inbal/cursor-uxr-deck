'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const TOTAL_SLIDES = 20

// Slide 1: Title
function TitleSlide() {
  return (
    <div className="h-full flex flex-col justify-center items-center px-16 bg-gradient-to-br from-intuit-blue to-intuit-navy text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-6xl font-extrabold mb-6 leading-tight">
          Getting Started with Cursor<br />for UX Researchers
        </h1>
        <p className="text-xl opacity-70 mt-8">April 2026</p>
        <p className="text-lg opacity-60 mt-3">@Ainatte Inbal (Slack me for questions)</p>
      </motion.div>
    </div>
  )
}

// Slide 2: Agenda
function AgendaSlide() {
  const items = [
    { num: 1, title: 'Basic Concepts', desc: 'Agent, Project, MCP, Skills, Rules, GitHub', color: 'from-intuit-blue to-intuit-navy' },
    { num: 2, title: 'Marvin MCP Setup', desc: 'Connect your customer research data', color: 'from-intuit-positive to-intuit-navy' },
    { num: 3, title: 'Installing Skills', desc: 'Local skills and skills from the repo', color: 'from-intuit-orange to-intuit-navy' },
    { num: 4, title: 'Research Skills', desc: 'Skill deep-dive for UX research', color: 'from-intuit-negative to-intuit-navy' },
    { num: 5, title: 'Cursor/Claude Desktop/Claude CLI', desc: 'Which tool for research workflows?', color: 'from-intuit-purple to-intuit-navy' },
    { num: 6, title: 'Hands-On Setup', desc: 'Setup your MCP and Skills', color: 'from-intuit-navy to-intuit-blue' },
  ]

  return (
    <div className="h-full flex flex-col px-16 py-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-intuit-navy mb-10"
      >
        Covered in this deck
      </motion.h2>
      <div className="grid grid-cols-3 gap-6 flex-1">
        {items.map((item, i) => (
          <motion.div
            key={item.num}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card rounded-2xl p-6"
          >
            <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${item.color} text-white flex items-center justify-center font-bold mb-3`}>
              {item.num}
            </div>
            <h4 className="text-lg font-semibold text-intuit-navy mb-2">{item.title}</h4>
            <p className="text-intuit-text-secondary text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// Slide 3: Basic Concepts
function BasicConceptsSlide() {
  const concepts = [
    { emoji: '🤖', title: 'Agent', desc: 'A mode where AI does things, not just answers. It reads files, creates documents, runs commands.' },
    { emoji: '📁', title: 'Project', desc: 'A folder you open in Cursor. Conversations are tied to projects so context stays relevant.' },
    { emoji: '🔌', title: 'MCP Server', desc: 'Model Context Protocol — external tools the agent can use, like Marvin for research data or Figma for designs.' },
    { emoji: '⚡', title: 'Skill', desc: 'A reusable instruction set that teaches the agent a specific workflow (e.g., "synthesize interviews").' },
    { emoji: '📋', title: 'Rule', desc: 'Persistent preferences that apply across all conversations (e.g., "always cite sources").' },
    { emoji: '🗂️', title: 'Git Repo', desc: 'A version-controlled folder. Optional, but gives agent access to change history.' },
  ]

  return (
    <div className="h-full flex flex-col px-16 py-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-intuit-navy mb-8"
      >
        Basic Concepts
      </motion.h2>
      <div className="grid grid-cols-3 gap-5 flex-1">
        {concepts.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="glass-card rounded-2xl p-5"
          >
            <div className="text-3xl mb-3">{c.emoji}</div>
            <h4 className="text-lg font-semibold text-intuit-navy mb-2">{c.title}</h4>
            <p className="text-intuit-text-secondary text-sm leading-relaxed">{c.desc}</p>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 p-4 bg-gradient-to-r from-intuit-positive/10 to-intuit-blue/10 border-l-4 border-intuit-positive rounded-r-xl"
      >
        <p className="text-intuit-text-primary">
          <strong>Do I need a git repo?</strong> No — any folder works. But if it is a git repo, the agent can also see file history and help with commits.
        </p>
      </motion.div>
    </div>
  )
}

// Slide 4: What is GitHub
function GitHubSlide() {
  return (
    <div className="h-full flex flex-col px-16 py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h2 className="text-4xl font-bold text-intuit-navy mb-1">What is GitHub?</h2>
        <p className="text-intuit-text-secondary italic mb-6">The Inmates are Running the Asylum (again)</p>
      </motion.div>
      <div className="grid grid-cols-2 gap-10 flex-1">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
          <p className="text-intuit-text-primary mb-6">
            <strong>GitHub</strong> is where teams store and share code, files, and documentation. Think of it as Google Drive for code — with version history and collaboration built in.
          </p>
          <h3 className="text-xl font-semibold text-intuit-blue mb-4">Key Terms</h3>
          <div className="space-y-3">
            {[
              { icon: '📁', title: 'Repo (Repository)', desc: 'A project folder on GitHub. Contains all files, history, and collaboration tools.' },
              { icon: '🔀', title: 'PR (Pull Request)', desc: 'A proposal to add your changes to a repo. Others can review and approve before merging.' },
              { icon: '🌐', title: 'GitHub Pages', desc: 'Free website hosting from a repo. Just push HTML and it\'s live!' },
            ].map((item, i) => (
              <div key={i} className="glass-card rounded-xl p-4">
                <h4 className="font-semibold text-intuit-navy mb-1">{item.icon} {item.title}</h4>
                <p className="text-sm text-intuit-text-secondary">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
          <h3 className="text-xl font-semibold text-intuit-blue mb-4">Why It Matters for Researchers</h3>
          <div className="space-y-3 mb-6">
            <div className="glass-card rounded-xl p-4">
              <h4 className="font-semibold text-intuit-navy mb-1">📦 Skills Live Here</h4>
              <p className="text-sm text-intuit-text-secondary">Shared skills are stored in repos. Clone once, then <code className="bg-intuit-bg-tertiary px-1 rounded">git pull</code> for updates.</p>
            </div>
            <div className="glass-card rounded-xl p-4">
              <h4 className="font-semibold text-intuit-navy mb-1">🤝 Share & Contribute</h4>
              <p className="text-sm text-intuit-text-secondary">Create a skill? Open a PR to share it with the team.</p>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-intuit-blue mb-3">Key Commands</h3>
          <div className="code-block rounded-xl p-4 text-sm font-mono">
            <p className="text-green-400"># Clone (download) the repo</p>
            <p className="text-gray-300">git clone https://github.intuit.com/...</p>
            <p className="text-green-400 mt-3"># Get latest updates</p>
            <p className="text-gray-300">git pull</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

// Slide 5: Section - Marvin MCP
function MarvinSectionSlide() {
  return (
    <div className="h-full flex flex-col justify-center items-center px-16 bg-gradient-to-br from-intuit-positive to-intuit-blue text-white relative">
      <span className="absolute top-16 right-20 text-[8rem] font-extrabold opacity-20">01</span>
      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold"
      >
        Setting Up Marvin MCP
      </motion.h2>
    </div>
  )
}

// Slide 6: Marvin Tools
function MarvinToolsSlide() {
  const tools = [
    { name: 'search', desc: 'Fast keyword search across transcripts (<2s)' },
    { name: 'ask', desc: 'AI-synthesized answers with citations (10-55s)' },
    { name: 'list_projects', desc: 'See all your research projects' },
    { name: 'list_project_files', desc: 'List interviews/files in a project' },
    { name: 'get_file_summary', desc: 'Quick overview of an interview' },
    { name: 'get_file_content', desc: 'Full transcript, notes, and responses' },
  ]

  const prompts = [
    '"What do users say about onboarding?"',
    '"List my Marvin projects"',
    '"Summarize the most recent interview"',
    '"Find quotes about pricing concerns"',
  ]

  return (
    <div className="h-full flex flex-col px-16 py-12">
      <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold text-intuit-navy mb-2">
        What Marvin MCP Gives You
      </motion.h2>
      <p className="text-intuit-text-secondary mb-8">Once connected, you can query your research data directly from Cursor:</p>
      <div className="grid grid-cols-2 gap-10 flex-1">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
          <h3 className="text-xl font-semibold text-intuit-blue mb-4">Available Tools</h3>
          <div className="bg-white rounded-xl border border-intuit-border-primary overflow-hidden">
            <div className="grid grid-cols-2 bg-intuit-navy text-white font-semibold text-sm">
              <div className="p-3">Tool</div>
              <div className="p-3">What It Does</div>
            </div>
            {tools.map((t, i) => (
              <div key={t.name} className={`grid grid-cols-2 text-sm ${i % 2 === 0 ? 'bg-intuit-bg-secondary' : 'bg-white'}`}>
                <div className="p-3 font-mono text-intuit-blue">{t.name}</div>
                <div className="p-3 text-intuit-text-secondary">{t.desc}</div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
          <h3 className="text-xl font-semibold text-intuit-blue mb-4">Example Prompts</h3>
          <div className="glass-card rounded-xl p-5 space-y-3">
            {prompts.map((p, i) => (
              <div key={i} className="font-mono text-intuit-navy text-sm py-2 border-b border-intuit-border-tertiary last:border-0">{p}</div>
            ))}
          </div>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-6">
        <h3 className="text-lg font-semibold text-intuit-navy mb-2">Add to your MCP config</h3>
        <code className="code-block rounded-lg px-4 py-2 text-sm inline-block">
          <span className="text-blue-300">"Marvin"</span>: {'{'} <span className="text-blue-300">"url"</span>: <span className="text-orange-300">"https://mcp.heymarvin.com"</span> {'}'}
        </code>
      </motion.div>
    </div>
  )
}

// Slide 7: Marvin Setup Steps
function MarvinSetupSlide() {
  return (
    <div className="h-full flex flex-col px-16 py-12">
      <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold text-intuit-navy mb-8">
        Setup: 3 Simple Steps
      </motion.h2>
      <div className="grid grid-cols-2 gap-10 flex-1">
        <div className="space-y-6">
          {[
            { num: 1, title: 'Add Marvin to MCP Config', desc: '⌘+Shift+P → "Open MCP Settings" → copy code to config file' },
            { num: 2, title: 'Restart Cursor', desc: 'Quit and reopen so it picks up the config' },
            { num: 3, title: 'Connect & Authenticate', desc: 'Settings → MCP → Find Marvin → Connect' },
          ].map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15 }}
              className="flex gap-5"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-intuit-blue to-intuit-navy text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                {step.num}
              </div>
              <div>
                <h4 className="text-lg font-semibold text-intuit-navy">{step.title}</h4>
                <p className="text-intuit-text-secondary">{step.desc}</p>
              </div>
            </motion.div>
          ))}
          <div className="p-4 bg-gradient-to-r from-intuit-positive/10 to-intuit-blue/10 border-l-4 border-intuit-positive rounded-r-xl mt-4">
            <p className="text-intuit-text-primary"><strong>Verify:</strong> Type "List my Marvin projects"</p>
          </div>
        </div>
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
          <div className="code-block rounded-xl p-5 text-sm font-mono h-fit">
            <p className="text-green-400">// ~/.cursor/mcp.json</p>
            <p className="text-gray-300">{'{'}</p>
            <p className="text-gray-300 ml-4"><span className="text-blue-300">"mcpServers"</span>: {'{'}</p>
            <p className="text-gray-300 ml-8"><span className="text-blue-300">"Marvin"</span>: {'{'}</p>
            <p className="text-gray-300 ml-12"><span className="text-blue-300">"url"</span>: <span className="text-orange-300">"https://mcp.heymarvin.com"</span></p>
            <p className="text-gray-300 ml-8">{'}'}</p>
            <p className="text-gray-300 ml-4">{'}'}</p>
            <p className="text-gray-300">{'}'}</p>
          </div>
          <p className="text-sm text-intuit-text-secondary mt-3">Already have other MCPs? Add Marvin with a comma after the previous entry.</p>
        </motion.div>
      </div>
    </div>
  )
}

// Slide 8: Cursor vs Claude Desktop
function ComparisonSlide() {
  return (
    <div className="h-full flex flex-col px-16 py-12">
      <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold text-intuit-navy mb-2">
        Cursor vs Claude Desktop vs Claude Code
      </motion.h2>
      <p className="text-intuit-text-secondary mb-6">All three connect to Marvin via MCP. The difference is the environment around the conversation.</p>
      <div className="grid grid-cols-3 gap-5 flex-1">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="glass-card rounded-2xl p-5">
          <h4 className="text-lg font-bold text-intuit-navy mb-3 flex items-center gap-2">
            <span className="w-9 h-9 rounded-xl bg-intuit-purple text-white flex items-center justify-center font-bold text-sm">C</span>
            Claude Desktop
          </h4>
          <ul className="space-y-2 text-intuit-text-primary text-sm">
            {[
              'Clean conversational interface',
              'Feels like a research assistant',
              'No file trees or code clutter',
              'Simpler setup for non-technical users',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 flex-shrink-0" />
                {item}
              </li>
            ))}
            <li className="font-semibold text-intuit-purple pt-2 text-sm">Best for: pure research queries</li>
          </ul>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card rounded-2xl p-5 border-2 border-intuit-positive relative">
          <span className="absolute -top-3 right-4 bg-intuit-positive text-white text-xs font-semibold px-2 py-1 rounded-full">RECOMMENDED</span>
          <h4 className="text-lg font-bold text-intuit-navy mb-3 flex items-center gap-2">
            <span className="w-9 h-9 rounded-xl bg-intuit-blue text-white flex items-center justify-center font-bold text-sm">↯</span>
            Cursor
          </h4>
          <ul className="space-y-2 text-intuit-text-primary text-sm">
            {[
              'Research + code in same session',
              'Create docs, specs, reports',
              'Skills automate workflows',
              'Visual UI with file explorer',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-intuit-positive mt-1.5 flex-shrink-0" />
                {item}
              </li>
            ))}
            <li className="font-semibold text-intuit-positive pt-2 text-sm">Best for: research + artifacts</li>
          </ul>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="glass-card rounded-2xl p-5">
          <h4 className="text-lg font-bold text-intuit-navy mb-3 flex items-center gap-2">
            <span className="w-9 h-9 rounded-xl bg-intuit-orange text-white flex items-center justify-center font-bold text-sm">&gt;_</span>
            Claude Code
          </h4>
          <ul className="space-y-2 text-intuit-text-primary text-sm">
            {[
              'Terminal-native (no GUI needed)',
              'Git-aware with shell integration',
              'Works in any directory',
              'Great for heavy refactoring',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-intuit-orange mt-1.5 flex-shrink-0" />
                {item}
              </li>
            ))}
            <li className="font-semibold text-intuit-orange pt-2 text-sm">Best for: terminal power users</li>
          </ul>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-4 p-3 bg-gradient-to-r from-intuit-positive/10 to-intuit-blue/10 border-l-4 border-intuit-positive rounded-r-xl">
        <p className="text-sm"><strong>For UX Researchers:</strong> Cursor is recommended — visual interface, skills support, and great for creating deliverables from research.</p>
      </motion.div>
    </div>
  )
}

// Slide 9: Section - Skills
function SkillsSectionSlide() {
  return (
    <div className="h-full flex flex-col justify-center items-center px-16 bg-gradient-to-br from-intuit-positive to-intuit-blue text-white relative">
      <span className="absolute top-16 right-20 text-[8rem] font-extrabold opacity-20">02</span>
      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold"
      >
        Installing Skills
      </motion.h2>
    </div>
  )
}

// Slide 10: What Are Skills
function WhatAreSkillsSlide() {
  return (
    <div className="h-full flex flex-col px-16 py-12">
      <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold text-intuit-navy mb-8">
        What Are Skills?
      </motion.h2>
      <div className="grid grid-cols-2 gap-10 flex-1">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
          <p className="text-lg text-intuit-text-primary mb-6">
            <strong>Skills</strong> are reusable instruction sets that teach the agent how to perform specific tasks consistently.
          </p>
          <div className="space-y-4">
            <div className="glass-card rounded-xl p-5">
              <div className="text-3xl mb-2">📂</div>
              <h4 className="text-lg font-semibold text-intuit-navy mb-2">Local Skills</h4>
              <p className="text-intuit-text-secondary">Skills in your <code className="bg-intuit-bg-tertiary px-1 rounded">~/.cursor/skills/</code> folder. Personal, private, always available.</p>
            </div>
            <div className="glass-card rounded-xl p-5">
              <div className="text-3xl mb-2">🌐</div>
              <h4 className="text-lg font-semibold text-intuit-navy mb-2">Repo Skills</h4>
              <p className="text-intuit-text-secondary">Skills from the innersource-skills repo. Shared, maintained, community-driven.</p>
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
          <h3 className="text-xl font-semibold text-intuit-blue mb-4">Skill Anatomy</h3>
          <div className="code-block rounded-xl p-5 text-sm font-mono">
            <p className="text-green-400"># ~/.cursor/skills/my-skill/SKILL.md</p>
            <p className="text-gray-300 mt-3">---</p>
            <p className="text-gray-300">name: my-skill</p>
            <p className="text-gray-300">description: "Triggers when user says..."</p>
            <p className="text-gray-300">---</p>
            <p className="text-gray-300 mt-3"># My Skill</p>
            <p className="text-gray-300 mt-2">## When to Use</p>
            <p className="text-gray-300">- User asks to do X</p>
            <p className="text-gray-300">- User mentions Y</p>
            <p className="text-gray-300 mt-2">## Workflow</p>
            <p className="text-gray-300">1. Step one</p>
            <p className="text-gray-300">2. Step two</p>
            <p className="text-gray-300 mt-2">## Output Format</p>
            <p className="text-gray-300">[Expected output structure]</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

// Slide 11: Installing Local Skills
function LocalSkillsSlide() {
  return (
    <div className="h-full flex flex-col px-16 py-12">
      <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold text-intuit-navy mb-8">
        Installing Local Skills
      </motion.h2>
      <div className="space-y-6 flex-1">
        {[
          { num: 1, title: 'Create the skills folder', code: 'mkdir -p ~/.cursor/skills' },
          { num: 2, title: 'Create a skill folder with SKILL.md', code: 'mkdir ~/.cursor/skills/save-to-marvin\ntouch ~/.cursor/skills/save-to-marvin/SKILL.md\n# Then edit SKILL.md with your skill instructions' },
          { num: 3, title: 'Verify it works', desc: 'Start a new chat and try a trigger phrase from your skill. Cursor automatically loads skills from ~/.cursor/skills/' },
        ].map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15 }}
            className="flex gap-5"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-intuit-blue to-intuit-navy text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
              {step.num}
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-intuit-navy mb-2">{step.title}</h4>
              {step.code && (
                <div className="code-block rounded-xl p-4 text-sm font-mono">
                  {step.code.split('\n').map((line, j) => (
                    <p key={j} className={line.startsWith('#') ? 'text-green-400' : 'text-gray-300'}>{line}</p>
                  ))}
                </div>
              )}
              {step.desc && <p className="text-intuit-text-secondary">{step.desc}</p>}
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="p-4 bg-gradient-to-r from-intuit-positive/10 to-intuit-blue/10 border-l-4 border-intuit-positive rounded-r-xl">
        <p><strong>Pro tip:</strong> Skills are just markdown files! Copy from a colleague or the skills repo and customize.</p>
      </motion.div>
    </div>
  )
}

// Slide 12: Installing from Skills Repo
function RepoSkillsSlide() {
  return (
    <div className="h-full flex flex-col px-16 py-12">
      <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold text-intuit-navy mb-2">
        Installing from a Skills Repo
      </motion.h2>
      <p className="text-intuit-text-secondary mb-6">Cursor looks for skills in <code className="bg-intuit-bg-tertiary px-1 rounded">~/.cursor/skills/</code>. Cloning a repo isn't enough — you need to copy or symlink.</p>
      <div className="space-y-5 flex-1">
        {[
          { num: 1, title: 'Clone the repo', code: 'git clone [your-skills-repo-url] ~/skills-repo' },
          { num: 2, title: 'Option A: Copy (one-time)', code: 'cp -r ~/skills-repo/.claude/skills/[skill-name] ~/.cursor/skills/', note: 'Works globally, but you will need to re-copy when the repo updates.' },
          { num: 3, title: 'Option B: Symlink (recommended)', code: 'ln -s ~/skills-repo/.claude/skills/[skill-name] ~/.cursor/skills/', note: 'Works globally AND stays updated when you git pull.' },
        ].map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15 }}
            className="flex gap-5"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-intuit-blue to-intuit-navy text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
              {step.num}
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-intuit-navy mb-2">{step.title}</h4>
              <div className="code-block rounded-xl p-3 text-sm font-mono inline-block">
                <p className="text-gray-300">{step.code}</p>
              </div>
              {step.note && <p className="text-sm text-intuit-text-secondary mt-2">{step.note}</p>}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// Slide 13: Save to Marvin Skill
function SaveToMarvinSlide() {
  return (
    <div className="h-full flex flex-col px-16 py-12">
      <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold text-intuit-navy mb-2">
        Example Skill: Save to Marvin
      </motion.h2>
      <p className="text-intuit-text-secondary mb-6">Save your analysis back to Marvin as a note — completing the research loop.</p>
      <div className="grid grid-cols-2 gap-10 flex-1">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
          <h3 className="text-xl font-semibold text-intuit-blue mb-4">Triggers</h3>
          <div className="glass-card rounded-xl p-5 mb-6">
            {['"Save to Marvin"', '"Export to Marvin"', '"Put this in Marvin"'].map((t, i) => (
              <p key={i} className="font-mono text-intuit-navy py-2">{t}</p>
            ))}
          </div>
          <h3 className="text-xl font-semibold text-intuit-blue mb-4">What It Does</h3>
          <ol className="space-y-2 text-intuit-text-primary ml-5 list-decimal">
            <li>Fetches your Marvin projects list</li>
            <li>Helps you pick the right project</li>
            <li>Formats your content as markdown</li>
            <li>Saves file and opens Marvin for upload</li>
          </ol>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
          <h3 className="text-xl font-semibold text-intuit-blue mb-4">Example</h3>
          <div className="glass-card rounded-xl p-5 text-sm">
            <p className="text-intuit-text-secondary italic mb-4">After synthesizing research findings...</p>
            <p className="mb-3"><strong>You:</strong> "Save that analysis to Marvin"</p>
            <p className="mb-3"><strong>Agent:</strong> "Which project? Search by name or browse recent ones."</p>
            <p className="mb-3"><strong>You:</strong> "Provider management"</p>
            <p className="mb-3"><strong>Agent:</strong> "Found 'Provider Management' (ID: 35723). What should I title this note?"</p>
            <p className="mb-4"><strong>You:</strong> "Q1 User Research Findings"</p>
            <div className="text-intuit-positive font-medium">
              <p>✓ Saved to ~/Downloads/q1-user-research-findings.txt</p>
              <p>✓ Opened Marvin project in browser</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

// Slide 14: Section - Research Skills
function ResearchSectionSlide() {
  return (
    <div className="h-full flex flex-col justify-center items-center px-16 bg-gradient-to-br from-intuit-positive to-intuit-blue text-white relative">
      <span className="absolute top-16 right-20 text-[8rem] font-extrabold opacity-20">03</span>
      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold"
      >
        Research Skills Deep Dive
      </motion.h2>
    </div>
  )
}

// Slide 15: Research Skills Table
function ResearchSkillsTableSlide() {
  const skills = [
    { name: 'querying-customer-research', desc: 'Query Marvin for interviews, surveys, studies', triggers: '"Search Marvin", "What do users say about..."', source: 'repo' },
    { name: 'save-to-marvin', desc: 'Save analysis/insights back to Marvin', triggers: '"Save to Marvin", "Export to Marvin"', source: 'local' },
    { name: 'synthesizing-user-interviews', desc: 'Turn transcripts into FMH Insights reports', triggers: '"Synthesize interview", "FMH report"', source: 'repo' },
    { name: 'researcher', desc: 'Web + YouTube research synthesis', triggers: '"Research X", "Find information about..."', source: 'repo' },
    { name: 'persona-generator', desc: 'Generate user personas from research', triggers: '"Generate persona", "Create user persona"', source: 'local' },
  ]

  return (
    <div className="h-full flex flex-col px-16 py-12">
      <div className="mb-6">
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold text-intuit-navy mb-2">
          Research Skills for UX
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-intuit-text-secondary"
        >
          <a
            href="https://github.intuit.com/pages/snandwani2/innersource-skills/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-intuit-blue font-medium hover:underline"
          >
            Skills Repo
          </a>
        </motion.p>
      </div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex-1 min-h-0">
        <div className="bg-white rounded-xl border border-intuit-border-primary overflow-hidden">
          <div className="grid grid-cols-4 bg-intuit-navy text-white font-semibold text-sm">
            <div className="p-4">Skill</div>
            <div className="p-4">What It Does</div>
            <div className="p-4">Trigger Phrases</div>
            <div className="p-4">Source</div>
          </div>
          {skills.map((s, i) => (
            <div key={s.name} className={`grid grid-cols-4 text-sm ${i % 2 === 0 ? 'bg-intuit-bg-secondary' : 'bg-white'}`}>
              <div className="p-4 font-semibold text-intuit-navy">{s.name}</div>
              <div className="p-4 text-intuit-text-secondary">{s.desc}</div>
              <div className="p-4 text-intuit-text-secondary font-mono text-xs">{s.triggers}</div>
              <div className="p-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${s.source === 'repo' ? 'badge-repo' : 'badge-local'}`}>
                  {s.source === 'repo' ? 'Repo' : 'Local'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

// Slide 16: Querying Customer Research
function QueryingResearchSlide() {
  return (
    <div className="h-full flex flex-col px-16 py-12">
      <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold text-intuit-navy mb-8">
        Skill: querying-customer-research
      </motion.h2>
      <div className="grid grid-cols-2 gap-10 flex-1">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
          <h3 className="text-xl font-semibold text-intuit-blue mb-4">When to Use</h3>
          <ul className="space-y-2 text-intuit-text-primary mb-8 ml-5 list-disc">
            <li>Searching what customers said about a topic</li>
            <li>Validating a design or product decision</li>
            <li>Exploring available research projects</li>
            <li>Synthesizing themes across interviews</li>
            <li>Getting summaries of specific interviews</li>
            <li>Pulling exact quotes for presentations</li>
          </ul>
          <h3 className="text-xl font-semibold text-intuit-blue mb-4">Search vs Ask</h3>
          <div className="bg-white rounded-xl border border-intuit-border-primary overflow-hidden text-sm">
            <div className="grid grid-cols-2 border-b border-intuit-border-primary">
              <div className="p-3 font-semibold text-intuit-navy">search</div>
              <div className="p-3 text-intuit-text-secondary">Fast (&lt;2s), exact keyword matches</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="p-3 font-semibold text-intuit-navy">ask</div>
              <div className="p-3 text-intuit-text-secondary">Slow (10-55s), AI-synthesized answers</div>
            </div>
          </div>
          <p className="text-sm text-intuit-text-secondary mt-3">Rule: Always use <code className="bg-intuit-bg-tertiary px-1 rounded">search</code> first. Only escalate to <code className="bg-intuit-bg-tertiary px-1 rounded">ask</code> for synthesis.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
          <h3 className="text-xl font-semibold text-intuit-blue mb-4">Example Prompts</h3>
          <div className="space-y-3">
            {[
              '"What do users say about onboarding?"',
              '"Search Marvin for pricing feedback"',
              '"Summarize the Alpha interviews"',
              '"Find quotes about contract renewals"',
            ].map((p, i) => (
              <div key={i} className="glass-card rounded-xl p-4 font-mono text-intuit-navy text-sm">{p}</div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

// Slide 17: Synthesizing User Interviews
function SynthesizingSlide() {
  return (
    <div className="h-full flex flex-col px-16 py-12">
      <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold text-intuit-navy mb-8">
        Skill: synthesizing-user-interviews
      </motion.h2>
      <div className="grid grid-cols-2 gap-10 flex-1">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
          <h3 className="text-xl font-semibold text-intuit-blue mb-4">What It Does</h3>
          <p className="text-intuit-text-primary mb-6">Transforms raw transcripts into structured <strong>Follow-Me-Home Insights</strong> reports using Teresa Torres' Continuous Discovery framework.</p>
          <h3 className="text-xl font-semibold text-intuit-blue mb-4">Input Formats</h3>
          <ul className="space-y-1 text-intuit-text-primary mb-6 ml-5 list-disc">
            <li>WEBVTT transcripts (Zoom, Teams)</li>
            <li>Speaker-labeled transcripts</li>
            <li>Meeting notes</li>
            <li>Raw conversation text</li>
          </ul>
          <h3 className="text-xl font-semibold text-intuit-blue mb-4">Output Formats</h3>
          <ul className="space-y-1 text-intuit-text-primary ml-5 list-disc">
            <li><strong>HTML</strong> — Beautiful, shareable report</li>
            <li><strong>Markdown</strong> — For docs/wikis</li>
            <li><strong>Console</strong> — Quick inline output</li>
          </ul>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
          <h3 className="text-xl font-semibold text-intuit-blue mb-4">Report Sections</h3>
          <div className="glass-card rounded-xl p-5 text-sm">
            <p className="font-semibold text-intuit-navy mb-2">Always Included:</p>
            <ul className="space-y-1 text-intuit-text-primary mb-4 ml-5 list-disc">
              <li>Header (title, date, participants)</li>
              <li>Participant Profiles</li>
              <li>Opportunities Identified</li>
              <li>Key Quotes (4-6 verbatim)</li>
              <li>Patterns & Themes</li>
            </ul>
            <p className="font-semibold text-intuit-navy mb-2">When Supported:</p>
            <ul className="space-y-1 text-intuit-text-primary ml-5 list-disc">
              <li>Key Stats Banner</li>
              <li>Jobs-to-be-Done (JTBD)</li>
              <li>Goals & Frustrations</li>
              <li>Current Solutions</li>
              <li>Action Items</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

// Slide 18: Troubleshooting
function TroubleshootingSlide() {
  const issues = [
    { problem: 'Marvin not in MCP list', cause: 'Config not saved or Cursor not restarted', fix: 'Save mcp.json, fully quit and reopen Cursor' },
    { problem: '403 "You need access"', cause: 'Your Marvin role is Viewer', fix: 'Ask your Marvin team admin for Contributor role' },
    { problem: 'Only mcp_auth tool visible', cause: 'OAuth not completed', fix: 'Settings → MCP → Click Connect → Complete login' },
    { problem: 'Tools appear but return errors', cause: 'OAuth token expired', fix: 'Disconnect and reconnect in Settings → MCP' },
    { problem: 'Skill not triggering', cause: 'Skill not in search path', fix: 'Verify path in Settings → Features → Agent Skills' },
  ]

  return (
    <div className="h-full flex flex-col px-16 py-12">
      <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold text-intuit-navy mb-8">
        Troubleshooting
      </motion.h2>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex-1">
        <div className="bg-white rounded-xl border border-intuit-border-primary overflow-hidden">
          <div className="grid grid-cols-3 bg-intuit-navy text-white font-semibold text-sm">
            <div className="p-4">Problem</div>
            <div className="p-4">Cause</div>
            <div className="p-4">Fix</div>
          </div>
          {issues.map((item, i) => (
            <div key={i} className={`grid grid-cols-3 text-sm ${i % 2 === 0 ? 'bg-intuit-bg-secondary' : 'bg-white'}`}>
              <div className="p-4 text-intuit-navy font-medium">{item.problem}</div>
              <div className="p-4 text-intuit-text-secondary">{item.cause}</div>
              <div className="p-4 text-intuit-text-primary">{item.fix}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

// Slide 19: Quick Tips
function QuickTipsSlide() {
  const tips = [
    {
      emoji: '📂',
      question: 'How do I find my skills folder?',
      answer: 'Run this in Terminal:',
      code: 'open ~/.cursor/skills',
      note: 'Opens the folder in Finder where all your local skills live.',
    },
    {
      emoji: '🔗',
      question: 'How do I create a shareable link?',
      answer: 'Ask Cursor to deploy to GitHub Pages:',
      code: '"Save this presentation to GitHub Pages"',
      note: 'Creates a public URL you can share with anyone.',
    },
    {
      emoji: '💬',
      question: 'How do I find a previous chat?',
      answer: 'Two options:',
      code: null,
      note: '1. Always open the same project folder — chats stay with the folder.\n2. Recent chats appear in the sidebar under "History".',
    },
    {
      emoji: '📎',
      question: 'How do I give context to the agent?',
      answer: 'Use @ to reference files or folders:',
      code: '@context/product-brief.md',
      note: 'The agent will read the file before answering.',
    },
    {
      emoji: '🤖',
      question: 'Agent mode vs Ask mode?',
      answer: 'Use the toggle in chat or press ⌘+.',
      code: null,
      note: 'Agent = can edit files. Ask = read-only, just answers questions.',
    },
  ]

  return (
    <div className="h-full flex flex-col px-16 py-12">
      <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold text-intuit-navy mb-8">
        Quick Tips
      </motion.h2>
      <div className="grid grid-cols-2 gap-5 flex-1">
        {tips.slice(0, 4).map((tip, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card rounded-2xl p-5"
          >
            <div className="flex items-start gap-4">
              <div className="text-3xl">{tip.emoji}</div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-intuit-navy mb-2">{tip.question}</h4>
                <p className="text-sm text-intuit-text-secondary mb-2">{tip.answer}</p>
                {tip.code && (
                  <div className="code-block rounded-lg px-3 py-2 text-sm font-mono mb-2">
                    <span className="text-green-400">{tip.code}</span>
                  </div>
                )}
                <p className="text-xs text-intuit-text-tertiary whitespace-pre-line">{tip.note}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="glass-card rounded-2xl p-5 mt-4"
      >
        <div className="flex items-start gap-4">
          <div className="text-3xl">{tips[4].emoji}</div>
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-intuit-navy mb-2">{tips[4].question}</h4>
            <p className="text-sm text-intuit-text-secondary mb-2">{tips[4].answer}</p>
            <p className="text-xs text-intuit-text-tertiary">{tips[4].note}</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

// Slide 20: Hands-On Setup
function ThankYouSlide() {
  return (
    <div className="h-full flex flex-col justify-center items-center px-16 bg-gradient-to-br from-intuit-positive to-intuit-blue text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-6xl font-extrabold mb-6">Hands-On Setup</h1>
        <p className="text-2xl opacity-90 mb-12">Setup your MCP and Skills</p>
        <div className="mt-8">
          <p className="text-lg opacity-80 mb-4">Open Cursor and try:</p>
          <div className="bg-white/15 backdrop-blur rounded-xl px-8 py-5 inline-block">
            <code className="text-xl font-mono">"List my Marvin projects"</code>
          </div>
        </div>
        <p className="mt-16 opacity-60">Questions? #cursor-users on Slack</p>
      </motion.div>
    </div>
  )
}

// Main Deck Component
export default function Deck() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < TOTAL_SLIDES) {
      setCurrentSlide(index)
    }
  }, [])

  const nextSlide = useCallback(() => goToSlide(currentSlide + 1), [currentSlide, goToSlide])
  const prevSlide = useCallback(() => goToSlide(currentSlide - 1), [currentSlide, goToSlide])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault()
        nextSlide()
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        prevSlide()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [nextSlide, prevSlide])

  const slides = [
    <TitleSlide key="1" />,
    <AgendaSlide key="2" />,
    <BasicConceptsSlide key="3" />,
    <GitHubSlide key="4" />,
    <MarvinSectionSlide key="5" />,
    <MarvinToolsSlide key="6" />,
    <MarvinSetupSlide key="7" />,
    <SkillsSectionSlide key="8" />,
    <WhatAreSkillsSlide key="9" />,
    <LocalSkillsSlide key="10" />,
    <RepoSkillsSlide key="11" />,
    <SaveToMarvinSlide key="12" />,
    <ResearchSectionSlide key="13" />,
    <ResearchSkillsTableSlide key="14" />,
    <QueryingResearchSlide key="15" />,
    <SynthesizingSlide key="16" />,
    <TroubleshootingSlide key="17" />,
    <ComparisonSlide key="18" />,
    <QuickTipsSlide key="19" />,
    <ThankYouSlide key="20" />,
  ]

  return (
    <div className="w-screen h-screen bg-intuit-bg-primary relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.07]"
          style={{ background: 'radial-gradient(circle, #0077C5 0%, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full opacity-[0.05]"
          style={{ background: 'radial-gradient(circle, #0097A7 0%, transparent 70%)' }}
        />
      </div>

      {/* Progress bar */}
      <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-intuit-positive to-intuit-blue z-30 transition-all duration-300"
        style={{ width: `${((currentSlide + 1) / TOTAL_SLIDES) * 100}%` }}
      />

      {/* Header */}
      <div className="absolute top-6 left-16 right-16 flex justify-between items-center z-20">
        <div className="flex items-center gap-3">
          <span className="text-intuit-navy text-lg font-bold">Intuit</span>
          <span className="text-intuit-text-tertiary">|</span>
          <span className="text-intuit-blue text-lg font-semibold">UX Research</span>
        </div>
        <div className="text-intuit-text-tertiary text-sm">
          {currentSlide + 1} / {TOTAL_SLIDES}
        </div>
      </div>

      {/* Slide content */}
      <div className="relative z-10 h-full pt-16 pb-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="h-full"
          >
            {slides[currentSlide]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="absolute bottom-6 left-16 right-16 flex justify-between items-center z-20">
        <div className="flex gap-2">
          {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`h-2 rounded-full transition-all ${
                i === currentSlide ? 'bg-intuit-blue w-6' : 'bg-intuit-text-tertiary/40 w-2'
              }`}
            />
          ))}
        </div>
        <div className="flex gap-4">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="px-4 py-2 rounded-lg text-sm text-intuit-text-primary disabled:opacity-30 hover:bg-intuit-bg-secondary transition-colors"
          >
            ← Previous
          </button>
          <button
            onClick={nextSlide}
            disabled={currentSlide === TOTAL_SLIDES - 1}
            className="px-4 py-2 rounded-lg text-sm text-intuit-blue bg-intuit-blue/10 hover:bg-intuit-blue/20 transition-colors disabled:opacity-30"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  )
}
