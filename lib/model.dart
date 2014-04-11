library model;

import 'dart:html';
import 'package:polymer/polymer.dart';

class Counter extends Observable {
    @observable int value;
    Counter(this.value);
}

class User extends Observable {
    static int _id = 0;

    @observable int id;
    @observable String name;
    @observable int age;

    // just because it works!
    @observable Counter counter;

    User(this.name,this.age) : counter = new ApplicationScope().counter, id = _id++;
}

class ApplicationScope  {
    @observable List<User> users;
    @observable Counter counter;

    factory ApplicationScope() {
        if(_scope == null) { _scope = new ApplicationScope._internal(); }
        return _scope;
    }

    //------------------------------------------------------------
    // private

    static ApplicationScope _scope;

    ApplicationScope._internal() {
        users = toObservable(new List<User>());
        counter = toObservable(new Counter(0));
    }
}



