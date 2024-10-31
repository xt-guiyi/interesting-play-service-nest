"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const networkUtils_1 = require("./utils/networkUtils");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('love-life-service-nest')
        .setDescription('后端服务(nest版)')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('swagger', app, document, {
        customSiteTitle: '趣玩api文档',
        customJs: [
            'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-bundle.min.js',
            'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.min.js',
        ],
        customCssUrl: [
            'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.min.css',
            'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.min.css',
            'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.css',
        ],
    });
    app.enableCors({
        origin: '*',
        methods: 'GET,POST,PUT,DELETE',
        allowedHeaders: 'Content-Type, Authorization',
        credentials: true,
    });
    await app.listen(process.env.PORT || 3000, () => {
        app.getUrl().then(url => {
            console.log(`Server is running on ${url}`);
            console.log(`Server is running on http://127.0.0.1:3000`);
            console.log(`Server is running on http://${(0, networkUtils_1.getLocalIpAddress)()}:3000`);
            console.log(`Swagger Document is running on http://127.0.0.1:3000/swagger`);
        });
    });
}
bootstrap();
//# sourceMappingURL=main.js.map