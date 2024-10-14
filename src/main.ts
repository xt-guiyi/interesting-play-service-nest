/*
 * @Author: xt-guiyi 1661219752@qq.com
 * @Date: 2024-07-02 21:04:24
 * @LastEditors: xt-guiyi 1661219752@qq.com
 * @LastEditTime: 2024-08-10 21:15:18
 * @Description:
 */
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { formatInterceptor } from "./common/FormatInterceptor";
import { getLocalIpAddress } from "./utils/networkUtils";


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // swagger
  const config = new DocumentBuilder()
    .setTitle("love-life-service-nest")
    .setDescription("后端服务(nest版)")
    .setVersion("1.0")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("swagger", app, document, {
    jsonDocumentUrl: "swagger/json",
  });
  // 设置拦截器
  app.useGlobalInterceptors(new formatInterceptor());
  // 启动服务
  await app.listen(3000, () => {
    // 获取本机ip地址
    app.getUrl().then((url) => {
      console.log(`Server is running on ${url}`);
      console.log(`Server is running on http://127.0.0.1:3000`);
      console.log(`Server is running on http://${getLocalIpAddress()}:3000`);
      console.log(
        `Swagger Document is running on http://127.0.0.1:3000/swagger`,
      );
    });
  });
}
bootstrap();
