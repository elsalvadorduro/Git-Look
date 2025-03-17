// Git Collaboration Module

export const collaborationModule = {
    id: 'git-collaboration',
    title: 'Git Collaboration: Working with Teams',
    description: 'Learn how to effectively collaborate with others using Git and GitHub.',
    content: `
        <h2>Collaborating with Git</h2>
        <p>Git's distributed nature makes it perfect for team collaboration. When working with others, you'll typically use a remote repository hosted on platforms like GitHub, GitLab, or Bitbucket.</p>
        
        <h3>Key Collaboration Concepts</h3>
        <ul>
            <li><strong>Remote Repositories</strong>: Shared code repositories hosted on a server</li>
            <li><strong>Cloning</strong>: Creating a local copy of a remote repository</li>
            <li><strong>Pulling</strong>: Getting the latest changes from a remote repository</li>
            <li><strong>Pushing</strong>: Sending your local changes to a remote repository</li>
            <li><strong>Pull Requests</strong>: Proposing changes for review before merging</li>
        </ul>
        
        <h3>Common Collaboration Commands</h3>
        <ol>
            <li><code>git clone [url]</code> - Clone a repository from a remote source</li>
            <li><code>git remote add [name] [url]</code> - Add a remote repository</li>
            <li><code>git pull</code> - Fetch and merge changes from a remote repository</li>
            <li><code>git push</code> - Push your changes to a remote repository</li>
            <li><code>git fetch</code> - Download changes from a remote without merging</li>
        </ol>
        
        <h3>Collaboration Best Practices</h3>
        <ul>
            <li>Pull changes frequently to stay up-to-date</li>
            <li>Create feature branches for new work</li>
            <li>Write clear commit messages</li>
            <li>Review code before merging</li>
            <li>Communicate with your team about changes</li>
        </ul>
    `,
    quiz: {
        id: 'git-collaboration-quiz',
        title: 'Test Your Git Collaboration Knowledge',
        questions: [
            {
                id: 'q1',
                question: 'What command do you use to download a copy of a remote repository to your local machine?',
                options: [
                    { id: 'q1-a', text: 'git pull' },
                    { id: 'q1-b', text: 'git clone' },
                    { id: 'q1-c', text: 'git fetch' },
                    { id: 'q1-d', text: 'git checkout' }
                ],
                correctAnswer: 'q1-b',
                explanation: 'The git clone command creates a copy of a remote repository on your local machine, including all its files, branches, and commit history.'
            },
            {
                id: 'q2',
                question: 'What is the difference between git fetch and git pull?',
                options: [
                    { id: 'q2-a', text: 'There is no difference; they are synonyms' },
                    { id: 'q2-b', text: 'git fetch downloads changes but doesn\'t merge them, while git pull downloads and merges' },
                    { id: 'q2-c', text: 'git fetch works with branches while git pull works with files' },
                    { id: 'q2-d', text: 'git fetch is for GitHub only, while git pull works with any remote' }
                ],
                correctAnswer: 'q2-b',
                explanation: 'git fetch downloads changes from the remote repository but doesn\'t automatically merge them into your working branch. git pull does both operations: it fetches and then merges the changes.'
            },
            {
                id: 'q3',
                question: 'What is a Pull Request in GitHub?',
                options: [
                    { id: 'q3-a', text: 'Another name for the git pull command' },
                    { id: 'q3-b', text: 'A way to request that someone pull your repository' },
                    { id: 'q3-c', text: 'A proposal to merge changes from one branch to another with review' },
                    { id: 'q3-d', text: 'A way to download a repository without using git clone' }
                ],
                correctAnswer: 'q3-c',
                explanation: 'A Pull Request is a feature in platforms like GitHub that allows developers to propose changes for review before they are merged into another branch. It facilitates code review and discussion.'
            },
            {
                id: 'q4',
                question: 'What command adds a remote repository to your local Git configuration?',
                options: [
                    { id: 'q4-a', text: 'git remote add origin [url]' },
                    { id: 'q4-b', text: 'git add remote [url]' },
                    { id: 'q4-c', text: 'git push --set-upstream [url]' },
                    { id: 'q4-d', text: 'git connect [url]' }
                ],
                correctAnswer: 'q4-a',
                explanation: 'The command "git remote add origin [url]" adds a remote repository with the name "origin" pointing to the specified URL. You can use any name instead of "origin", but "origin" is the conventional name for the primary remote repository.'
            },
            {
                id: 'q5',
                question: 'What is the purpose of the "origin" in Git remote commands?',
                options: [
                    { id: 'q5-a', text: 'It refers to the original commit in your repository' },
                    { id: 'q5-b', text: 'It is a shorthand name for the remote repository URL' },
                    { id: 'q5-c', text: 'It specifies that you want to work with the main branch' },
                    { id: 'q5-d', text: 'It indicates that the command should run on the server' }
                ],
                correctAnswer: 'q5-b',
                explanation: 'In Git, "origin" is simply a conventional default name for the remote repository. It\'s a shorthand reference to the remote repository URL, making it easier to refer to in commands.'
            },
            {
                id: 'q6',
                question: 'What does the command "git push -u origin main" do?',
                options: [
                    { id: 'q6-a', text: 'Pulls changes from the main branch of the origin remote' },
                    { id: 'q6-b', text: 'Pushes local commits to the main branch on the origin remote and sets up tracking' },
                    { id: 'q6-c', text: 'Creates a new branch called main on the origin remote' },
                    { id: 'q6-d', text: 'Updates the origin remote to point to a new URL' }
                ],
                correctAnswer: 'q6-b',
                explanation: 'This command pushes your local commits to the main branch on the origin remote. The -u (or --set-upstream) flag sets up tracking, which means your local branch will track the remote branch, making future git pull and git push commands simpler.'
            }
        ]
    },
    animations: [
        {
            id: 'collaboration-workflow-animation',
            title: 'GitHub Collaboration Workflow',
            description: 'This animation demonstrates a typical collaboration workflow using GitHub.',
            animationData: {
                type: 'workflow',
                steps: [
                    { id: 'step1', text: 'Clone repository', position: { x: 50, y: 100 } },
                    { id: 'step2', text: 'Create feature branch', position: { x: 200, y: 100 } },
                    { id: 'step3', text: 'Make changes and commit', position: { x: 350, y: 100 } },
                    { id: 'step4', text: 'Push to GitHub', position: { x: 500, y: 100 } },
                    { id: 'step5', text: 'Create Pull Request', position: { x: 650, y: 100 } },
                    { id: 'step6', text: 'Code Review', position: { x: 800, y: 100 } },
                    { id: 'step7', text: 'Merge Pull Request', position: { x: 950, y: 100 } }
                ],
                connections: [
                    { from: 'step1', to: 'step2', label: 'git checkout -b feature' },
                    { from: 'step2', to: 'step3', label: 'git commit' },
                    { from: 'step3', to: 'step4', label: 'git push' },
                    { from: 'step4', to: 'step5', label: 'GitHub UI' },
                    { from: 'step5', to: 'step6', label: 'Team reviews' },
                    { from: 'step6', to: 'step7', label: 'Approve and merge' }
                ]
            }
        },
        {
            id: 'pull-request-animation',
            title: 'Pull Request Lifecycle',
            description: 'This animation shows the lifecycle of a Pull Request on GitHub.',
            animationData: {
                type: 'process',
                stages: [
                    { id: 'stage1', name: 'Create PR', description: 'Developer creates Pull Request', position: { x: 100, y: 100 } },
                    { id: 'stage2', name: 'CI Checks', description: 'Automated tests run', position: { x: 250, y: 100 } },
                    { id: 'stage3', name: 'Code Review', description: 'Team reviews code', position: { x: 400, y: 100 } },
                    { id: 'stage4', name: 'Address Feedback', description: 'Developer makes requested changes', position: { x: 550, y: 100 } },
                    { id: 'stage5', name: 'Approval', description: 'Reviewers approve changes', position: { x: 700, y: 100 } },
                    { id: 'stage6', name: 'Merge', description: 'Changes merged to main branch', position: { x: 850, y: 100 } }
                ],
                transitions: [
                    { from: 'stage1', to: 'stage2', label: 'Automated' },
                    { from: 'stage2', to: 'stage3', label: 'Passed' },
                    { from: 'stage3', to: 'stage4', label: 'Changes requested' },
                    { from: 'stage4', to: 'stage3', label: 'Re-review' },
                    { from: 'stage3', to: 'stage5', label: 'Looks good' },
                    { from: 'stage5', to: 'stage6', label: 'Complete PR' }
                ]
            }
        }
    ]
};