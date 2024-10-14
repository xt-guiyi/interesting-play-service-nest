/*
 * @Author: xt-guiyi 1661219752@qq.com
 * @Date: 2024-07-14 02:00:31
 * @LastEditors: xt-guiyi 1661219752@qq.com
 * @LastEditTime: 2024-07-14 21:16:55
 * @Description:
 */
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class formatInterceptor<T> implements NestInterceptor<T, any> {
  intercept(context: ExecutionContext, next: CallHandler<T>): Observable<any> {
    return next.handle().pipe(
      map((data) => ({
        code: 200,
        message: "",
        data: data,
      })),
    );
  }
}
