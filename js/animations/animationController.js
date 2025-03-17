// Animation Controller - Handles all animations for Git concepts

export class AnimationController {
    constructor() {
        // Track current animations
        this.currentAnimations = [];
        
        // Listen for quiz feedback to potentially trigger animations
        document.addEventListener('quiz-feedback', (event) => {
            this.handleQuizFeedback(event.detail);
        });
    }
    
    setupAnimations(animations) {
        this.currentAnimations = animations;
        
        // Render each animation
        animations.forEach(animation => {
            this.renderAnimation(animation);
        });
    }
    
    renderAnimation(animationData) {
        const canvasElement = document.getElementById(`${animationData.id}-canvas`);
        if (!canvasElement) return;
        
        // Clear any existing content
        canvasElement.innerHTML = '';
        
        // Render based on animation type
        switch (animationData.animationData.type) {
            case 'workflow':
                this.renderWorkflowAnimation(canvasElement, animationData.animationData);
                break;
            case 'areas':
                this.renderAreasAnimation(canvasElement, animationData.animationData);
                break;
            case 'branches':
                this.renderBranchesAnimation(canvasElement, animationData.animationData);
                break;
            case 'process':
                this.renderProcessAnimation(canvasElement, animationData.animationData);
                break;
            case 'comparison':
                this.renderComparisonAnimation(canvasElement, animationData.animationData);
                break;
            default:
                canvasElement.innerHTML = '<p>Animation type not supported</p>';
        }
    }
    
    renderWorkflowAnimation(canvas, data) {
        // Create SVG container
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', '100%');
        svg.setAttribute('height', '100%');
        svg.setAttribute('viewBox', '0 0 1000 300');
        
        // Add steps
        data.steps.forEach(step => {
            // Create step circle
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('cx', step.position.x);
            circle.setAttribute('cy', step.position.y);
            circle.setAttribute('r', '30');
            circle.setAttribute('fill', '#4078c0');
            circle.setAttribute('id', `circle-${step.id}`);
            svg.appendChild(circle);
            
            // Create step text
            const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttribute('x', step.position.x);
            text.setAttribute('y', step.position.y + 60);
            text.setAttribute('text-anchor', 'middle');
            text.setAttribute('fill', '#333');
            text.textContent = step.text;
            svg.appendChild(text);
        });
        
        // Add connections
        if (data.connections) {
            data.connections.forEach(connection => {
                const fromStep = data.steps.find(step => step.id === connection.from);
                const toStep = data.steps.find(step => step.id === connection.to);
                
                if (fromStep && toStep) {
                    // Create connection line
                    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                    line.setAttribute('x1', fromStep.position.x + 30);
                    line.setAttribute('y1', fromStep.position.y);
                    line.setAttribute('x2', toStep.position.x - 30);
                    line.setAttribute('y2', toStep.position.y);
                    line.setAttribute('stroke', '#f05033');
                    line.setAttribute('stroke-width', '3');
                    svg.appendChild(line);
                    
                    // Create connection label
                    if (connection.label) {
                        const midX = (fromStep.position.x + toStep.position.x) / 2;
                        const midY = (fromStep.position.y + toStep.position.y) / 2 - 15;
                        
                        const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                        label.setAttribute('x', midX);
                        label.setAttribute('y', midY);
                        label.setAttribute('text-anchor', 'middle');
                        label.setAttribute('fill', '#f05033');
                        label.textContent = connection.label;
                        svg.appendChild(label);
                    }
                }
            });
        }
        
        // Append to canvas
        canvas.appendChild(svg);
        
        // Animate steps sequentially
        this.animateWorkflow(data.steps, svg);
    }
    
