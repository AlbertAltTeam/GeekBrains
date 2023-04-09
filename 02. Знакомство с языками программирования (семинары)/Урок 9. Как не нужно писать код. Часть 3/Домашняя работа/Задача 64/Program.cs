using System;

class Program {
  static void Main(string[] args) {
    double M = 5.1;
    double N = 18.3;

    string result = "\"\""; // добавляем 2 кавычки (просто как в примере, может это лишнее :) )

    for(int i = (int)M; i <= (int)N; i++) {
      result += i;

      if(i != (int)N) {
        result += ", ";
      }
    }

    result += "\"\""; // добавляем 2 кавычки (просто как в примере, может это лишнее :) )

    Console.WriteLine(result); // выводим результат на экран (""5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18"")
  }
}
