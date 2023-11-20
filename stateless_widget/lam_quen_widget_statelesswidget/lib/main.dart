import 'package:flutter/material.dart';
void main() {
  runApp(const MyApp());
}
class MyApp extends StatelessWidget {
  const MyApp({Key? key});
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: SafeArea(
        child: Scaffold(
          appBar: AppBar(
            backgroundColor: Color.fromARGB(255, 212, 214, 60),
            centerTitle: true,
            title: const Text('Thuật toán nổi bọt'),
          ),
          body: Column(
            children: [
              Text(
                'Thuật toán nổi bọt là gì ?',
                textAlign: TextAlign.center,
                style: TextStyle(
                  fontWeight:FontWeight.bold,
                  fontSize: 18,
                  height: 1.5,
                ),
              ),
              Text('    - Thuật toán nổi bọt là là giải thuật so sánh 2 phần tử cạnh nhau',
              textAlign: TextAlign.left,
              style: TextStyle (
                fontSize: 16,
                height: 1.5,
              )
              ),
               Text('    - không phù hợp với tập dữ liệu lớn vì trường hợp xấu nhất big 0 (n^2)',
              textAlign: TextAlign.left,
              style: TextStyle (
                fontSize: 16,
                height: 1.5,
              )
              )
            ],
          ),
        ),
      ),
      debugShowCheckedModeBanner: false,
    );
  }
}