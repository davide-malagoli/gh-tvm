/*
 *  Copyright 2014 Alexey Andreev.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
package org.teavm.chromerdp;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import javax.websocket.OnClose;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;

/**
 *
 * @author Alexey Andreev
 */
@ServerEndpoint("/")
public class ChromeRDPDebuggerEndpoint implements ChromeRDPExchange {
    private Session session;
    private ChromeRDPExchangeConsumer debugger;
    private List<ChromeRDPExchangeListener> listeners = new ArrayList<>();

    @OnOpen
    public void open(Session session) {
        this.session = session;
        Object debugger = session.getUserProperties().get("chrome.rdp");
        if (debugger instanceof ChromeRDPExchangeConsumer) {
            this.debugger = (ChromeRDPExchangeConsumer)debugger;
            this.debugger.setExchange(this);
        }
    }

    @OnClose
    public void close() {
        if (this.debugger != null) {
            this.debugger.setExchange(null);
            this.debugger = null;
        }
    }

    @Override
    public void disconnect() {
        try {
            session.close();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    @OnMessage
    public void receive(String message) throws IOException {
        for (ChromeRDPExchangeListener listener : listeners) {
            listener.received(message);
        }
    }

    @Override
    public void send(String message) {
        session.getAsyncRemote().sendText(message);
    }

    @Override
    public void addListener(ChromeRDPExchangeListener listener) {
        listeners.add(listener);
    }

    @Override
    public void removeListener(ChromeRDPExchangeListener listener) {
        listeners.remove(listener);
    }
}
