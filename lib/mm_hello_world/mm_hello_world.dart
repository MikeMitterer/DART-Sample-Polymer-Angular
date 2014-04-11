library webapp_base_ui.hello_world;

import 'dart:html';
import 'package:polymer/polymer.dart';

import 'package:polymer_hello_world/model.dart';

@CustomTag('mm-hello-world')
class HelloWorldElement extends PolymerElement {

    @observable int value = 0;
    @observable final Counter counter = new ApplicationScope().counter;
    @observable final List<User> users = toObservable(new ApplicationScope().users);

    HelloWorldElement.created() : super.created();
    get applyAuthorStyles => true;

    void increment(Event e, var detail, Node target) {
        value += 1;
        counter.value = value;

        users.add(new User("genNameHW${counter.value}",counter.value + 42));

        //final HtmlElement element = $['#sample']; // Shadow DOM

        //final HtmlElementList elements = querySelectorAll('.sample'); // Dokument
        //elements.forEach((final E element) => element.style.color = count % 2 == 0 ? 'red' : 'black');

        // Nur außerhalb des ShadowDOMs
        querySelectorAll('.sample').forEach((final Element element) => element.style.color = value % 2 == 0 ? 'red' : 'black');

        // Innerhalb des ShadowDOMs
        shadowRoot.querySelectorAll('.sample').forEach((final Element element) => element.style.color = value % 2 == 0 ? 'blue' : 'purple');
    }

    void attributeChanged(String name, String oldValue, String newValue) {
        super.attributeChanged(name,oldValue,newValue);
        print("HelloWorldElement attribute $name has changed!");
    }

//-------------------
// private
//-------------------
}
