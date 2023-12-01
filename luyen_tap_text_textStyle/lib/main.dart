import 'package:flutter/material.dart';

void main() => runApp(MaterialApp(
      home: SafeArea(
        child: Scaffold(
          appBar: AppBar(
            backgroundColor: const Color(0xFF14c339),
            title: const Text('Luyện tập dùng widget Text'),
          ),
          body: MyApp(),
          backgroundColor: const Color(0xffd8dfe5),
        ),
      ),
      debugShowCheckedModeBanner: false,
    ));

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      child: const Column(children: [
        SizedBox(height: 10),
        Text(
          'Ôn tập về text và textAlign trong flutter',
          textAlign: TextAlign.center,
          overflow: TextOverflow.clip,
          textDirection: TextDirection.ltr,
          style: TextStyle(
            fontSize: 26,
            fontWeight: FontWeight.bold,
            fontFamily: 'Times New Roman',
          ),
        ),
        SizedBox(height: 10),
        Text(
          ' Text bao gồm textDirection, textAlign, maxLine, overflow, textScaleFactor',
          textAlign: TextAlign.left,
          style: TextStyle(
            fontSize: 17,
            fontWeight: FontWeight.normal,
            fontFamily: 'Times New Roman',
          ),
        ),
        SizedBox(height: 10),
        Text(
          ' TextStyle gồm style, colors, fontstyle, fontweight, fontfamily, wordspace, letterspacing',
          style: TextStyle(
            fontSize: 17,
            fontWeight: FontWeight.normal,
            fontFamily: 'Times New Roman',
          ),
        ),
      ]),
    );
  }
}