    renderProcessAnimation(canvas, data) {
        // Create SVG container
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', '100%');
        svg.setAttribute('height', '100%');
        svg.setAttribute('viewBox', '0 0 1000 300');
        
        // Add stages
        data.stages.forEach(stage => {
            // Create stage rectangle
            const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rect.setAttribute('x', stage.position.x - 60);
            rect.setAttribute('y', stage.position.y - 40);
            rect.setAttribute('width', '120');
            rect.setAttribute('height', '80');
            rect.setAttribute('rx', '5');
            rect.setAttribute('fill', '#f4f4f4');
            rect.setAttribute('stroke', '#4078c0');
            rect.setAttribute('stroke-width', '2');
            rect.setAttribute('id', `stage-${stage.id}`);
            svg.appendChild(rect);
            
            // Create stage name
            const name = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            name.setAttribute('x', stage.position.x);
            name.setAttribute('y', stage.position.y - 10);
            name.setAttribute('text-anchor', 'middle');
            name.setAttribute('fill', '#333');
            name.setAttribute('font-weight', 'bold');
            name.textContent = stage.name;
            svg.appendChild(name);
            
            // Create stage description
            const desc = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            desc.setAttribute('x', stage.position.x);
            desc.setAttribute('y', stage.position.y + 15);
            desc.setAttribute('text-anchor', 'middle');
            desc.setAttribute('fill', '#666');
            desc.setAttribute('font-size', '12');
            desc.textContent = stage.description;
            svg.appendChild(desc);
        });
        
        // Add transitions
        if (data.transitions) {
            // Add arrowhead marker definition
            const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
            const marker = document.createElementNS('http://www.w3.org/2000/svg', 'marker');
            marker.setAttribute('id', 'arrowhead-process');
            marker.setAttribute('markerWidth', '10');
            marker.setAttribute('markerHeight', '7');
            marker.setAttribute('refX', '9');
            marker.setAttribute('refY', '3.5');
            marker.setAttribute('orient', 'auto');
            
            const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
            polygon.setAttribute('points', '0 0, 10 3.5, 0 7');
            polygon.setAttribute('fill', '#f05033');
            
            marker.appendChild(polygon);
            defs.appendChild(marker);
            svg.appendChild(defs);
            
            data.transitions.forEach(transition => {
                const fromStage = data.stages.find(stage => stage.id === transition.from);
                const toStage = data.stages.find(stage => stage.id === transition.to);
                
                if (fromStage && toStage) {
                    // Create transition arrow
                    const arrow = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                    const startX = fromStage.position.x + 60;
                    const startY = fromStage.position.y;
                    const endX = toStage.position.x - 60;
                    const endY = toStage.position.y;
                    
                    arrow.setAttribute('d', `M${startX},${startY} L${endX},${endY}`);
                    arrow.setAttribute('stroke', '#f05033');
                    arrow.setAttribute('stroke-width', '2');
                    arrow.setAttribute('marker-end', 'url(#arrowhead-process)');
                    svg.appendChild(arrow);
                    
                    // Create transition label
                    if (transition.label) {
                        const midX = (fromStage.position.x + toStage.position.x) / 2;
                        const midY = (fromStage.position.y + toStage.position.y) / 2 - 10;
                        
                        const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                        label.setAttribute('x', midX);
                        label.setAttribute('y', midY);
                        label.setAttribute('text-anchor', 'middle');
                        label.setAttribute('fill', '#f05033');
                        label.setAttribute('font-size', '12');
                        label.textContent = transition.label;
                        svg.appendChild(label);
                    }
                }
            });
        }
        
        // Append to canvas
        canvas.appendChild(svg);
        
        // Animate transitions
        this.animateTransitions(data.transitions, data.stages, svg);
    }
    
    renderComparisonAnimation(canvas, data) {
        // Create SVG container
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', '100%');
        svg.setAttribute('height', '100%');
        svg.setAttribute('viewBox', '0 0 800 500');
        
        // Add scenarios
        data.scenarios.forEach((scenario, index) => {
            // Create scenario container
            const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rect.setAttribute('x', scenario.position.x);
            rect.setAttribute('y', scenario.position.y);
            rect.setAttribute('width', '600');
            rect.setAttribute('height', '80');
            rect.setAttribute('rx', '5');
            rect.setAttribute('fill', '#f4f4f4');
            rect.setAttribute('stroke', '#4078c0');
            rect.setAttribute('stroke-width', '2');
            rect.setAttribute('id', `scenario-${scenario.id}`);
            svg.appendChild(rect);
            
            // Create scenario title
            const title = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            title.setAttribute('x', scenario.position.x + 10);
            title.setAttribute('y', scenario.position.y + 20);
            title.setAttribute('fill', '#333');
            title.setAttribute('font-weight', 'bold');
            title.textContent = scenario.title;
            svg.appendChild(title);
            
            // Create scenario command
            const command = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            command.setAttribute('x', scenario.position.x + 10);
            command.setAttribute('y', scenario.position.y + 45);
            command.setAttribute('fill', '#f05033');
            command.setAttribute('font-family', 'monospace');
            command.textContent = scenario.command;
            svg.appendChild(command);
            
            // Create scenario description
            const desc = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            desc.setAttribute('x', scenario.position.x + 10);
            desc.setAttribute('y', scenario.position.y + 70);
            desc.setAttribute('fill', '#666');
            desc.setAttribute('font-size', '12');
            desc.textContent = scenario.description;
            svg.appendChild(desc);
        });
        
        // Append to canvas
        canvas.appendChild(svg);
        
        // Animate scenarios
        this.animateScenarios(data.scenarios, svg);
    }
    
