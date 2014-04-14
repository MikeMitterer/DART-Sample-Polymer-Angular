import 'dart:html';
import 'package:polymer/polymer.dart';
import 'package:validate/validate.dart';

@CustomTag('mm-sample-navbar')
class SampleNavbarElement extends PolymerElement {
    @observable String title = "";

    @observable bool sidebarRightAvailable = false;
    @observable bool sidebarLeftAvailable = false;
    @observable bool logContainerAvailable = false;

    get applyAuthorStyles => true;

    SampleNavbarElement.created() : super.created() {
        sidebarRightAvailable = (querySelector("mm-sidebar.sidebar.right") != null);
        sidebarLeftAvailable = (querySelector("mm-sidebar.sidebar.left") != null);
        logContainerAvailable = (querySelector("mm-log-container") != null);
    }


    // --------------------------------------------------------------------------------------------
    // EventHandler

    void handleToggleRightSideBar(Event e, var detail, Node target) {
        e.preventDefault();
        _toggleBodyClass("show-right-sidebar");
    }


    void handleOffCanvasSideBar(Event e, var detail, Node target) {
        e.preventDefault();
        _toggleBodyClass("show-left-sidebar");
    }

    void handleToggleLogging(Event e, var detail, Node target) {
        e.preventDefault();
        _toggleBodyClass("show-log-window");

        //_setMarginForBottomArea();
    }

    // --------------------------------------------------------------------------------------------
    // Private

    void _toggleBodyClass(final String className) {
        Validate.notBlank(className);

        final Element body = querySelector("body");
        if (body != null) {
            body.classes.toggle(className);
        }
    }

    /**
     * Abhängig davon ob das Log-Window angezeigt wird oder nicht wird der Rand am unteren Fensterbereich
     * vergrößert bzw. verkleinert.
     */
//    void _setMarginForBottomArea() {
//        final LogContainerElement logcontainer = querySelector("mm-log-container");
//        final HtmlElement footer = querySelector("mm-sample-footer");
//        final HtmlElement wrap = $["wrap"];
//
//        bool isLogContainerVisible = false;
//        int heightLogContainer = 0;
//        int heightFooter = 0;
//        int fullHeightBottomArea = 0;
//
//        if(logcontainer != null) {
//            heightLogContainer = int.parse(logcontainer.getAttribute("height"));
//            isLogContainerVisible = logcontainer.getComputedStyle().display != "none";
//        }
//
//        if(footer  != null) {
//            final String height = footer.getAttribute("height");
//            heightFooter = int.parse(footer.getAttribute("height"));
//        }
//
//        fullHeightBottomArea += heightFooter;
//        if(isLogContainerVisible) {
//            fullHeightBottomArea += heightLogContainer;
//        }
//
//        if(wrap != null) {
//            wrap.style.marginBottom = "-${fullHeightBottomArea}px";
//            wrap.style.paddingBottom = "${fullHeightBottomArea}px";
//        }
//    }

/*
    void closeClicked(Event e, var detail, Node target) {
        classes.add("hidden");
    }
    */
}
