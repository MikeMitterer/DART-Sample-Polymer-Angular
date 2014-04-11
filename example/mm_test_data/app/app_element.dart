library mm_test_data.app_element;

import 'dart:html';

import 'package:polymer/polymer.dart';
import 'package:logging/logging.dart' show Logger;

import 'package:polymer_hello_world/model.dart';

@MirrorsUsed(targets: ' User, Counter, CounterFactory ' ) // https://medium.com/p/14c6eb67df3e
import 'dart:mirrors';

@CustomTag('app-element')
class AppElement extends PolymerElement {
    @observable final List<User> users = toObservable(new ApplicationScope().users);
    @observable Counter counter = toObservable(new ApplicationScope().counter);
    @published int value = 0;

    final _logger = new Logger('app-element');
    get applyAuthorStyles => true;

    AppElement.created() : super.created() {
        _logger.finest('created');

        users.add(new User("Mike", 47));
        users.add(new User("Gerda", 49));

        counter.value = value;
    }

    void increment(Event e, var detail, Node target) {
       value = ++counter.value;

       users.add(new User("genNameApp${counter.value}",counter.value));
    }

    void attributeChanged(String name, String oldValue, String newValue) {
        super.attributeChanged(name,oldValue,newValue);
        print("AppElement attribute $name has changed!");
    }
}

@initMethod
void initComponent() {
    print("Application-Init!");
}