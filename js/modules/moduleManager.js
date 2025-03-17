// Module Manager - Handles all learning modules

import { gitBasicsModule } from './gitBasics.js';
import { branchingModule } from './branching.js';
import { collaborationModule } from './collaboration.js';
import { troubleshootingModule } from './troubleshooting.js';

export class ModuleManager {
    constructor() {
        // Initialize modules
        this.modules = [
            gitBasicsModule,
            branchingModule,
            collaborationModule,
            troubleshootingModule
        ];
        
        this.currentModuleIndex = 0;
    }
    
    getModule(index) {
        if (index >= 0 && index < this.modules.length) {
            return this.modules[index];
        }
        return null;
    }
    
    getCurrentModule() {
        return this.getModule(this.currentModuleIndex);
    }
    
    nextModule() {
        if (this.currentModuleIndex < this.modules.length - 1) {
            this.currentModuleIndex++;
            return this.getCurrentModule();
        }
        return null;
    }
    
    previousModule() {
        if (this.currentModuleIndex > 0) {
            this.currentModuleIndex--;
            return this.getCurrentModule();
        }
        return null;
    }
    
    getTotalModules() {
        return this.modules.length;
    }
}