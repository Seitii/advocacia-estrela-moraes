import { boot } from "quasar/wrappers";

export default boot(async({app}) => {
    const files = import.meta.glob("../components/global/*.vue", {eager: true});
    
    const componentPromises = Object.values(files).map((module) => {
        const component = module.default;

        if(component.name){
            app.component(component.name, component);
        }
    });

    return await Promise.all(componentPromises);
})