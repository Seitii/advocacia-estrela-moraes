import { boot } from "quasar/wrappers";

export default boot(async({ app }) => {
    app.config.globalProperties.$global = {};

    const globalFunctions = Object.values(import.meta.glob("../functions/global/*.js"));

    const globalFunctionsModules = globalFunctions.map((module) => module());

    for (const [index, globalFunctionModule] of globalFunctionsModules.entries()) {
        const module = await globalFunctionModule;

        if (module.default && typeof(module.default) == "function") {
            const functionFileName = globalFunctions[index].name.split("/").pop();
            const functionName = functionFileName.substring(0, functionFileName.lastIndexOf("."));

            app.config.globalProperties.$global[functionName] = module.default;
        }
    }
});