import 'package:polymer/polymer.dart';
import 'package:event_bus/event_bus.dart';
import 'package:PolymerHelloWorld/globaleventbus.dart';
import 'dart:html';

@CustomTag('hello-world')
class HelloWorldElement extends PolymerElement {
    final EventBus _eventbus = new GlobalEventBus();

    @observable int count = 0;

    HelloWorldElement.created() : super.created();

    void increment(Event e, var detail, Node target) {
        count += 1;
        _eventbus.fire(GlobalEventBus.basicClickEvent,"Test");
    }
//-------------------
// private
//-------------------
}
