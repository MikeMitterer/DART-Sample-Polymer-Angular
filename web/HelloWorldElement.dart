import 'package:polymer/polymer.dart';
import 'dart:html';

@CustomTag('hello-world')
class HelloWorldElement extends PolymerElement {
    @observable int count = 0;

    HelloWorldElement.created() : super.created();

    void increment(Event e, var detail, Node target) {
        count += 1;
    }
//-------------------
// private
//-------------------
}
