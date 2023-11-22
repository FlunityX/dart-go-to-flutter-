import 'package:ham_trong_dart_flutter/ham_trong_dart_flutter.dart'
    as ham_trong_dart_flutter;
import 'package:test/test.dart';

void tong2so(int a, int b) {
  int c = a + b;
  print(" tong 2 so la :$c");
}
void hieu2so(int d, int e) {
  int f = d - e;
  print("hieu 2 so la :$f");
}
int tich2so(int g, int k) {
  int l = g * k;
  print("tich 2 so la :$l");
  return l;
}
double thuong2so(double m, double n) {
  double o = m / n;
  print("thuong 2 so la $o");
  return o;
}
void main(List<String> arguments) {
  tong2so(5, 7);
  hieu2so(34, 12);
  tich2so(56, 17);
  thuong2so(12, 8);
}
