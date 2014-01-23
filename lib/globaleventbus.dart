library globaleventbus;

import 'package:event_bus/event_bus.dart';

/**
 * Globaler EventBus über den die gesampte Applikation kommuniziert
 */
class GlobalEventBus extends SimpleEventBus {
    static GlobalEventBus _globaleventbus = null;

    static final EventType<String> basicClickEvent = new EventType<String>();

    factory GlobalEventBus({bool sync: false}) {
        if (_globaleventbus == null) {
            _globaleventbus = new GlobalEventBus._internal(sync);
        }
        return _globaleventbus;
    }

    //-----------------------------------------------------------------------------------------------
    // private
    //-----------------------------------------------------------------------------------------------
    GlobalEventBus._internal(final bool sync) : super(sync: sync) {
    }
}