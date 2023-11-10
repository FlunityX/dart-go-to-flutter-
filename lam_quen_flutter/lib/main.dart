//1 khai báo thư viện
import 'package:flutter/material.dart';
//2.main 
void main() {
  //3. khởi động app và chạy ra chữ hello world
  runApp( MaterialApp(
    home:SafeArea(
      child:Scaffold(
        appBar:AppBar( backgroundColor: const Color.fromARGB(255, 31, 145, 31),title:const Text("tự học flutter"),) ,
        body:const Center(child: Text('Hello World')))
        )

  , debugShowCheckedModeBanner: false,
));
}