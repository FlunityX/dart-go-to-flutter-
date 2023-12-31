// Generated by DDC, the Dart Development Compiler (to JavaScript).
// Version: 2.19.2 (stable) (Tue Feb 7 18:37:17 2023 +0000) on "linux_x64"
// Module: zapp_user_main
// Flags: soundNullSafety(true), enableAsserts(true)
define('zapp_user_main', ['dart_sdk', 'flutter_sdk'], (function load__zapp_user_main(dart_sdk, flutter_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const js = dart_sdk.js;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_tester = flutter_sdk.src__widget_tester;
  const framework = flutter_sdk.src__widgets__framework;
  const finders = flutter_sdk.src__finders;
  const matchers = flutter_sdk.src__matchers;
  const icons = flutter_sdk.src__material__icons;
  const app = flutter_sdk.src__material__app;
  const safe_area = flutter_sdk.src__widgets__safe_area;
  const scaffold = flutter_sdk.src__material__scaffold;
  const app_bar = flutter_sdk.src__material__app_bar;
  const text = flutter_sdk.src__widgets__text;
  const basic = flutter_sdk.src__widgets__basic;
  const text_style = flutter_sdk.src__painting__text_style;
  const binding = flutter_sdk.src__widgets__binding;
  var $46zapp_entry = Object.create(dart.library);
  var widget_test = Object.create(dart.library);
  var web_plugin_registrant = Object.create(dart.library);
  var main = Object.create(dart.library);
  var $toString = dartx.toString;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    ListOfString: () => (T.ListOfString = dart.constFn(core.List$(core.String)))(),
    ListOfStringTodynamic: () => (T.ListOfStringTodynamic = dart.constFn(dart.fnType(dart.dynamic, [T.ListOfString()])))(),
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    dynamicToNull: () => (T.dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))(),
    VoidToNull: () => (T.VoidToNull = dart.constFn(dart.fnType(core.Null, [])))(),
    ObjectAndStackTraceTovoid: () => (T.ObjectAndStackTraceTovoid = dart.constFn(dart.fnType(dart.void, [core.Object, core.StackTrace])))(),
    ZoneAndZoneDelegateAndZone__Tovoid: () => (T.ZoneAndZoneDelegateAndZone__Tovoid = dart.constFn(dart.fnType(dart.void, [async.Zone, async.ZoneDelegate, async.Zone, core.String])))(),
    FutureOfvoid: () => (T.FutureOfvoid = dart.constFn(async.Future$(dart.void)))(),
    WidgetTesterToFutureOfvoid: () => (T.WidgetTesterToFutureOfvoid = dart.constFn(dart.fnType(T.FutureOfvoid(), [widget_tester.WidgetTester])))(),
    JSArrayOfWidget: () => (T.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(widget_test.main, T.VoidTovoid());
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: main.MyApp.prototype,
        [Widget_key]: null
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_selectionColor]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "Thuật toán nổi bọt"
      });
    }
  }, false);
  var C = Array(3).fill(void 0);
  var I = ["package:flutter_app/main.dart"];
  $46zapp_entry.runAppGuarded = function runAppGuarded() {
    async.runZonedGuarded(core.Null, dart.fn(() => {
      if (T.ListOfStringTodynamic().is(C[0] || CT.C0)) {
        T.ListOfStringTodynamic().as(C[0] || CT.C0)(T.JSArrayOfString().of([]));
      } else {
        (C[0] || CT.C0)();
      }
      if (js.context.hasProperty("__notifyFlutterRendered")) {
        async.Future.delayed(new core.Duration.new({milliseconds: 250})).then(core.Null, dart.fn(_ => {
          js.context.callMethod("__notifyFlutterRendered", [false]);
        }, T.dynamicToNull()));
      }
    }, T.VoidToNull()), dart.fn((e, stackTrace) => {
      if (js.context.hasProperty("zappHandlerUserError")) {
        js.context.callMethod("zappHandlerUserError", [e[$toString](), stackTrace.toString()]);
      }
    }, T.ObjectAndStackTraceTovoid()), {zoneSpecification: new async._ZoneSpecification.new({print: dart.fn((self, parent, zone, line) => {
          if (js.context.hasProperty("zappHandlerUserPrint")) {
            js.context.callMethod("zappHandlerUserPrint", [line]);
          }
        }, T.ZoneAndZoneDelegateAndZone__Tovoid())})});
  };
  $46zapp_entry.main = function main$() {
    return async.async(dart.void, function* main() {
      yield ui.webOnlyWarmupEngine({runApp: dart.fn(() => {
          $46zapp_entry.runAppGuarded();
        }, T.VoidToNull()), registerPlugins: dart.fn(() => {
          web_plugin_registrant.registerPlugins();
        }, T.VoidToNull())});
    });
  };
  var Widget_key = dart.privateName(framework, "Widget.key");
  widget_test.main = function main$0() {
    widget_tester.testWidgets("Counter increments smoke test", dart.fn(tester => async.async(dart.void, function*() {
      yield tester.pumpWidget(C[1] || CT.C1);
      yield tester.pumpAndSettle();
      widget_tester.expect(finders.find.text("0"), matchers.findsOneWidget);
      widget_tester.expect(finders.find.text("1"), matchers.findsNothing);
      yield tester.tap(finders.find.byIcon(icons.Icons.add));
      yield tester.pumpAndSettle();
      widget_tester.expect(finders.find.text("0"), matchers.findsNothing);
      widget_tester.expect(finders.find.text("1"), matchers.findsOneWidget);
    }), T.WidgetTesterToFutureOfvoid()));
  };
  web_plugin_registrant.registerPlugins = function registerPlugins() {
  };
  var Text_selectionColor = dart.privateName(text, "Text.selectionColor");
  var Text_textHeightBehavior = dart.privateName(text, "Text.textHeightBehavior");
  var Text_textWidthBasis = dart.privateName(text, "Text.textWidthBasis");
  var Text_semanticsLabel = dart.privateName(text, "Text.semanticsLabel");
  var Text_maxLines = dart.privateName(text, "Text.maxLines");
  var Text_textScaleFactor = dart.privateName(text, "Text.textScaleFactor");
  var Text_overflow = dart.privateName(text, "Text.overflow");
  var Text_softWrap = dart.privateName(text, "Text.softWrap");
  var Text_locale = dart.privateName(text, "Text.locale");
  var Text_textDirection = dart.privateName(text, "Text.textDirection");
  var Text_textAlign = dart.privateName(text, "Text.textAlign");
  var Text_strutStyle = dart.privateName(text, "Text.strutStyle");
  var Text_style = dart.privateName(text, "Text.style");
  var Text_textSpan = dart.privateName(text, "Text.textSpan");
  var Text_data = dart.privateName(text, "Text.data");
  main.MyApp = class MyApp extends framework.StatelessWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new main.MyApp.new({key: key});
    }
    build(context) {
      return new app.MaterialApp.new({home: new safe_area.SafeArea.new({child: new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({backgroundColor: new ui.Color.fromARGB(255, 212, 214, 60), centerTitle: true, title: C[2] || CT.C2}), body: new basic.Column.new({children: T.JSArrayOfWidget().of([new text.Text.new("Thuật toán nổi bọt là gì ?", {textAlign: ui.TextAlign.center, style: new text_style.TextStyle.new({fontWeight: ui.FontWeight.bold, fontSize: 18, height: 1.5})}), new text.Text.new("    - Thuật toán nổi bọt là là giải thuật so sánh 2 phần tử cạnh nhau", {textAlign: ui.TextAlign.left, style: new text_style.TextStyle.new({fontSize: 16, height: 1.5})}), new text.Text.new("    - không phù hợp với tập dữ liệu lớn vì trường hợp xấu nhất big 0 (n^2)", {textAlign: ui.TextAlign.left, style: new text_style.TextStyle.new({fontSize: 16, height: 1.5})})])})})}), debugShowCheckedModeBanner: false});
    }
  };
  (main.MyApp.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    main.MyApp.__proto__.new.call(this);
    ;
  }).prototype = main.MyApp.prototype;
  dart.addTypeTests(main.MyApp);
  dart.addTypeCaches(main.MyApp);
  dart.setMethodSignature(main.MyApp, () => ({
    __proto__: dart.getMethods(main.MyApp.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main.MyApp, I[0]);
  main.main = function main$1() {
    binding.runApp(C[1] || CT.C1);
  };
  dart.trackLibraries("zapp_user_main", {
    "file:///zapp/project/.zapp_entry.dart": $46zapp_entry,
    "file:///zapp/project/test/widget_test.dart": widget_test,
    "file:///zapp/project/.dart_tool/dartpad/web_plugin_registrant.dart": web_plugin_registrant,
    "package:flutter_app/main.dart": main
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["/zapp/project/.zapp_entry.dart","/zapp/project/test/widget_test.dart","/zapp/project/.dart_tool/dartpad/web_plugin_registrant.dart","/zapp/project/lib/main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA2CI,IA1BF,iCAAgB;AACd,UAAoB,6BAGD;AAF8B,QAA9B,AAAkB,6BAElB,eAF2B;;AAEL,QAAF,CAApB;;AAEnB,UAAO,AAAQ,uBAAY;AAKvB,QAJK,AAAqC,qBAA7B,qCAAuB,uBAAW,QAAC;AAG9C,UAFC,AAAQ,sBAAW,2BAA2B,CAC/C;;;wBAIL,SAAC,GAAG;AACL,UAAO,AAAQ,uBAAY;AAIvB,QAHC,AAAQ,sBAAW,wBAAwB,CAC5C,AAAE,CAAD,eACD,AAAW,UAAD;;2DAGM,yCACb,SAAC,MAAM,QAAQ,MAAM;AAC1B,cAAO,AAAQ,uBAAY;AAC4B,YAAlD,AAAQ,sBAAW,wBAAwB,CAAC,IAAI;;;EAI3D;;AAEiB;AAQd,MAPD,MAAS,gCACC;AACS,UAAf;6CAEe;AACmB,UAAjB;;IAGvB;;;;AC1BI,IAhBF,0BAAY,iCAAiC,QAAc;AAEnB,MAAtC,MAAM,AAAO,MAAD;AACgB,MAA5B,MAAM,AAAO,MAAD;AAG0B,MAAtC,qBAAO,AAAK,kBAAK,MAAM;AACa,MAApC,qBAAO,AAAK,kBAAK,MAAM;AAGiB,MAAxC,MAAM,AAAO,MAAD,KAAK,AAAK,oBAAa;AACP,MAA5B,MAAM,AAAO,MAAD;AAGwB,MAApC,qBAAO,AAAK,kBAAK,MAAM;AACe,MAAtC,qBAAO,AAAK,kBAAK,MAAM;IACxB;EACH;;ECvBwB;;;;;;;;;;;;;;;;;;;;;UCAI;AACxB,YAAO,gCACC,mCACG,mCACG,yCACiB,sBAAS,KAAK,KAAK,KAAK,kBAClC,oCAGT,gCACM,wBACR,kBACE,0CACqB,4BACd,0CACiB,8BACZ,YACF,SAGZ,kBAAK,qFACgB,0BACd,wCACK,YACF,SAGT,kBAAK,0FACe,0BACd,wCACK,YACF,6CAOU;IAEhC;;;QA1CkB;AAAZ;;EAAiB;;;;;;;;;AAHF,IAArB;EACF","file":"main.js"}');
  // Exports:
  return {
    zapp__project__$46zapp_entry: $46zapp_entry,
    zapp__project__test__widget_test: widget_test,
    zapp__project__$46dart_tool__dartpad__web_plugin_registrant: web_plugin_registrant,
    main: main
  };
}));

//# sourceMappingURL=main.js.map
