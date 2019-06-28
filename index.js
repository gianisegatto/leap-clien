const LeapApplication = require("leap-boot").LeapApplication;

const components = LeapApplication.start();

const app = components.filter(component => component.name === "app")[0].getInstance();

app.listen(8080, () => {
    console.info("pub leap client demo running on port: " + 8080);
});