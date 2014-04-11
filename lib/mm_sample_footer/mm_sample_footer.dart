library webapp_base_ui.sample_footer;

import 'package:polymer/polymer.dart';

@CustomTag('mm-sample-footer')
class SampleFooter extends PolymerElement {
    @observable int height = 0;

    SampleFooter.created() : super.created();
    get applyAuthorStyles => true;
}
