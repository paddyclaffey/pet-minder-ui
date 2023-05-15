
import { Injectable } from '@angular/core';
import { OnDestroyMixin, untilComponentDestroyed } from '@w11k/ngx-componentdestroyed';
import { Subject } from 'rxjs';
import { catchError, switchAll, tap } from 'rxjs/operators';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

@Injectable({
    providedIn: 'root',
})
export class WebSocketService<T = any> extends OnDestroyMixin {

    private socket$: WebSocketSubject<T>;
    private stompClient;
    private socket;

    private readonly WS_ENDPOINT = 'http://localhost:8080/api/websockets'
    constructor() {
        super();
        // this.initializeWebSocketConnection();
    }

    connect() {
        this.socket$ = new SockJS(this.WS_ENDPOINT);
        this.stompClient = Stomp.over(this.socket$);
        this.stompClient.connect({}, frame => {
            console.log('Connected: ' + frame);
            this.stompClient.subscribe('/topic/message', message => {
                console.log(message);
            });
        });
    }

    disconnect() {
        if (this.stompClient !== null) {
            this.stompClient.disconnect();
        }
        console.log('Disconnected');
    }

    sendMessage(message) {
        this.stompClient.send('/app/message', {}, JSON.stringify({ 'message': message }));
    }

}
