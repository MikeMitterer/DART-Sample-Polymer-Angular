import 'package:polymer/polymer.dart';
import 'package:event_bus/event_bus.dart';
import 'package:PolymerHelloWorld/globaleventbus.dart';
import 'dart:html';

@CustomTag('event-consumer')
class EventConsumerElement extends PolymerElement {
    final EventBus _eventbus = new GlobalEventBus();

    @observable int count = 0;

    EventConsumerElement.created() : super.created() {
        _eventbus.on(GlobalEventBus.basicClickEvent).listen((final String message) {
            count++;
        });
    }


//-------------------
// private
//-------------------
}
