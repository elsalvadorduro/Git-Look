// Git Branching Module

export const branchingModule = {
    id: 'git-branching',
    title: 'Git Branching: Working with Multiple Versions',
    description: 'Learn how to use branches to manage different versions of your code.',
    content: `
        <h2>Understanding Git Branches</h2>
        <p>Branches in Git allow you to diverge from the main line of development and continue working without affecting that main line.</p>
        <p>Think of branches as separate workspaces where you can develop features, fix bugs, or experiment without affecting the main codebase.</p>
        
        <h3>Why Use Branches?</h3>
        <p>Branches are essential for modern development workflows because they:</p>
        <ul>
            <li>Allow multiple developers to work on different features simultaneously</li>
            <li>Keep the main codebase stable while developing new features</li>
            <li>Enable experimentation without risk</li>
            <li>Facilitate organized code reviews and merges</li>
        </ul>
        
        <h3>Common Branch Operations</h3>
        <p>Here are the most common operations you'll perform with branches:</p>
        <ol>
            <li><code>git branch</code> - List all branches</li>
            <li><code>git branch [branch-name]</code> - Create a new branch</li>
            <li><code>git checkout [branch-name]</code> - Switch to a branch</li>
            <li><code>git checkout -b [branch-name]</code> - Create and switch to a new branch</li>
            <li><code>git merge [branch-name]</code> - Merge a branch into your current branch</li>
            <li><code>git branch -d [branch-name]</code> - Delete a branch</li>
        </ol>
    `,
    quiz: {
        id: 'git-branching-quiz',
        title: 'Test Your Git Branching Knowledge',
        questions: [
            {
                id: 'q1',
                question: 'What is the main purpose of using branches in Git?',
                options: [
                    { id: 'q1-a', text: 'To make Git repositories smaller in size' },
                    { id: 'q1-b', text: 'To work on different features or fixes without affecting the main codebase' },
                    { id: 'q1-c', text: 'To speed up Git operations' },
                    { id: 'q1-d', text: 'To reduce the number of commits in a project' }
                ],
                correctAnswer: 'q1-b',
                explanation: 'Branches allow developers to work on different features or fixes in isolation, without affecting the main codebase until the changes are ready to be merged.'
            },
            {
                id: 'q2',
                question: 'Which command creates a new branch AND switches to it in one step?',
                options: [
                    { id: 'q2-a', text: 'git branch new-branch' },
                    { id: 'q2-b', text: 'git checkout new-branch' },
                    { id: 'q2-c', text: 'git checkout -b new-branch' },
                    { id: 'q2-d', text: 'git switch --create new-branch' }
                ],
                correctAnswer: 'q2-c',
                explanation: 'The command "git checkout -b new-branch" creates a new branch and immediately switches to it, combining two operations in one command.'
            },
            {
                id: 'q3',
                question: 'What happens when you merge a branch into another?',
                options: [
                    { id: 'q3-a', text: 'The source branch is automatically deleted' },
                    { id: 'q3-b', text: 'All commits from the source branch are copied to the target branch' },
                    { id: 'q3-c', text: 'The target branch is renamed' },
                    { id: 'q3-d', text: 'Git creates a new third branch containing both changes' }
                ],
                correctAnswer: 'q3-b',
                explanation: 'When merging, Git takes the changes from the source branch and applies them to the target branch. The source branch remains intact unless you explicitly delete it.'
            },
            {
                id: 'q4',
                question: 'What is a "fast-forward" merge in Git?',
                options: [
                    { id: 'q4-a', text: 'A merge that happens automatically without user intervention' },
                    { id: 'q4-b', text: 'A merge that occurs when the target branch pointer can simply be moved forward to the source branch commit' },
                    { id: 'q4-c', text: 'A merge that skips the staging area' },
                    { id: 'q4-d', text: 'A merge that combines multiple branches at once' }
                ],
                correctAnswer: 'q4-b',
                explanation: 'A fast-forward merge occurs when the current branch\'s pointer can simply be moved forward to point to the same commit as the branch being merged in, without creating a new merge commit.'
            },
            {
                id: 'q5',
                question: 'What command shows all branches in your repository?',
                options: [
                    { id: 'q5-a', text: 'git show branches' },
                    { id: 'q5-b', text: 'git branch' },
                    { id: 'q5-c', text: 'git list' },
                    { id: 'q5-d', text: 'git status --branches' }
                ],
                correctAnswer: 'q5-b',
                explanation: 'The git branch command without any arguments lists all local branches in your repository, with an asterisk (*) next to the currently checked out branch.'
            },
            {
                id: 'q6',
                question: 'How do you delete a branch in Git?',
                options: [
                    { id: 'q6-a', text: 'git remove branch-name' },
                    { id: 'q6-b', text: 'git branch --delete branch-name' },
                    { id: 'q6-c', text: 'git branch -d branch-name' },
                    { id: 'q6-d', text: 'git checkout --delete branch-name' }
                ],
                correctAnswer: 'q6-c',
                explanation: 'The command "git branch -d branch-name" safely deletes a branch if it has been fully merged into its upstream branch. You can also use -D (capital D) to force delete a branch regardless of its merge status.'
            },
            {
                id: 'q7',
                question: 'What is the default branch name in many Git repositories?',
                options: [
                    { id: 'q7-a', text: 'master' },
                    { id: 'q7-b', text: 'main' },
                    { id: 'q7-c', text: 'default' },
                    { id: 'q7-d', text: 'trunk' }
                ],
                correctAnswer: 'q7-a',
                explanation: 'Historically, "master" has been the default branch name in Git repositories, though many projects now use "main" as the default branch name instead.'
            }
    animations: [
        {
            id: 'branch-workflow-animation',
            title: 'Feature Branch Workflow',
            description: 'This animation demonstrates a typical feature branch workflow in Git.',
            animationData: {
                type: 'workflow',
                steps: [
                    { id: 'step1', text: 'Start from main branch', position: { x: 50, y: 100 } },
                    { id: 'step2', text: 'Create feature branch', position: { x: 200, y: 50 } },
                    { id: 'step3', text: 'Commit changes to feature branch', position: { x: 350, y: 50 } },
                    { id: 'step4', text: 'Switch back to main branch', position: { x: 500, y: 100 } },
                    { id: 'step5', text: 'Merge feature branch into main', position: { x: 650, y: 100 } }
                ],
                connections: [
                    { from: 'step1', to: 'step2', label: 'git checkout -b feature' },
                    { from: 'step2', to: 'step3', label: 'git commit' },
                    { from: 'step3', to: 'step4', label: 'git checkout main' },
                    { from: 'step4', to: 'step5', label: 'git merge feature' }
                ]
            }
        },
        {
            id: 'branch-visualization-animation',
            title: 'Branch Visualization',
            description: 'This animation shows how branches diverge and merge in a Git repository.',
            animationData: {
                type: 'branches',
                mainLine: [
                    { id: 'commit1', text: 'Initial commit', position: { x: 50, y: 100 } },
                    { id: 'commit2', text: 'Add feature A', position: { x: 150, y: 100 } },
                    { id: 'commit5', text: 'Merge feature B', position: { x: 350, y: 100 } },
                    { id: 'commit6', text: 'Final release', position: { x: 450, y: 100 } }
                ],
                branches: [
                    {
                        name: 'feature-b',
                        startFrom: 'commit2',
                        commits: [
                            { id: 'commit3', text: 'Start feature B', position: { x: 250, y: 50 } },
                            { id: 'commit4', text: 'Complete feature B', position: { x: 350, y: 50 } }
                        ],
                        mergeInto: 'commit5'
                    }
                ]
            }
        }
    ]
};