    // Animation helper methods
    animateWorkflow(steps, svg) {
        // Highlight steps one by one
        steps.forEach((step, index) => {
            setTimeout(() => {
                const circle = svg.getElementById(`circle-${step.id}`);
                if (circle) {
                    // Pulse animation
                    circle.setAttribute('fill', '#f05033');
                    setTimeout(() => {
                        circle.setAttribute('fill', '#4078c0');
                    }, 500);
                }
            }, index * 1000);
        });
    }
    
    animateFlows(flows, areas, svg) {
        if (!flows) return;
        
        // Highlight flows one by one
        flows.forEach((flow, index) => {
            setTimeout(() => {
                // Highlight source area
                const sourceArea = svg.getElementById(`area-${flow.from}`);
                if (sourceArea) {
                    sourceArea.setAttribute('fill', '#e6f7ff');
                    sourceArea.setAttribute('stroke', '#f05033');
                    sourceArea.setAttribute('stroke-width', '3');
                }
                
                // After a delay, highlight target area
                setTimeout(() => {
                    const targetArea = svg.getElementById(`area-${flow.to}`);
                    if (targetArea) {
                        targetArea.setAttribute('fill', '#e6f7ff');
                        targetArea.setAttribute('stroke', '#f05033');
                        targetArea.setAttribute('stroke-width', '3');
                    }
                    
                    // Reset after animation
                    setTimeout(() => {
                        if (sourceArea) {
                            sourceArea.setAttribute('fill', '#f4f4f4');
                            sourceArea.setAttribute('stroke', '#4078c0');
                            sourceArea.setAttribute('stroke-width', '2');
                        }
                        if (targetArea) {
                            targetArea.setAttribute('fill', '#f4f4f4');
                            targetArea.setAttribute('stroke', '#4078c0');
                            targetArea.setAttribute('stroke-width', '2');
                        }
                    }, 1000);
                }, 500);
            }, index * 2000);
        });
    }
    
    animateTransitions(transitions, stages, svg) {
        if (!transitions) return;
        
        // Highlight transitions one by one
        transitions.forEach((transition, index) => {
            setTimeout(() => {
                // Highlight source stage
                const sourceStage = svg.getElementById(`stage-${transition.from}`);
                if (sourceStage) {
                    sourceStage.setAttribute('fill', '#e6f7ff');
                    sourceStage.setAttribute('stroke', '#f05033');
                }
                
                // After a delay, highlight target stage
                setTimeout(() => {
                    const targetStage = svg.getElementById(`stage-${transition.to}`);
                    if (targetStage) {
                        targetStage.setAttribute('fill', '#e6f7ff');
                        targetStage.setAttribute('stroke', '#f05033');
                    }
                    
                    // Reset after animation
                    setTimeout(() => {
                        if (sourceStage) {
                            sourceStage.setAttribute('fill', '#f4f4f4');
                            sourceStage.setAttribute('stroke', '#4078c0');
                        }
                        if (targetStage) {
                            targetStage.setAttribute('fill', '#f4f4f4');
                            targetStage.setAttribute('stroke', '#4078c0');
                        }
                    }, 1000);
                }, 500);
            }, index * 2000);
        });
    }
    
    animateScenarios(scenarios, svg) {
        // Highlight scenarios one by one
        scenarios.forEach((scenario, index) => {
            setTimeout(() => {
                const rect = svg.getElementById(`scenario-${scenario.id}`);
                if (rect) {
                    // Highlight animation
                    rect.setAttribute('fill', '#e6f7ff');
                    rect.setAttribute('stroke', '#f05033');
                    
                    // Reset after animation
                    setTimeout(() => {
                        rect.setAttribute('fill', '#f4f4f4');
                        rect.setAttribute('stroke', '#4078c0');
                    }, 1500);
                }
            }, index * 2000);
        });
    }
    
