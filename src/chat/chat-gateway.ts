import { Module } from '@nestjs/common';
import { WebSocketGateway } from '@nestjs/websockets';

@Module({
  providers: [ChatGateway],
})
@WebSocketGateway(3002, {})
export class ChatGateway {
  handleConnection() {
    console.log('Client connected');
  }

  handleDisconnect() {
    console.log('Client disconnected');
  }
}
