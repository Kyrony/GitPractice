app.component('vcard-display', {
    template:
    /*html*/
    `<div
        v-for="project in projects" 
        :key="project.id" 
        @click="openProject(project.name, project.image)">
            
            <div>
            {{ project.name }}
            {{ project.description }}
            </div>


        </div>
        <h1> {{ name }} </h1>
        <div class="app-image">
            <img :src="image">
        </div>`,
    data() {
        return {
            name: 'Bwindi',
            image: './assets/bwindi.png',
            projects: [
                { id: 0001, name: 'bwindi',   description:'na', image: './assets/bwindi.png' },
                { id: 0002, name: 'procreat', description:'as', image: './assets/procreat.png' },
                { id: 0003, name: 'vigor',    description:'sa', image: './assets/vigor.png' },
            ],
        }
    },
    methods: {
        openProject(projectname, projectimage) {
            this.name = projectname;
            this.image = projectimage;
        }
    }
})