    handleQuizFeedback(feedback) {
        // Potentially trigger animations based on quiz feedback
        // For example, show a success animation for correct answers
        if (feedback.isCorrect) {
            // Could trigger a special animation for correct answers
            console.log('Correct answer! Could trigger animation here.');
        } else {
            // Could show a helpful animation for incorrect answers
            console.log('Incorrect answer. Could show helpful animation here.');
        }
    }
}
    
    renderAreasAnimation(canvas, data) {
        // Create SVG container
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', '100%');
        svg.setAttribute('height', '100%');
        svg.setAttribute('viewBox', '0 0 800 300');
        
        // Add areas
        data.areas.forEach(area => {
            // Create area rectangle
            const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rect.setAttribute('x', area.position.x - 80);
            rect.setAttribute('y', area.position.y - 50);
            rect.setAttribute('width', '160');
            rect.setAttribute('height', '100');
            rect.setAttribute('rx', '10');
            rect.setAttribute('fill', '#f4f4f4');
            rect.setAttribute('stroke', '#4078c0');
            rect.setAttribute('stroke-width', '2');
            rect.setAttribute('id', `area-${area.id}`);
            svg.appendChild(rect);
            
            // Create area title
            const title = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            title.setAttribute('x', area.position.x);
            title.setAttribute('y', area.position.y - 20);
            title.setAttribute('text-anchor', 'middle');
            title.setAttribute('fill', '#333');
            title.setAttribute('font-weight', 'bold');
            title.textContent = area.name;
            svg.appendChild(title);
            
            // Create area description
            const desc = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            desc.setAttribute('x', area.position.x);
            desc.setAttribute('y', area.position.y + 10);
            desc.setAttribute('text-anchor', 'middle');
            desc.setAttribute('fill', '#666');
            desc.setAttribute('font-size', '12');
            desc.textContent = area.description;
            svg.appendChild(desc);
        });
        
        // Add flows
        if (data.flows) {
            data.flows.forEach(flow => {
                const fromArea = data.areas.find(area => area.id === flow.from);
                const toArea = data.areas.find(area => area.id === flow.to);
                
                if (fromArea && toArea) {
                    // Create flow arrow
                    const arrow = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                    const startX = fromArea.position.x + 80;
                    const startY = fromArea.position.y;
                    const endX = toArea.position.x - 80;
                    const endY = toArea.position.y;
                    
                    arrow.setAttribute('d', `M${startX},${startY} L${endX},${endY}`);
                    arrow.setAttribute('stroke', '#f05033');
                    arrow.setAttribute('stroke-width', '2');
                    arrow.setAttribute('marker-end', 'url(#arrowhead)');
                    svg.appendChild(arrow);
                    
                    // Create flow label
                    if (flow.action) {
                        const midX = (fromArea.position.x + toArea.position.x) / 2;
                        const midY = (fromArea.position.y + toArea.position.y) / 2 - 15;
                        
                        const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                        label.setAttribute('x', midX);
                        label.setAttribute('y', midY);
                        label.setAttribute('text-anchor', 'middle');
                        label.setAttribute('fill', '#f05033');
                        label.setAttribute('font-weight', 'bold');
                        label.textContent = flow.action;
                        svg.appendChild(label);
                        
                        if (flow.description) {
                            const descLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                            descLabel.setAttribute('x', midX);
                            descLabel.setAttribute('y', midY + 15);
                            descLabel.setAttribute('text-anchor', 'middle');
                            descLabel.setAttribute('fill', '#666');
                            descLabel.setAttribute('font-size', '12');
                            descLabel.textContent = flow.description;
                            svg.appendChild(descLabel);
                        }
                    }
                }
            });
        }
        
        // Add arrowhead marker definition
        const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
        const marker = document.createElementNS('http://www.w3.org/2000/svg', 'marker');
        marker.setAttribute('id', 'arrowhead');
        marker.setAttribute('markerWidth', '10');
        marker.setAttribute('markerHeight', '7');
        marker.setAttribute('refX', '9');
        marker.setAttribute('refY', '3.5');
        marker.setAttribute('orient', 'auto');
        
        const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        polygon.setAttribute('points', '0 0, 10 3.5, 0 7');
        polygon.setAttribute('fill', '#f05033');
        
        marker.appendChild(polygon);
        defs.appendChild(marker);
        svg.appendChild(defs);
        
        // Append to canvas
        canvas.appendChild(svg);
        
        // Animate flows
        this.animateFlows(data.flows, data.areas, svg);
    }
    
    renderBranchesAnimation(canvas, data) {
        // Create SVG container
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', '100%');
        svg.setAttribute('height', '100%');
        svg.setAttribute('viewBox', '0 0 500 200');
        
        // Add main line
        const mainLine = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        let pathD = `M${data.mainLine[0].position.x},${data.mainLine[0].position.y}`;
        
        data.mainLine.forEach((commit, index) => {
            if (index > 0) {
                pathD += ` L${commit.position.x},${commit.position.y}`;
            }
        });
        
        mainLine.setAttribute('d', pathD);
        mainLine.setAttribute('stroke', '#4078c0');
        mainLine.setAttribute('stroke-width', '3');
        mainLine.setAttribute('fill', 'none');
        svg.appendChild(mainLine);
        
        // Add main line commits
        data.mainLine.forEach(commit => {
            // Create commit circle
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('cx', commit.position.x);
            circle.setAttribute('cy', commit.position.y);
            circle.setAttribute('r', '10');
            circle.setAttribute('fill', '#4078c0');
            circle.setAttribute('id', `commit-${commit.id}`);
            svg.appendChild(circle);
            
            // Create commit text
            const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttribute('x', commit.position.x);
            text.setAttribute('y', commit.position.y + 25);
            text.setAttribute('text-anchor', 'middle');
            text.setAttribute('fill', '#333');
            text.setAttribute('font-size', '12');
            text.textContent = commit.text;
            svg.appendChild(text);
        });
        
        // Add branches
        if (data.branches) {
            data.branches.forEach(branch => {
                const startCommit = data.mainLine.find(commit => commit.id === branch.startFrom);
                
                if (startCommit && branch.commits.length > 0) {
                    // Create branch line
                    const branchLine = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                    let branchPathD = `M${startCommit.position.x},${startCommit.position.y}`;
                    
                    branch.commits.forEach(commit => {
                        branchPathD += ` L${commit.position.x},${commit.position.y}`;
                    });
                    
                    // If branch merges back
                    if (branch.mergeInto) {
                        const mergeCommit = data.mainLine.find(commit => commit.id === branch.mergeInto);
                        if (mergeCommit) {
                            branchPathD += ` L${mergeCommit.position.x},${mergeCommit.position.y}`;
                        }
                    }
                    
                    branchLine.setAttribute('d', branchPathD);
                    branchLine.setAttribute('stroke', '#f05033');
                    branchLine.setAttribute('stroke-width', '3');
                    branchLine.setAttribute('fill', 'none');
                    svg.appendChild(branchLine);
                    
                    // Add branch name
                    const firstBranchCommit = branch.commits[0];
                    const branchLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                    branchLabel.setAttribute('x', firstBranchCommit.position.x);
                    branchLabel.setAttribute('y', firstBranchCommit.position.y - 15);
                    branchLabel.setAttribute('text-anchor', 'middle');
                    branchLabel.setAttribute('fill', '#f05033');
                    branchLabel.setAttribute('font-weight', 'bold');
                    branchLabel.textContent = branch.name;
                    svg.appendChild(branchLabel);
                    
                    // Add branch commits
                    branch.commits.forEach(commit => {
                        // Create commit circle
                        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                        circle.setAttribute('cx', commit.position.x);
                        circle.setAttribute('cy', commit.position.y);
                        circle.setAttribute('r', '10');
                        circle.setAttribute('fill', '#f05033');
                        circle.setAttribute('id', `commit-${commit.id}`);
                        svg.appendChild(circle);
                        
                        // Create commit text
                        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                        text.setAttribute('x', commit.position.x);
                        text.setAttribute('y', commit.position.y + 25);
                        text.setAttribute('text-anchor', 'middle');
                        text.setAttribute('fill', '#333');
                        text.setAttribute('font-size', '12');
                        text.textContent = commit.text;
                        svg.appendChild(text);
                    });
                }