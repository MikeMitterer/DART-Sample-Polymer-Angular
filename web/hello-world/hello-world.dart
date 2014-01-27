    import 'package:polymer/polymer.dart';
    import 'package:event_bus/event_bus.dart';
    import 'package:PolymerHelloWorld/globaleventbus.dart';
    import 'dart:html';
    import 'dart:math';
    import 'package:json/json.dart' as JSON;

    @CustomTag('hello-world')
    class HelloWorldElement extends PolymerElement {
        final EventBus _eventbus = new GlobalEventBus();

        @observable int count = 0;

        HelloWorldElement.created() : super.created();

        void increment(Event e, var detail, Node target) {
            count += 1;
            _eventbus.fire(GlobalEventBus.basicClickEvent,"Test");
        }

        void fireevent(Event e, var detail, Node target) {
            final Random random = new Random();
            final Map json = { 'response' : 'Hi, this is a message', 'random' : random.nextInt(100)};

            // Fires a JSON-Message
            fire("hello-event",detail: JSON.stringify(json));
        }
    //-------------------
    // private
    //-------------------
    }
