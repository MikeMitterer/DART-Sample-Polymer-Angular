    import 'package:polymer/polymer.dart';
    import 'package:json/json.dart' as JSON;

    @CustomTag('event-handler')
    class EventHandler  extends PolymerElement {

        @observable String response = "";
        @observable int randomnumber = 0;

        EventHandler.created() : super.created();

        void handleHelloEvent(Event e, var detail, Node target) {
            final Map json = JSON.parse(detail);

            response = json['response'];
            randomnumber = json['random'];

            print("Received event! $detail");
        }
    //-------------------
    // private
    //-------------------
    }
