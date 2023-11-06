import 'package:dart_application_2/dart_application_2.dart'
    as dart_application_2;

enum Peson { tin, hoa, phuong }

void main(List<String> arguments) {
  // enum
  print(Peson.tin);
  print(Peson.tin.name);
  print(Peson.values.length);
  print(Peson.values[0]);
  print(Peson.values[1]);
  print(Peson.values.first);
  print(Peson.values.isEmpty);
  print(Peson.values.isNotEmpty);
  // duyet enum
  Peson.values.forEach((i) {
    print(i.name);
  });

// switch case ;
  var name = Peson.hoa;
  switch (name) {
    case Peson.hoa:
      print("la hoa nha");
      break;
    case Peson.tin:
      print("la tin nha");
      break;
    default:
      print("la phuong nha");
      break;
  }
}
