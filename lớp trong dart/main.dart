// viết chương trình khai báo lớp con mèo chứa 2 thuộc tính rồi in ra màn hình bằng phương thức Tostring 
class ConMeo {
  int chieucao;
  double cannang;
  
  ConMeo(this.chieucao, this.cannang);
  
  @override
  String toString() {
    return "Con meo (chieucao: $chieucao, cannang: $cannang)";
  }
}
void main(List<String> args) {
  ConMeo conmeo1 = ConMeo(40, 6);  
  print(conmeo1);
}