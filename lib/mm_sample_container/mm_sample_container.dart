library webapp_base_ui.sample_container;

import 'dart:html';
import 'package:polymer/polymer.dart';

import 'package:validate/validate.dart';

@CustomTag('mm-sample-container')
class SampleContainer extends PolymerElement {
    @observable bool sidebarleft = false;
    @observable bool sidebarright = false;

    SampleContainer.created() : super.created() {
    }

    get applyAuthorStyles => true;

//    @override
//    void enteredView() {
//        super.enteredView();
//        setMarginForBottomArea();
//
//    }

    // --------------------------------------------------------------------------------------------
    // EventHandler



    // --------------------------------------------------------------------------------------------
    // Private



}
