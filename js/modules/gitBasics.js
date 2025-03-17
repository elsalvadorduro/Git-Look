// Git Basics Module

export const gitBasicsModule = {
    id: 'git-basics',
    title: 'Git Basics: Understanding the Fundamentals',
    description: 'Learn the core concepts of Git and why it matters for developers.',
    content: `
        <h2>What is Git?</h2>
        <p>Git is a distributed Version Control System that helps you track and manage code changes over time.</p>
        <p>Unlike traditional version control systems, Git gives every developer a complete copy of the code repository, including its entire history.</p>
        
        <h3>Why Git Matters</h3>
        <p>Imagine working on a project without Git:</p>
        <ul>
            <li>Creating multiple folder copies (project_v1, project_v2, etc.)</li>
            <li>Manually tracking changes between versions</li>
            <li>Struggling to collaborate with team members</li>
            <li>No easy way to revert mistakes</li>
        </ul>
        
        <p>Git solves these problems by:</p>
        <ul>
            <li>Automatically tracking every change</li>
            <li>Enabling seamless collaboration</li>
            <li>Providing a complete history of your project</li>
            <li>Allowing you to easily revert to previous versions</li>
        </ul>
        
        <h3>Getting Started with Git</h3>
        <p>To begin using Git, you need to:</p>
        <ol>
            <li>Install Git on your computer</li>
            <li>Configure your identity with your name and email</li>
            <li>Create or clone a repository</li>
        </ol>
    `,
    quiz: {
        id: 'git-basics-quiz',
        title: 'Test Your Git Basics Knowledge',
        questions: [
            {
                id: 'q1',
                question: 'What type of Version Control System is Git?',
                options: [
                    { id: 'q1-a', text: 'Centralized Version Control System' },
                    { id: 'q1-b', text: 'Distributed Version Control System' },
                    { id: 'q1-c', text: 'Linear Version Control System' },
                    { id: 'q1-d', text: 'Hierarchical Version Control System' }
                ],
                correctAnswer: 'q1-b',
                explanation: 'Git is a Distributed Version Control System, meaning every developer has a complete copy of the repository including its history.'
            },
            {
                id: 'q2',
                question: 'Why would a developer use Git?',
                options: [
                    { id: 'q2-a', text: 'To make their code run faster' },
                    { id: 'q2-b', text: 'To automatically fix bugs in their code' },
                    { id: 'q2-c', text: 'To track changes and collaborate with others' },
                    { id: 'q2-d', text: 'To compile code for different platforms' }
                ],
                correctAnswer: 'q2-c',
                explanation: 'Git helps developers track changes to their code over time and collaborate effectively with team members.'
            },
            {
                id: 'q3',
                question: 'What information do you need to configure when setting up Git for the first time?',
                options: [
                    { id: 'q3-a', text: 'Your server IP address' },
                    { id: 'q3-b', text: 'Your name and email' },
                    { id: 'q3-c', text: 'Your GitHub password' },
                    { id: 'q3-d', text: 'Your computer's MAC address' }
                ],
                correctAnswer: 'q3-b',
                explanation: 'When setting up Git, you need to configure your name and email using git config commands. This information is used to identify who made each commit.'
            },
            {
                id: 'q4',
                question: 'What command initializes a new Git repository?',
                options: [
                    { id: 'q4-a', text: 'git start' },
                    { id: 'q4-b', text: 'git create' },
                    { id: 'q4-c', text: 'git init' },
                    { id: 'q4-d', text: 'git new' }
                ],
                correctAnswer: 'q4-c',
                explanation: 'The git init command creates a new Git repository. It initializes a .git directory with all the files needed for Git version control.'
            },
            {
                id: 'q5',
                question: 'What does the command "git status" do?',
                options: [
                    { id: 'q5-a', text: 'Shows the commit history' },
                    { id: 'q5-b', text: 'Shows the current branch name' },
                    { id: 'q5-c', text: 'Shows the state of files in your working directory and staging area' },
                    { id: 'q5-d', text: 'Shows the status of the remote repository' }
                ],
                correctAnswer: 'q5-c',
                explanation: 'The git status command displays the state of the working directory and the staging area. It shows which changes have been staged, which haven\'t, and which files aren\'t being tracked by Git.'
            },
            {
                id: 'q6',
                question: 'What is a Git commit?',
                options: [
                    { id: 'q6-a', text: 'A promise to make changes later' },
                    { id: 'q6-b', text: 'A snapshot of your repository at a specific point in time' },
                    { id: 'q6-c', text: 'A connection to a remote repository' },
                    { id: 'q6-d', text: 'A request to merge code' }
                ],
                correctAnswer: 'q6-b',
                explanation: 'A commit in Git is a snapshot of your repository at a specific point in time. It records the state of all files in your repository, allowing you to track changes over time.'
            },
            {
                id: 'q7',
                question: 'What is the purpose of the .gitignore file?',
                options: [
                    { id: 'q7-a', text: 'To list files that Git should delete' },
                    { id: 'q7-b', text: 'To specify files that Git should prioritize' },
                    { id: 'q7-c', text: 'To specify intentionally untracked files that Git should ignore' },
                    { id: 'q7-d', text: 'To store Git configuration settings' }
                ],
                correctAnswer: 'q7-c',
                explanation: 'The .gitignore file specifies intentionally untracked files that Git should ignore. Files already tracked by Git are not affected by adding them to .gitignore.'
            },
            {
                id: 'q8',
                question: 'What is the difference between git add and git commit?',
                options: [
                    { id: 'q8-a', text: 'git add creates a new repository while git commit clones an existing one' },
                    { id: 'q8-b', text: 'git add stages changes for commit while git commit records those changes in the repository' },
                    { id: 'q8-c', text: 'git add is for adding new files while git commit is only for modifying existing files' },
                    { id: 'q8-d', text: 'git add is used locally while git commit sends changes to a remote repository' }
                ],
                correctAnswer: 'q8-b',
                explanation: 'git add stages changes for commit by adding them to the staging area (index), while git commit takes the staged snapshot and commits it to the project history.'
            },
            {
                id: 'q9',
                question: 'What does the command git log do?',
                options: [
                    { id: 'q9-a', text: 'Shows a list of all files in the repository' },
                    { id: 'q9-b', text: 'Shows the commit history of the repository' },
                    { id: 'q9-c', text: 'Shows the status of the working directory' },
                    { id: 'q9-d', text: 'Shows a list of all branches in the repository' }
                ],
                correctAnswer: 'q9-b',
                explanation: 'The git log command displays the commit history of the repository, showing information such as commit hashes, authors, dates, and commit messages.'
            },
            {
                id: 'q10',
                question: 'What is a detached HEAD state in Git?',
                options: [
                    { id: 'q10-a', text: 'When Git cannot find the repository's .git directory' },
                    { id: 'q10-b', text: 'When you have uncommitted changes in your working directory' },
                    { id: 'q10-c', text: 'When your HEAD is pointing directly to a commit instead of a branch' },
                    { id: 'q10-d', text: 'When there is a conflict between local and remote repositories' }
                ],
                correctAnswer: 'q10-c',
                explanation: 'A detached HEAD state occurs when your HEAD pointer references a specific commit instead of a branch. This happens when you checkout a specific commit, tag, or remote branch.'
            }
        ]
    },
    animations: [
        {
            id: 'git-workflow-animation',
            title: 'Basic Git Workflow',
            description: 'This animation demonstrates the basic Git workflow: modify, stage, and commit.',
            animationData: {
                type: 'workflow',
                steps: [
                    { id: 'step1', text: 'Modify files in your working directory', position: { x: 50, y: 50 } },
                    { id: 'step2', text: 'Stage changes using git add', position: { x: 200, y: 100 } },
                    { id: 'step3', text: 'Commit changes using git commit', position: { x: 350, y: 150 } },
                    { id: 'step4', text: 'Push changes to remote repository', position: { x: 500, y: 200 } }
                ],
                connections: [
                    { from: 'step1', to: 'step2', label: 'git add' },
                    { from: 'step2', to: 'step3', label: 'git commit' },
                    { from: 'step3', to: 'step4', label: 'git push' }
                ]
            }
        },
        {
            id: 'git-areas-animation',
            title: 'Git Areas',
            description: 'This animation shows the three main areas in Git: Working Directory, Staging Area, and Repository.',
            animationData: {
                type: 'areas',
                areas: [
                    { id: 'working', name: 'Working Directory', description: 'Where you modify files', position: { x: 100, y: 100 } },
                    { id: 'staging', name: 'Staging Area (Index)', description: 'Where you prepare changes for commit', position: { x: 300, y: 100 } },
                    { id: 'repository', name: 'Repository (.git)', description: 'Where Git stores the history', position: { x: 500, y: 100 } }
                ],
                flows: [
                    { from: 'working', to: 'staging', action: 'git add', description: 'Stage changes' },
                    { from: 'staging', to: 'repository', action: 'git commit', description: 'Commit changes' },
                    { from: 'repository', to: 'working', action: 'git checkout', description: 'Checkout version' }
                ]
            }
        }
    ]
};