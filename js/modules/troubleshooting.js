// Git Troubleshooting Module

export const troubleshootingModule = {
    id: 'git-troubleshooting',
    title: 'Git Troubleshooting: Fixing Common Issues',
    description: 'Learn how to resolve common Git problems and recover from mistakes.',
    content: `
        <h2>Common Git Issues and Solutions</h2>
        <p>Even experienced developers encounter Git problems. Learning how to troubleshoot these issues is an essential skill.</p>
        
        <h3>Undoing Changes</h3>
        <p>Git provides several ways to undo changes depending on where they are in the workflow:</p>
        <ul>
            <li><code>git checkout -- [file]</code> - Discard changes in working directory</li>
            <li><code>git reset HEAD [file]</code> - Unstage changes but keep them in working directory</li>
            <li><code>git revert [commit]</code> - Create a new commit that undoes changes from a specific commit</li>
            <li><code>git reset --hard [commit]</code> - Reset to a specific commit, discarding all changes after it (use with caution!)</li>
        </ul>
        
        <h3>Resolving Merge Conflicts</h3>
        <p>Merge conflicts occur when Git can't automatically merge changes. To resolve them:</p>
        <ol>
            <li>Identify conflicted files using <code>git status</code></li>
            <li>Open each conflicted file and look for conflict markers (<code><<<<<<</code>, <code>=======</code>, <code>>>>>>></code>)</li>
            <li>Edit the files to resolve conflicts by choosing which changes to keep</li>
            <li>Mark conflicts as resolved with <code>git add [file]</code></li>
            <li>Complete the merge with <code>git commit</code></li>
        </ol>
        
        <h3>Recovering Lost Work</h3>
        <p>If you've lost work, Git often has ways to recover it:</p>
        <ul>
            <li><code>git reflog</code> - View a log of all reference updates to find lost commits</li>
            <li><code>git fsck --lost-found</code> - Find dangling commits and blobs</li>
            <li><code>git cherry-pick [commit]</code> - Apply a specific commit to your current branch</li>
        </ul>
    `,
    quiz: {
        id: 'git-troubleshooting-quiz',
        title: 'Test Your Git Troubleshooting Knowledge',
        questions: [
            {
                id: 'q1',
                question: 'How can you discard changes to a file in your working directory?',
                options: [
                    { id: 'q1-a', text: 'git reset --hard HEAD' },
                    { id: 'q1-b', text: 'git checkout -- [file]' },
                    { id: 'q1-c', text: 'git revert [file]' },
                    { id: 'q1-d', text: 'git clean [file]' }
                ],
                correctAnswer: 'q1-b',
                explanation: 'The command "git checkout -- [file]" discards changes to a specific file in your working directory, reverting it to the state in the last commit.'
            },
            {
                id: 'q2',
                question: 'What command helps you find lost commits that are no longer referenced by any branch or tag?',
                options: [
                    { id: 'q2-a', text: 'git log --all' },
                    { id: 'q2-b', text: 'git status --verbose' },
                    { id: 'q2-c', text: 'git reflog' },
                    { id: 'q2-d', text: 'git branch -a' }
                ],
                correctAnswer: 'q2-c',
                explanation: 'The git reflog command shows a log of all reference updates in your repository, including commits that are no longer referenced by any branch or tag. This makes it useful for finding "lost
    animations: [
        {
            id: 'merge-conflict-animation',
            title: 'Resolving Merge Conflicts',
            description: 'This animation demonstrates how to resolve merge conflicts in Git.',
            animationData: {
                type: 'workflow',
                steps: [
                    { id: 'step1', text: 'Attempt to merge branches', position: { x: 50, y: 100 } },
                    { id: 'step2', text: 'Conflict detected', position: { x: 200, y: 100 } },
                    { id: 'step3', text: 'Edit conflicted files', position: { x: 350, y: 100 } },
                    { id: 'step4', text: 'Mark as resolved with git add', position: { x: 500, y: 100 } },
                    { id: 'step5', text: 'Complete merge with git commit', position: { x: 650, y: 100 } }
                ],
                connections: [
                    { from: 'step1', to: 'step2', label: 'Conflict!' },
                    { from: 'step2', to: 'step3', label: 'Edit files' },
                    { from: 'step3', to: 'step4', label: 'git add' },
                    { from: 'step4', to: 'step5', label: 'git commit' }
                ]
            }
        },
        {
            id: 'undo-changes-animation',
            title: 'Undoing Changes in Git',
            description: 'This animation shows different ways to undo changes in Git depending on where they are in the workflow.',
            animationData: {
                type: 'comparison',
                scenarios: [
                    {
                        id: 'scenario1',
                        title: 'Discard Working Directory Changes',
                        command: 'git checkout -- [file]',
                        description: 'Reverts file to last committed state',
                        position: { x: 100, y: 100 }
                    },
                    {
                        id: 'scenario2',
                        title: 'Unstage Changes',
                        command: 'git reset HEAD [file]',
                        description: 'Moves changes from staging area back to working directory',
                        position: { x: 100, y: 200 }
                    },
                    {
                        id: 'scenario3',
                        title: 'Undo a Commit',
                        command: 'git revert [commit]',
                        description: 'Creates new commit that undoes previous changes',
                        position: { x: 100, y: 300 }
                    },
                    {
                        id: 'scenario4',
                        title: 'Reset to Previous State',
                        command: 'git reset --hard [commit]',
                        description: 'Completely resets to a previous commit (dangerous!)',
                        position: { x: 100, y: 400 }
                    }
                ]
            }
        }
    ]
};