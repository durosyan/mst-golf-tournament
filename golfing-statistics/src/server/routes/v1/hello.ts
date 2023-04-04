import { defineEventHandler } from 'h3';
import { io } from 'socket.io-client';

export default defineEventHandler(() => ({ message: 'Hello World' }));