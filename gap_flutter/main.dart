import 'package:flutter/material.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home: Scaffold(
        body: Column(
          children: [
            Text('Đây là chương trình ôn gap'),
            SizedBox(height: 5),
            Text('Đây là column - Sizedbox '),
            SizedBox(height: 5),
            Text('đây là column - Padding '),
            Padding(
              padding: EdgeInsets.all(5),
            )
          ],
        ),
      ),
      debugShowCheckedModeBanner: false,
    );
  }
}
