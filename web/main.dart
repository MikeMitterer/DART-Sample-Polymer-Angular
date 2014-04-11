import 'package:polymer/polymer.dart';
import 'package:angular/angular.dart';
import 'package:angular/angular_dynamic.dart';

// HACK until we fix code gen size. This doesn't really fix it,
// just makes it better.
@MirrorsUsed(override: '*')
import 'dart:mirrors';

void myRouteInitializer(Router router, RouteViewFactory views) {
    views.configure({

        'hello': ngRoute(
            //defaultRoute: true,
            path: '/hello',
            enter: views('views/hello.html')),

        'goodbye': ngRoute(
            path: '/hellopolymer/:callerID',
            enter: views('views/hello-polymer.html'))

    });
}

@NgController( selector: '[webapp-sample]', publishAs: 'ctrl')
class MyControler {
    final Repository _repository;

    MyControler(final RouteProvider routeProvider,this._repository) {
        final int value = routeProvider.parameters["callerID"];
        if(value != null && value != null) {
            _repository.value = value;
        }

        _bindEvents();
    }
    int get value =>  _repository.value;

    // --------------------------------------------------------------------------------------------
    // private

    void _bindEvents() {
    }
}

class Repository {
    int value = 0;
}

class AppModule extends Module {
    AppModule() {

        value(RouteInitializerFn, myRouteInitializer);
        value(Repository,new Repository());

        //type(NodeBindDirective);
        type(MyControler);

        factory(NgRoutingUsePushState, (_) => new NgRoutingUsePushState.value(false));
    }
}

@initMethod
void init() {
    dynamicApplication().addModule(new AppModule()).run();
}